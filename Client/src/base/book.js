import '../index.css';
import React, {Component} from 'react';

class Book extends Component {
    render() {
        return (
            <div class = "book">
                <br/>
                <p class = "BookTitle">{this.props.name}</p>
                <img src = {this.props.path} alt = "error loading preview" className = "bookPic"/>
            </div>
        );
    }
}

export default Book;