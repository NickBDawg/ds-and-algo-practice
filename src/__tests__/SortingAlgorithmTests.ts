import { BubbleSort } from "../SortingAlgorithms/BubbleSort";

const bloop = [
    BubbleSort
];

const TWELVE_INTS_UNSORTED = [3, 8, 1, 9, 4, 19, 3, 2, -1, -542, 5631, 0];
const TWELVE_INTS_SORTED = [-542, -1, 0, 1, 2, 3, 3, 4, 8, 9, 19, 5631];

for (const sortingAlgorithm of bloop) {
    describe(sortingAlgorithm.toString(), () => {
        test("it should sort normal", () => {
            expect(BubbleSort.sort(TWELVE_INTS_UNSORTED)).toStrictEqual(TWELVE_INTS_SORTED);
        });

        test("it should sort empty array", () => {
            expect(BubbleSort.sort([])).toStrictEqual([]);
        });

        test("it should sort single int array", () => {
            expect(BubbleSort.sort([5])).toStrictEqual([5]);
        });
    });
}