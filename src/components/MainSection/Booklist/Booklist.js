import React, { Component } from 'react';
import Book from './Book/Book';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import Spinner from '../../UI/Spinner/Spinner';
import classes from './Booklist.module.scss';

class Booklist extends Component {
    componentDidMount() {
        this.props.onLoad()
    }

    render() {
        const body = <p>Failed loading books!</p> 
        const listComponent = this.props.loading ? <Spinner /> :
                <div className={classes["book-list"]}>
                    {this.props.books.map(book => <Book key={book.id} book={book} />)}
                </div>
        
        return ((this.props.error && body) || listComponent);
    }
};

/**
 * Takes complete book list and search string, returns list of matched books with matched parts.
 * If there is no matched part, the book is filtered out.
 * @param {*} books book object, containing id, title, author, publisher and publisher date
 * @param {String} search search string entered by user
 */
export const getVisibleBooks = (books, search) => {
    // if search string is empty, return all books
    if (search === "") {
        return books
    };
    return books.map(book => {
        let matchedParts = []
        var part
        for (part of ["authors", "title", "publisher"]) {
            if (book[part] && book[part].toLowerCase().includes(search.toLowerCase())) {
                matchedParts.push(part)
            }
        };
        return {
            ...book,
            matchedParts: matchedParts
        };
    }).filter(book => book.matchedParts.length > 0) // if a book has no matched part, it should not be visible
};

const mapStateToProps = state => ({
    books: getVisibleBooks(state.books, state.searchString),
    loading: state.loading,
    error: state.error
});

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => dispatch(actions.booksFetchStart())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Booklist);