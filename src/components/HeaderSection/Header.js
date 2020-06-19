import React, { useState, useCallback } from 'react';
import Button from '../UI/Button/Button';
import Modal from '../UI/Modal/Modal';
import NewBook from '../NewBook/NewBook';
import Search from './Search/Search';
import classes from './Header.module.scss';

const Header = (props) => {
    const [creating, setCreating] = useState(false);
    const createBookCancelHandler = useCallback(() => {
        setCreating(false);
    }, []);
    return (
        <div className={classes["header-section"]}>
            {creating ? <Modal modalClosed={createBookCancelHandler}>
                <NewBook modalClosed={createBookCancelHandler}/>
            </Modal> : null}
            <div className={classes.header}>
                <h2 className={classes["header-title"]}>Books</h2>
                <div className={classes["create-button"]}>
                    <Button  clicked={() => setCreating(true)} >Create New Book</Button>
                </div>
            </div>
            <Search />
        </div>
    );
};

export default Header;