import React, {Component} from 'react';
import Book from './book';
import '../index.css';
import ClickableView from './clickableView';

class Recommendations extends Component{
    state = {
        listOfBooks: [
            {name: "Dairy of a Wimpy Kid", path: "https://prodimage.images-bn.com/pimages/9781419741869_p0_v1_s550x406.jpg"},
            {name: "Scythe", path: "https://images-na.ssl-images-amazon.com/images/I/61dMoTN7t1L.jpg"},
            {name: "Harry Potter", path: "https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg"},
            {name: "How to Code", path: "https://images-na.ssl-images-amazon.com/images/I/81mT0cKE0oL.jpg"},
            {name: "Hunger Games", path: "https://images-na.ssl-images-amazon.com/images/I/61JfGcL2ljL.jpg"},
        ],
        currentBookPath: "null",
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
                    <span onClick = {() => this.close()} className = "close">&times;</span>
                    <div className ="content">
                        <div id = "picture">
                            <img src = {this.state.currentBookPath} width = "250" height = "400"/>
                        </div>
                        <div id = "content">

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
        const content = toString(book);
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