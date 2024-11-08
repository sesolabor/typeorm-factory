export declare class FactoryStorage {
    private static instance;
    factoryPostGenerators: {
        [factoryName: string]: string[];
    };
    private constructor();
    static get storage(): FactoryStorage;
    addFactoryPostGenerator(factoryName: string, fnName: string): void;
    getPostGenerators(factoryName: string): string[];
}
