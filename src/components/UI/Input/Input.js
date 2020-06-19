import React from 'react';
import classes from './Input.module.css';
const Input = (props) => {
   
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.elementConfig.title}</label>
            <input 
                className={classes.InputElement}
                value={props.value}
                placeholder={props.placeholder} 
                onChange={props.changed} />
        </div>
    )
    
}
export default Input;