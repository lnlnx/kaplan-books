
import * as actionTypes from '../actions/actionTypes';


const initialState = {
    books: [],
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_BOOKS_START:
            return state;
        case actionTypes.FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                books: action.books
            };
        case actionTypes.FETCH_BOOKS_FAIL:
            return state;
        default:
            return state;

    }
}
export default reducer;