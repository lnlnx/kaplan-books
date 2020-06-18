import React, { Component } from 'react';
import Book from './Book/Book'; 
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
class Booklist extends Component {
    componentDidMount() {
        this.props.onLoad()
    }

    render() {
        console.log(this.props.books)
        return (
            <div>
            {this.props.books.map( book => <Book key={book.id}/>)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => dispatch(actions.booksFetchStart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Booklist);