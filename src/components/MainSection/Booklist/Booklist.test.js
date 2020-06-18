import {getVisibleBooks} from './Booklist';

describe("getVisibleBooks", () => {
    it("should filter books by search string and return list of books with matched parts", () => {
        const testBooks = [
            {id: "1", authors: "author1", title: "title", publisher: "some"},
            {id: "2", authors: "author1", title: "title2", publisher: "some title"},
            {id: "3", authors: "author1", title: "test", publisher: "some"},
        ]
        expect(getVisibleBooks(testBooks, "some")).toEqual(
            [
                {id: "1", authors: "author1", title: "title", publisher: "some", matchedParts: ["publisher"]},
                {id: "2", authors: "author1", title: "title2", publisher: "some title", matchedParts: ["publisher"]},
                {id: "3", authors: "author1", title: "test", publisher: "some", matchedParts: ["publisher"]},
            ]
        )

        expect(getVisibleBooks(testBooks, "title")).toEqual(
            [
                {id: "1", authors: "author1", title: "title", publisher: "some", matchedParts: ["title"]},
                {id: "2", authors: "author1", title: "title2", publisher: "some title", matchedParts: ["title", "publisher"]}
            ]
        )
    })
})