"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostGeneration = void 0;
const factory_storage_1 = require("../factory-storage");
function PostGeneration() {
    return function (target, propertyKey) {
        factory_storage_1.FactoryStorage.storage.addFactoryPostGenerator(target.constructor.name, propertyKey);
    };
}
exports.PostGeneration = PostGeneration;
