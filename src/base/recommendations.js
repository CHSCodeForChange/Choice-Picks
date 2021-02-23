import React, {Component} from 'react';
import Book from './book';
import '../index.css';
import ClickableView from './clickableView';

class Recommendations extends Component{
    state = {
        listOfBooks: [
            /* the path is the file name if the image is in the public folder */
            {name: "Dairy of a Wimpy Kid", path: "wimpyKid.jpg"},
            {name: "Scythe", path: "scytheBook.jpg"},
            {name: "Harry Potter", path: "harryPotter.jpg"},
            {name: "How to Code", path: "howToCodeBook.jpeg"},
            {name: "Hunger Games", path: "hungerGames.jpg"},
        ],
        currentBookPath: "wimpyKid.jpg",
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
                            <div id = "picture">
                                <img src = {this.state.currentBookPath} width = "250" height = "400"/>
                            </div>
                            <div id = "content">
                            </div>
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
                            <Book name = {book.name} path = {book.path}/>
                            <br />
                            <button id="myBtn" onClick = {() => this.moreInfo(book)}>More Information</button>
                            <br />
                        </div>
                    );
                })}
            </div>
        )
    }

    moreInfo(book) {
        document.getElementById("moreInfoBox").style.display = "block";
        this.setState({currentBookPath: book.path});
        const content = this.toString(book);
        document.getElementById('content').innerHTML = content;
    }
    
    close() {
        document.getElementById("moreInfoBox").style.display = "none";
    }

    toString(book) {
        let string = "Book name: " + book.name;
        //add other information here
        return string;
    }
}

export default Recommendations;