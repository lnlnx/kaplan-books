import React from 'react';
import classes from './Modal.module.scss';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => (
    <React.Fragment>
        <Backdrop show clicked={props.modalClosed} />
        <div
            className={classes.modal} display="block">
            {props.children}
        </div>
    </React.Fragment>
);

export default Modal;