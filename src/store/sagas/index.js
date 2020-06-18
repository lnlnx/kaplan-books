import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { fetchBooksSaga } from './book';

export function* watchBooks() {
    yield takeEvery(actionTypes.FETCH_BOOKS_START, fetchBooksSaga);
}

