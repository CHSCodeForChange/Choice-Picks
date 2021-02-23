import '../index.css';
import React, {Component} from 'react';

class Book extends Component {
    render() {
        return (
            <div class = "float-picture">
                <p>{this.props.name}</p>
                <img src = {this.props.path} alt = "error loading preview" width="200" height="350"/>
            </div>
        );
    }
}

export default Book;