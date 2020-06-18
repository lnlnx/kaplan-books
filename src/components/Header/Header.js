import React, { useState } from 'react';
import Button from '../UI/Button/Button';
import Modal from '../UI/Modal/Modal';
import NewBook from '../NewBook/NewBook';
import classes from './Header.module.scss';

const Header = (props) => {
    const [creating, setCreating] = useState(false);
    const createBookHandler = ()=> {
        setCreating(true)
    }

    return (
        <div className={classes.Header}>
            <Modal show={creating}>
                <NewBook />
            </Modal>
            <h1 className={classes.Header_Title}>Book</h1>
            <Button clicked={createBookHandler} >Create Book</Button>
        </div>
    );
};

export default Header;