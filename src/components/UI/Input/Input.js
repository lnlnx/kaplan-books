import React from 'react';
import classes from './Input.module.css';
const Input = (props) => {
   
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.elementConfig.placeholder}</label>
            <input 
                className={classes.InputElement}
                value={props.value} 
                onChange={props.changed} />
        </div>
    )
    
}
export default Input;