import React, {Component} from 'react';
import Book from './book';
import '../index.css';
import ClickableView from './clickableView';

class Recommendations extends Component{
    state = {
        listOfBooks: [
            {name: "Harry Potter", displayMore: false},
            {name: "Micheal Vey", displayMore: true},
            {name: "Harry Potter", displayMore: false},
            {name: "Micheal Vey", displayMore: false},
            {name: "Harry Potter", displayMore: false},
            {name: "Micheal Vey", displayMore: false},
            {name: "Harry Potter", displayMore: false},
            {name: "Micheal Vey", displayMore: false},
            {name: "Harry Potter", displayMore: false},
            {name: "Micheal Vey", displayMore: false},
            {name: "Harry Potter", displayMore: false},
            {name: "Micheal Vey", displayMore: false},
            {name: "Harry Potter", displayMore: false},
            {name: "Final Book", displayMore: false},
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
                        <div className = "book" key = {index}>
                            <Book name = {book.name}/>
                            {book.displayMore ? this.showClickableView(book): null}
                            <button onClick = {() => this.updateBook(index)}>View More Information</button>
                        </div>
                    );
                })}
            </div>
        )
    }

    updateBook(index) {
        this.state.listOfBooks.map((book) =>{
            book.displayMore = false;
        });
        this.state.listOfBooks[index].displayMore = !this.state.listOfBooks[index].displayMore;
        this.forceUpdate();
    }

    showClickableView(book) {
        return (
            <ClickableView name = {book.name}></ClickableView>
        );
    }
}

export default Recommendations;