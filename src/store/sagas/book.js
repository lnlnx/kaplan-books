import { call, put } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { responseToBooks } from '../../utils/BookPreprocess';

export function* fetchBooksSaga() {
    try {
        const books = yield call(fetch, 'https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep');
        const bookData = yield books.json()
        yield put({ type: actionTypes.FETCH_BOOKS_SUCCESS, books: responseToBooks(bookData) });
    } catch(error) { 
            yield  put({
                type: actionTypes.FETCH_BOOKS_FAIL,
                error: error
            })
    }
};