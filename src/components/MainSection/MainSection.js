import React from 'react';
import Booklist from './Booklist/Booklist';
import classes from './MainSection.module.scss';

const MainSection = (props) => {
    return (
        <div className={classes["main-section"]}>
            <h4 className={classes["main-section__text"]}>All Books</h4>
            <Booklist></Booklist>
        </div>
    );
};

export default MainSection;