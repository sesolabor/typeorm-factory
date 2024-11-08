import { FactoryClass } from './types';
import { Factory } from './factory';
import { ObjectLiteral } from 'typeorm';
export declare class SubFactory<T extends ObjectLiteral> {
    factory: Factory<T>;
    values: Partial<T> | undefined;
    constructor(factory: FactoryClass<T>, values?: Partial<T>);
}
