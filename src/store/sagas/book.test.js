import { fetchBooksSaga } from './book';
import { put, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';

describe("fetchBooksSaga", () => {
    it("should dispath success action after parsing response", () => {
        const mockBookData = {
            "items": [
              {
                "id": "7zl3ngEACAAJ",
                "volumeInfo": {
                  "title": "Kaplan Civil Service Exams",
                  "authors": [
                    "Kaplan, Inc"
                  ],
                  "publishedDate": "2006",
                }
              }]
    }
        const mockResponse = {json: () => (mockBookData)}
        const generator = fetchBooksSaga();
        generator.next();
        expect(generator.next(mockResponse).value)
        .toEqual(mockBookData)
        expect(generator.next(mockBookData).value)
        .toEqual(put({type: actionTypes.FETCH_BOOKS_SUCCESS, books: [
            {
                id: "7zl3ngEACAAJ",
                title: "Kaplan Civil Service Exams",
                authors: "Kaplan, Inc",
                publishedDate: "2006",
                publisher: undefined
            }]})
        )
        expect(generator.next().done).toBeTruthy();
    })
})