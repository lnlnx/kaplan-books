import * as actionTypes from './actionTypes';


export const booksFetchFail = (error) => {
    return {
        type: actionTypes.FETCH_BOOKS_FAIL,
        error: error
    }
} 


export const booksFetchStart = () => {
    return {
        type: actionTypes.FETCH_BOOKS_START 
    }
} 

export const booksFetchSuccess = (booklist) => {
    return {
        type: actionTypes.FETCH_BOOKS_SUCCESS,
        books: booklist
    }
} 

export const fetchBooks = () => {
    return {

    }
}