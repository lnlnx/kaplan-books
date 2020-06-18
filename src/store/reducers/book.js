
import * as actionTypes from '../actions/actionTypes';


const initialState = {
    books: [],
    searchString: "",
    error: null,
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_BOOKS_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                books: action.books,
                loading: false
            };
        case actionTypes.FETCH_BOOKS_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        case actionTypes.SET_SEARCH_STRING:
            return {
                ...state,
                searchString: action.searchString
            }
        case actionTypes.CREATE_BOOK:

            return {
                ...state,
                books: state.books.concat(action.book)
            }
        default:
            return state;

    }
}
export default reducer;