import React from 'react';
import Booklist from './Booklist/Booklist';
import Search from './Search/Search';
const MainSection = (props) => {
    return (
        <div>
            <Search></Search>
            <Booklist></Booklist>
        </div>
    );
};

export default MainSection;