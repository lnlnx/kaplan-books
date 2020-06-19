import React from 'react';
import Booklist from './Booklist/Booklist';
import classes from './MainSection.module.scss';

const MainSection = (props) => {
    return (
        <div className={classes.MainSection}>
            <Booklist></Booklist>
        </div>
    );
};

export default MainSection;