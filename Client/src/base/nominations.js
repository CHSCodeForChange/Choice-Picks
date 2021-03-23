import React, {Component} from 'react';
import Book from './book';
import ClickableView from './clickableView';
import '../index.css';

class Nominations extends Component{
    constructor(props) {
        super(props)
        this.state = {
            listOfBooks: [
                {name: "Dairy of a Wimpy Kid", path: "https://prodimage.images-bn.com/pimages/9781419741869_p0_v1_s550x406.jpg", nominated: true},
                {name: "Scythe", path: "https://images-na.ssl-images-amazon.com/images/I/61dMoTN7t1L.jpg", nominated: true},
                {name: "Harry Potter", path: "https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg", nominated: false},
                {name: "How to Code", path: "https://images-na.ssl-images-amazon.com/images/I/81mT0cKE0oL.jpg", nominated: false},
                {name: "Hunger Games", path: "https://images-na.ssl-images-amazon.com/images/I/61JfGcL2ljL.jpg", nominated: true},
            ],
            currentBook: null,
            showMoreInfo: false,
            numOfBooks: 4,
        }
    }

    render() {
        let modalContent = null;
        if (this.state.showMoreInfo) {
            if (this.state.currentBook != null) {
                modalContent = (<ClickableView book = {this.state.currentBook}/>);
            }
        }
        return (
            <div>
                <div className = "mainbar">
                    {this.renderBooks()}
                </div>
                <div onClick = {(e) => this.close(e)} id = "moreInfoBox1" className = "modal">
                    {modalContent}
                </div>
                <button id = "loadMoreBooks1" onClick = {(e) => this.moreBooks(e)}>Load More Books</button>
            </div>
        )
    } 

    renderBooks() {
        let numOfOpenSpaces = 0;
        return (
            <div>
                {this.state.listOfBooks.slice(0, this.state.numOfBooks).map((book) => {
                    if (book.nominated) {
                        numOfOpenSpaces++;
                    }
                })}

                {this.state.listOfBooks.slice(0, (this.state.numOfBooks + numOfOpenSpaces)).map((book, index) => {
                    if (!book.nominated) {
                        return (
                            <div className = "bookOutline" key = {index}>
                                <Book name = {book.name} path = {book.path}/>
                                <button id="moreInfoBtn" onClick = {() => this.moreInfo(book)}>More Information</button>
                                <br />
                            </div>
                        );
                    }
                })}
            </div>
        )
    }

    moreInfo(book) {
        document.getElementById("moreInfoBox1").style.display = "block";
        this.setState({currentBook: book});
        this.setState({showMoreInfo: true});
    }
    
    moreBooks(event) {
        event.preventDefault();
        let newNumOfBooks = this.state.numOfBooks + 8;
        if (newNumOfBooks >= this.state.listOfBooks.length) {
            newNumOfBooks = this.state.listOfBooks.length;
            document.getElementById('loadMoreBooks1').style.display = 'none';
            alert("That is all the available books!");
        }
        this.setState({numOfBooks: newNumOfBooks});
    }

    close(event) {
        event.preventDefault();
        if (event.target.id == "moreInfoBox1") {
            document.getElementById("moreInfoBox1").style.display = "none";
        }
    }
}

export default Nominations;