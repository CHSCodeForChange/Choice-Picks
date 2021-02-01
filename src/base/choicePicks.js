import '../index.css';
import React, {Component} from 'react';
import Book from './book';
import Recommendations from './recommendations';

class ChoicePicks extends Component {
    render() {
        return (
            <div>
                <p>This is choice picks.</p>
                {this.renderLatestBooks()}
            </div>
        );
    }
    
    renderLatestBooks() {
        return (
            <div>
                {/* {Recommendations.state.listOfBooks.map((book, index) => {
                    return (
                        <div class = "book" key = {index}>
                            <Book name = {book.name} />
                        </div>
                    );
                })} */}
                {/* what to do here is have a common parent class that holds the access to all the books and pass the state down to both this
                and recommendations page as a prop. this way, we can avoid multiple copies of the same database. i heard we are supposed
                to use redux for this  */}
            </div>
        );
    }  

}

export default ChoicePicks;