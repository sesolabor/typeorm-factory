"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubFactory = void 0;
class SubFactory {
    constructor(factory, values) {
        this.factory = new factory();
        this.values = values;
    }
}
exports.SubFactory = SubFactory;
