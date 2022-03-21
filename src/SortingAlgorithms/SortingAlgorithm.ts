abstract class SortingAlgorithm {
    static sort(): number[] {
        throw new Error('Not implemented!');
    }

    abstract toString(): string;
}

export { SortingAlgorithm };
