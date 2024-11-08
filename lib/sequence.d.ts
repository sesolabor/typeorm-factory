import { SequenceFn } from './types';
export declare class Sequence {
    fn: SequenceFn;
    private currentIndex;
    constructor(fn: SequenceFn);
    get nextValue(): any;
}
