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
        <div className={classes.HeaderSection}>
            {creating ? <Modal modalClosed={createBookCancelHandler}>
                <NewBook modalClosed={createBookCancelHandler}/>
            </Modal> : null}
            <div className={classes.Header}>
                <h2 className={classes.Header_Title}>Books</h2>
                <div className={classes.CreateButtton}>
                    <Button  clicked={() => setCreating(true)} >Create New Book</Button>
                </div>
            </div>
            <Search />
        </div>
    );
};

export default Header;