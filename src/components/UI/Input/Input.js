import React from 'react';
import classes from './Input.module.scss';
const Input = (props) => {
    return (
        <div className={classes.input}>
            <label className={classes["input--label"]}>{props.elementConfig.title}</label>
            <input 
                className={classes["input-element"]}
                value={props.value}
                placeholder={props.placeholder} 
                onChange={props.changed} />
        </div>
    )
    
}
export default Input;