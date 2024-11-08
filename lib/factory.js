"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factory = void 0;
const typeorm_1 = require("typeorm");
const subfactory_1 = require("./subfactory");
const sequence_1 = require("./sequence");
const factory_storage_1 = require("./factory-storage");
class Factory {
    constructor() { }
    async create(values = {}) {
        if (this.getOrCreate().length !== 0) {
            const existingEntity = await this.getExistingEntity(values);
            if (existingEntity) {
                return existingEntity;
            }
        }
        const entity = await this.createEntity(values);
        const savedEntity = await (0, typeorm_1.getRepository)(this.entity).save(entity);
        const storage = factory_storage_1.FactoryStorage.storage;
        const postGenerators = storage.getPostGenerators(this.constructor.name);
        if (postGenerators && postGenerators.length !== 0) {
            await Promise.all(postGenerators.map(async (fnName) => this[fnName](savedEntity)));
        }
        return savedEntity;
    }
    async createMany(count, values = {}) {
        const entities = await Promise.all(Array.from({ length: count }).map(() => this.createEntity(values)));
        return (0, typeorm_1.getRepository)(this.entity).save(entities);
    }
    getOrCreate() {
        return [];
    }
    async getExistingEntity(values) {
        const whereClauses = {};
        this.getOrCreate().forEach((key) => {
            whereClauses[key] = values[key] ? values[key] : this[key];
        });
        return (0, typeorm_1.getRepository)(this.entity).findOne({ where: whereClauses });
    }
    async createEntity(values) {
        const entity = new this.entity();
        await Promise.all(Object.entries(this).map(async ([key, value]) => {
            const _value = Object.prototype.hasOwnProperty.call(values, key) ? values[key] : value;
            const entityValue = await Factory.getEntityValue(_value);
            Object.assign(entity, { [key]: entityValue });
        }));
        return entity;
    }
    static async getEntityValue(value) {
        if (value instanceof subfactory_1.SubFactory) {
            return value.factory.create(value.values);
        }
        else if (value instanceof sequence_1.Sequence) {
            return value.nextValue;
        }
        else {
            return value;
        }
    }
}
exports.Factory = Factory;
