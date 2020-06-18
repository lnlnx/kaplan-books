import React from 'react';
import classes from './Book.module.css'
const Book = (props) => {
    return (
        <div className={classes.Book}>
            <p>{props.book.title}</p>
            <p>{props.book.authors}</p>
            <p>{props.book.publisher}</p>
            <p>{props.book.publishedDate}</p>
        </div>
    );
};

export default Book;