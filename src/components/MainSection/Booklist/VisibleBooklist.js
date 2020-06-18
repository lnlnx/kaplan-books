
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
            if (book[part] && book[part].includes(search)) {
                matchedParts.push(part)
            }
        };
        return {
            ...book,
            matchedParts: matchedParts
        };
    }).filter(book => book.matchedParts.length > 0) // if a book has no matched part, it should not be visible
}