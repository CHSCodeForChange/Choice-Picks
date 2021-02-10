import '../index.css';
import React, {Component} from 'react';

class Book extends Component {
    render() {
        return (
            <div>
                <p>This is a book named {this.props.name}.</p>
            </div>
        );
    }
}

export default Book;