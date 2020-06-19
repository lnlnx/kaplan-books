export function responseToBooks(response) {
    return response.items.map(item => ({
            id: item.id,
            authors: item.volumeInfo.authors.join(", "),
            title: item.volumeInfo.title,
            publisher: item.volumeInfo.publisher,
            publishedDate: item.volumeInfo.publishedDate
        })
    )
};
