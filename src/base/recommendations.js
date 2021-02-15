import React, {Component} from 'react';
import Book from './book';
import '../index.css';
import ClickableView from './clickableView';

class Recommendations extends Component{
    state = {
        listOfBooks: [
            {name: "Harry Potter"},
            {name: "Micheal Vey"},
            {name: "Harry Potter"},
            {name: "Micheal Vey"},
            {name: "Harry Potter"},
            {name: "Micheal Vey"},
            {name: "Harry Potter"},
            {name: "Micheal Vey"},
            {name: "Harry Potter"},
            {name: "Micheal Vey"},
            {name: "Harry Potter"},
            {name: "Micheal Vey"},
            {name: "Harry Potter"},
            {name: "Micheal Vey"},
        ],
        currentBook: [
            {},
        ],
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
                <div id = "moreInfoBox" className = "moreInfoBox">
                    <div className ="content">
                        <span onClick = {() => this.close()} className = "close">&times;</span>
                        <div id = "bookInfo">
                            
                        </div>
                    </div>
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
                            <button id="myBtn" onClick = {() => this.moreInfo(book)}>More Information</button>
                        </div>
                    );
                })}
            </div>
        )
    }

    moreInfo(book) {
        document.getElementById("moreInfoBox").style.display = "block";
        // var content = <ClickableView name = {book.name}></ClickableView>;
        var content = "Hello!";
        document.getElementById('bookInfo').innerHTML = content;
    }
    
    close() {
        document.getElementById("moreInfoBox").style.display = "none";
    }
}

export default Recommendations;