import React, { useState } from 'react';
import Button from '../UI/Button/Button';
import Modal from '../UI/Modal/Modal';
import NewBook from '../NewBook/NewBook';
const Header = (props) => {
    const [creating, setCreating] = useState(false);
    const createBookHandler = ()=> {
        setCreating(true)
        console.log('clicked')
    }

    return (
        <div>
            <Modal show={creating}>
                <NewBook />
            </Modal>
            <h1>Book</h1>
            <Button clicked={createBookHandler} >Create Book</Button>
        </div>
    );
};

export default Header;