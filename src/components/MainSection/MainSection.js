import React from 'react';
import Booklist from './Booklist/Booklist';
import classes from './MainSection.module.scss';

const MainSection = (props) => {
    return (
        <div className={classes.MainSection}>
            <h4>All Books</h4>
            <Booklist></Booklist>
        </div>
    );
};

export default MainSection;