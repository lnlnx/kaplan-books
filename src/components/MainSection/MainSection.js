import React from 'react';
import Booklist from './Booklist/Booklist';
import Search from './Search/Search';
import Book from './Booklist/Book/Book';
const MainSection = () => {
    return (
        <div>
            <Search></Search>
            <Booklist></Booklist>
        </div>
    );
};

export default MainSection;