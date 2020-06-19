import React, { useState, useEffect, useRef } from 'react';
import * as actions from '../../../store/actions/index';
import { connect } from 'react-redux';
import classes from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';

const Search = ({ onSearch }) => {

    const [searchString, setSearchString] = useState("");
    const inputRef = useRef()

    // This is to debounce user's inout to avoid updating search string too frequent
    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchString === inputRef.current.value) {
                onSearch(searchString)
            }
        }, 500)
        return () => { clearTimeout(timer); }
    }, [searchString, inputRef, onSearch]);

    return (
        <div className={classes["search-wrapper"]}>
            <div className={classes.search}>
                <FontAwesomeIcon icon={faSearch} className={classes["search-icon"]} />
                <input
                    type="text"
                    className={classes["search__input"]}
                    ref={inputRef}
                    value={searchString}
                    placeholder={"Search"}
                    onChange={event => setSearchString(event.target.value)} />
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearch: (searchString) => dispatch(actions.setSearchString(searchString))
    }
};
export default connect(null, mapDispatchToProps)(Search);