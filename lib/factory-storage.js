"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryStorage = void 0;
class FactoryStorage {
    constructor() {
        this.factoryPostGenerators = {};
    }
    static get storage() {
        if (!this.instance) {
            this.instance = new FactoryStorage();
        }
        return this.instance;
    }
    addFactoryPostGenerator(factoryName, fnName) {
        if (!this.factoryPostGenerators[factoryName]) {
            this.factoryPostGenerators[factoryName] = [fnName];
        }
        else {
            this.factoryPostGenerators[factoryName].push(fnName);
        }
    }
    getPostGenerators(factoryName) {
        return this.factoryPostGenerators[factoryName];
    }
}
exports.FactoryStorage = FactoryStorage;
