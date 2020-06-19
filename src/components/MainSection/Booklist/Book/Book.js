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
        let styleClass = [classes.Book__Content]
        if (props.book["matchedParts"] && props.book["matchedParts"].includes(key)) {
            styleClass.push(classes["Book__Content--Highlighted"])
        }
        return props.book[key] && <p key={key} className={styleClass.join(" ")}>{propertyName}: {props.book[key]}</p>
    });

    let styleClass = [classes.Book__Title]
    if (props.book["matchedParts"] && props.book["matchedParts"].includes("title")) {
        styleClass.push(classes["Book__Title--Highlighted"])
    }
    return (
        <div className={classes.BookWrapper}>
            <div className={classes.Book}>
                <h4 className={styleClass.join(" ")}>{props.book.title}</h4>
                {bookContentBody}
            </div>
        </div>
    );
};

export default Book;