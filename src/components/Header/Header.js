import React, { useState } from 'react';
import Button from '../UI/Button/Button';
import Modal from '../UI/Modal/Modal';
import NewBook from '../NewBook/NewBook';
import classes from './Header.module.scss';

const Header = (props) => {
    const [creating, setCreating] = useState(false);
    const createBookHandler = () => {
        setCreating(!creating);
    };
    const createBookCancelHandler = (event) => {
        setCreating(!creating);
    };
    return (
        <div className={classes.Header}>
            <Modal show={creating} modalClosed={createBookCancelHandler}>
                <NewBook modalClosed={createBookCancelHandler}/>
            </Modal>
            <h2 className={classes.Header_Title}>Books</h2>
            <div className={classes.CreateButtton}>
                <Button  clicked={createBookHandler} >Create New Book</Button>
            </div>
          
        </div>
    );
};

export default Header;