import React from 'react';
import classes from './Book.module.scss'

const BookPropertyName = {
    authors: "Authors",
    publisher: "Publisher",
    publishedDate: "Publish Date"
}

const Book = (props) => {

    const bookContentBody = Object.entries(BookPropertyName).map(entry => {
        const [key, propertyName] = entry
        return props.book[key] && <p key={key} className={classes.Book_Content}>{propertyName}: {props.book[key]}</p>
    });

    return (
        <div className={classes.BookWrapper}>
            <div className={classes.Book}>
                <h4 className={classes.Book_Title}>{props.book.title}</h4>
                {bookContentBody}
            </div>
        </div>
    );
};

export default Book;