import React from 'react';
import classes from './Button.module.scss';
const Button = (props) => {
    let styleClasses = [classes.Button]
    if (props.cancel) {
        styleClasses.push(classes["Button--cancel"])
    }
    return (
        <button
            className={styleClasses.join(" ")}
            onClick={props.clicked}
            disabled={props.disabled}
            >{props.children}</button>
    );
};

export default Button;