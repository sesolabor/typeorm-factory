"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sequence = void 0;
class Sequence {
    constructor(fn) {
        this.currentIndex = 0;
        this.fn = fn;
    }
    get nextValue() {
        const value = this.fn(this.currentIndex);
        this.currentIndex++;
        return value;
    }
}
exports.Sequence = Sequence;
