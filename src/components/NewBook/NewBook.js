import React, { Component } from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

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
        const bookForm = {...this.state};
        const bookElement = {...bookForm[inputIdentifier], value: event.target.value};
        bookForm[inputIdentifier] = bookElement
        this.setState(bookForm);

    }
    createBookHandler = (event) => {
        event.preventDefault();
        // Assign a random ID for local data
        const formData = {id: '_' + Math.random().toString(36).substr(2, 9)};
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
                <Button btnType="Success" clicked={this.createBookHandler}>Create Now</Button>
                <Button btnType="Danger" clicked={this.cancelBookHandler}>Cancel</Button>
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