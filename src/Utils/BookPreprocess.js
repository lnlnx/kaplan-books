
export function responseToBooks(response) {
    return response.items.map(item => ({
            id: item.id,
            authors: item.volumeInfo.authors.join(", "),
            title: item.volumeInfo.title,
            publisher: item.volumeInfo.publisher,
            publishedDate: item.volumeInfo.publishedDate
        })
    )
}

/**
 * Split book authors, title and publisher into words and return
 * a map of match type and document id to the word
 * @param book a processed book object
 */
export function preprocessBook(book) {
    return Object.entries(book).flatMap( entry => {
        const [key, value] = entry
        return (typeof(value) != "undefined") ? (
            key == "id" ? [] : value.split(" ").map( word => (
                [word.replace(/\W/g, ''), { matchType: key, documentId: book.id}]
            ))
         ) : []
    });
}

/**
 * Update previous word index map with new book word index array
 * @param prevMap previous word index map
 * @param {Array<Array>} bookWordList new word index array generated by proprocessBook function
 */
export function updateIndexMap(prevMap, bookWordList) {
    let newMap = {...prevMap};
    bookWordList.forEach(wordMap => {
        if (wordMap[0] in newMap) {
            newMap[wordMap[0]] = newMap[wordMap[0]].concat(wordMap[1])
        } else {
            newMap[wordMap[0]] = [wordMap[1]]
        }
    });
    return newMap;
}