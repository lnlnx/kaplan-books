import {preprocessBook, updateIndexMap} from './BookPreprocess';

describe('preprocessBook', () => {
    test("should convert book object into array of word and match info pairs", () => {
        const testBook = {
            id: "12345",
            authors: "author1, author2",
            title: "Some random title",
            publisher: undefined
        }
        const processWordIndex = preprocessBook(testBook)
        expect(new Set(processWordIndex)).toEqual(new Set([
            ["author1", {matchType: "authors", id: "12345"}],
            ["author2", {matchType: "authors", id: "12345"}],
            ["Some", {matchType: "title", id: "12345"}],
            ["random", {matchType: "title", id: "12345"}],
            ["title", {matchType: "title", id: "12345"}]
        ]))
    });
})

describe('updateIndexMap', () => {
    test("should update previous word index object with new book word index array", () => {
        const prevMap = {
            "Some": [{matchType: "authors", id: "54321"}]
        }
        const newBookWordsArray = [
            ["author1", {matchType: "authors", id: "12345"}],
            ["Some", {matchType: "title", id: "12345"}]
        ]
        expect(updateIndexMap(prevMap, newBookWordsArray)).toEqual(
            {
                "Some": [
                    {matchType: "authors", id: "54321"},
                    {matchType: "title", id: "12345"}
                ],
                "author1": [
                    {matchType: "authors", id: "12345"}
                ]
            }
        )
    })
})