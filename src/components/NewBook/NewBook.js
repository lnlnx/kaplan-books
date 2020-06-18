import React, { Component } from 'react';
import Input from '../UI/Input/Input';
class NewBook extends Component {
    state = {
        title:{  
            placeholder: 'Title',
            touched: false
        },
        author: {
            laceholder: 'Author',
            touched: false
        },
        publisher: {
            laceholder: 'Publisher',
            touched: false
        },
        publishedDate: {
            laceholder: 'Published Date',
            touched: false
        }

    }
    render() {
        return (
            <div>
                <Input value changed/>
            </div>
        );
    }
}

export default NewBook;