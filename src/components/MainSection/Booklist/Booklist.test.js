import Booklist, {getVisibleBooks} from './Booklist';
import Book from './Book/Book';
import Enzyme, { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

configure({ adapter: new Adapter() });

describe("getVisibleBooks", () => {
    it("should filter books by search string and return list of books with matched parts", () => {
        const testBooks = [
            {id: "1", authors: "author1", title: "title", publisher: "some"},
            {id: "2", authors: "author1", title: "title2", publisher: "some title"},
            {id: "3", authors: "author1", title: "test", publisher: "some"},
        ]
        expect(getVisibleBooks(testBooks, "some")).toEqual(
            [
                {id: "1", authors: "author1", title: "title", publisher: "some", matchedParts: ["publisher"]},
                {id: "2", authors: "author1", title: "title2", publisher: "some title", matchedParts: ["publisher"]},
                {id: "3", authors: "author1", title: "test", publisher: "some", matchedParts: ["publisher"]},
            ]
        )

        expect(getVisibleBooks(testBooks, "title")).toEqual(
            [
                {id: "1", authors: "author1", title: "title", publisher: "some", matchedParts: ["title"]},
                {id: "2", authors: "author1", title: "title2", publisher: "some title", matchedParts: ["title", "publisher"]}
            ]
        )
    })
})

describe("<Booklist />", () => {
    let store
    beforeEach(() => {
        store = mockStore({
            books: [{id: "123", "authors": "123", "title": "123", "publishedDate": "123"}],
            searchString: "",
            loading: false
          });
    });

    it('renders x number of <Book /> components from books state', () => {
        const wrapper = mount(<Booklist store={store}/>);
        expect(wrapper.find(Book)).toHaveLength(1)
      });
})