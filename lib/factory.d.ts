import { ObjectLiteral } from 'typeorm';
import { Constructable } from './types';
export declare abstract class Factory<T extends ObjectLiteral> {
    abstract get entity(): Constructable<T>;
    constructor();
    create(values?: Partial<T>): Promise<T>;
    createMany(count: number, values?: Partial<T>): Promise<T[]>;
    protected getOrCreate(): string[];
    private getExistingEntity;
    private createEntity;
    private static getEntityValue;
}
