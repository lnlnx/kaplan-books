import React, { Component } from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import classes from './NewBook.module.css';

class NewBook extends Component {
    state = {
        title: {
            title: 'Title',
            placeholder: 'Required',
            value: ''
        },
        authors: {
            title: 'Author Names',
            placeholder: 'Required',
            value: ''
        },
        publisher: {
            title: 'Publisher',
            placeholder: 'Optional',
            value: ''
        },
        publishedDate: {
            title: 'Published Date',
            placeholder: 'Required',
            value: ''
        }
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const bookForm = { ...this.state };
        const bookElement = { ...bookForm[inputIdentifier], value: event.target.value };
        bookForm[inputIdentifier] = bookElement
        this.setState(bookForm);
    }

    createBookHandler = (event) => {
        event.preventDefault();
        // Assign a random ID for local data
        const formData = { id: '_' + Math.random().toString(36).substr(2, 9) };
        for (let formElementIdentifier in this.state) {
            formData[formElementIdentifier] = this.state[formElementIdentifier].value
        }
        this.props.onCreate(formData);
        this.props.modalClosed()
    }

    cancelBookHandler = (event) => {
        event.preventDefault();
        this.props.modalClosed();
    }

    render() {
        const formEleArray = [];
        for (let key in this.state) {
            formEleArray.push({
                id: key,
                config: this.state[key]
            });
        }
        let form = formEleArray.map(ele => {
            return <Input
                key={ele.id}
                value={ele.config.value}
                required={true}
                placeholder={ele.config.placeholder}
                changed={event => this.inputChangedHandler(event, ele.id)}
                elementConfig={ele.config} />
        })
        const allowToCreate = Object.entries(this.state).every(entry => {
            const [key, value] = entry
            if (key === "publisher") {
                return true
            }
            return value["value"] !== ""
        });
        return (
            <form>
                {form}
                <div className={classes["button-group"]}>
                    <Button clicked={this.createBookHandler}
                        disabled={!allowToCreate}
                        ariaLabel={"Submit a New Book"}>Create Now</Button>
                    <Button clicked={this.cancelBookHandler}
                        ariaLabel={"Return to main page"}
                        cancel>Cancel</Button>
                </div>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCreate: (formData) => dispatch(actions.createBook(formData))
    }
}
export default connect(null, mapDispatchToProps)(NewBook);