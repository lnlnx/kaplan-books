import React from 'react';
import Booklist from './Booklist/Booklist';
import Search from './Search/Search';
import classes from './MainSection.module.scss';


const MainSection = () => {
    return (
        <div className={classes.MainSection}>
            <Search></Search>
            <Booklist></Booklist>
        </div>
    );
};

export default MainSection;