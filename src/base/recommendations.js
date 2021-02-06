import React, {Component} from 'react';
import Book from './book';
import '../index.css';

class Recommendations extends Component{
    state = {
        listOfBooks: [
            {name: "Harry Potter"},
            {name: "Micheal Vey"},
            {name: "Micheal Vey"},
            {name: "Micheal Vey"},
            {name: "Micheal Vey"},
            {name: "Micheal Vey"},
            {name: "Micheal Vey"},
            {name: "Micheal Vey"},
            {name: "Micheal Vey"},
            {name: "Micheal Vey"},
            {name: "Micheal Vey"},
            {name: "Micheal Vey"},
            {name: "Micheal Vey"},
            {name: "Micheal Vey"},
            {name: "Harry Potter"},
            {name: "Harry Potter"},
        ]
    }

    render() {
        return (
            <div>
                <div className = "sidenav">
                    {this.sideBar()}
                </div>
                <div className = "mainbar">
                    {this.renderBooks()}
                </div>
            </div>
        )
    }

    sideBar() {
        return (
            <div>
                <ol>
                    <li>Genre:</li>
                    <form>
                        <input type="radio" id="button1" name="genre"/>
                        <label for="button1">Fiction</label><br />
                        <input type="radio" id="button2" name="genre"/>
                        <label for="button2">Comedy</label><br />
                        <input type="radio" id="button3" name="genre"/>
                        <label for="button3">Adventure</label>
                    </form> 
                </ol>
            </div>
        );
    }

    renderBooks() {
        return (
            <div>
                {this.state.listOfBooks.map((book, index) => {
                    return (
                        <div class = "book" key = {index}>
                            <Book name = {book.name} />
                        </div>
                    );
                })}
            </div>
        )
    }
}

export default Recommendations;