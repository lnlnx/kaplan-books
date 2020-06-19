import React from 'react';
import classes from './Button.module.scss';
const Button = (props) => {
    let styleClasses = [classes["button"]]
    if (props.cancel) {
        styleClasses.push(classes["button--cancel"])
    }
    return (
        <button
            className={styleClasses.join(" ")}
            onClick={props.clicked}
            disabled={props.disabled}
            aria-label={props.ariaLabel}
        >{props.children}
        </button>
    );
};
export default Button;