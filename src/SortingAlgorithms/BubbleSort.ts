import { SortingAlgorithm } from './SortingAlgorithm';

class BubbleSort implements SortingAlgorithm {
    static sort(input: number[]): number[] {
        if (input.length <= 1) {
            return input;
        }

        for (let i = 0; i < input.length; i++) {
            for (let j = 0; j < input.length - i - 1; j++) {
                if (input[j] > input[j + 1]) {
                    const temp = input[j];
                    input[j] = input[j + 1];
                    input[j + 1] = temp;
                }
            }
        }

        return input;
    }

    static toString(): string {
        return "Bubble Sort";
    }
}

export { BubbleSort };
