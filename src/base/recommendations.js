import React, {Component} from 'react';
import Book from './book';
import '../index.css';
import ClickableView from './clickableView';

class Recommendations extends Component{
    state = {
        listOfBooks: [
            {name: "book 0", displayMore: false, path: "wimpyKid.jpg"}, /* the path is the file name if the image is in the public folder */
            {name: "book 1", displayMore: false, path: "wimpyKid.jpg"},
            {name: "book 2", displayMore: false, path: "wimpyKid.jpg"},
            {name: "book 3", displayMore: false, path: "wimpyKid.jpg"},
            {name: "book 4", displayMore: false, path: "wimpyKid.jpg"},
            {name: "book 5", displayMore: false, path: "wimpyKid.jpg"},
            {name: "book 6", displayMore: false, path: "wimpyKid.jpg"},
            {name: "book 7", displayMore: false, path: "wimpyKid.jpg"},
            {name: "book 8", displayMore: false, path: "wimpyKid.jpg"},
            {name: "book 9", displayMore: false, path: "wimpyKid.jpg"},
            {name: "book 10", displayMore: false, path: "wimpyKid.jpg"},
            {name: "book 11", displayMore: false, path: "wimpyKid.jpg"},
            {name: "book 12", displayMore: false, path: "wimpyKid.jpg"},
            {name: "Final Book", displayMore: false, path: "wimpyKid.jpg"},
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
                            <Book name = {book.name} path = {book.path} displayMore = {book.displayMore}/>
                            <div class = "infoButton">
                                <button onClick = {() => this.updateBook(index)}>View More Information</button>
                            </div>
                            {book.displayMore ? this.showClickableView(book): null}
                        </div>
                    );
                })}
            </div>
        )
    }

    updateBook(index) {
        if (this.state.listOfBooks[index].displayMore == true) {
            this.state.listOfBooks[index].displayMore = false;
        } else{ 
            this.state.listOfBooks.map((book) =>{
                book.displayMore = false;
            });
            this.state.listOfBooks[index].displayMore = !this.state.listOfBooks[index].displayMore;
        }
        this.forceUpdate();
    }

    showClickableView(book) {
        return (
            <ClickableView name = {book.name}></ClickableView>
        );
    }
}

export default Recommendations;