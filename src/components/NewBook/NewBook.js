import React, { Component } from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import classes from './NewBook.module.css';
class NewBook extends Component {
    state = {
        title:{  
            placeholder: 'Title',
            touched: false,
            value: ''
        },
        authors: {
            placeholder: 'Author',
            touched: false,
            value: ''
        },
        publisher: {
            placeholder: 'Publisher',
            touched: false,
            value: ''
        },
        publishedDate: {
            placeholder: 'Published Date',
            touched: false,
            value: ''
        }
    }
    inputChangedHandler = (event, inputIdentifier) => {
        console.log(event.target.value,inputIdentifier )
        const bookForm = {...this.state};
        const bookElement = {...bookForm[inputIdentifier], value: event.target.value};
        bookForm[inputIdentifier] = bookElement
        this.setState(bookForm);

    }
    createBookHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for(let formElementIdentifier in this.state) {
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
        console.log(this.props)
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
            changed={event => this.inputChangedHandler(event, ele.id)}
            elementConfig={ele.config}/>
        })
        return (
            <form>
                {form}
                <div className={classes.Button_Group}>
                    <Button clicked={this.createBookHandler}>Create Now</Button>
                    <Button clicked={this.cancelBookHandler}>Cancel</Button>
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