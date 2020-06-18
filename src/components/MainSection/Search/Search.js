import React, { useState, useEffect, useRef } from 'react';
import * as actions from '../../../store/actions/index';
import { connect } from 'react-redux';

const Search = (props) => {

    const [searchString, setSearchString] = useState("");
    const inputRef = useRef()

    // This is to debounce user's inout to avoid updating search string too frequent
    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchString === inputRef.current.value) {
                props.onChange(searchString)
            }
        }, 500)
        return () => {clearTimeout(timer);}
    }, [searchString, inputRef]);

    return (
        <input
         ref = {inputRef}
         value={props.searchString}
         onChange={event => setSearchString(event.target.value)}/>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (searchString) => dispatch(actions.setSearchString(searchString))
    }
};

export default connect(null, mapDispatchToProps)(Search);