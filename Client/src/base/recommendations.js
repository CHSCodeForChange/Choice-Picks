import React, {Component} from 'react';
import Book from './book';
import ClickableView from './clickableView';
import Collapsible from 'react-collapsible';
import '../index.css';

class Recommendations extends Component{
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
                <div className = "sidenav">
                    {this.filter()}
                </div>
                <div className = "mainbar">
                    {this.renderBooks()}
                </div>
                <div onClick = {(e) => this.close(e)} id = "moreInfoBox" className = "modal">
                    {modalContent}
                </div>
                <button id = "loadMoreBooks" onClick = {(e) => this.moreBooks(e)}>Load More Books</button>
            </div>
        )
    }

    filter() {
        const collapsibleTrigger = (
            <div>
                <h2 className = "filter">Filter</h2>
                <br/>
                <a id = "downBtn" href= "#nav"><div class="openFilter"></div></a>
            </div>
        );
        const closeCollapsibleTrigger = (
            <div>
                <h2 className = "filter">Filter</h2>
                <br/>
                <a id = "downBtn" href= "#nav"><div class="closeFilter"></div></a>
            </div>
        );
        return (
            <div className = "recInput">
                <Collapsible trigger = {collapsibleTrigger} className = "filter" transitionTime = "200" triggerWhenOpen = {closeCollapsibleTrigger}>
                    <div className = "filterContent">
                        <ol>
                            <div className = "filterCol1"> 
                                <li>Genre:</li>
                                <form>
                                    <input type="checkbox" className = "input2" id="action" name="genre"/>
                                    <label for="action">Action</label><br />
                                    <input type="checkbox" className = "input2" id="adventure" name="genre"/>
                                    <label for="adventure">Adventure</label><br />
                                    <input type="checkbox" className = "input2" id="comedy" name="genre"/>
                                    <label for="comedy">Comedy</label><br />
                                    <input type="checkbox" className = "input2" id="mystery" name="genre"/>
                                    <label for="mystery">Mystery</label><br />
                                    <input type="checkbox" className = "input2" id="fantasy" name="genre"/>
                                    <label for="fantasy">Fantasy</label><br />
                                    <input type="checkbox" className = "input2" id="horror" name="genre"/>
                                    <label for="horror">Horror</label><br />
                                    <input type="checkbox" className = "input2" id="scifi" name="genre"/>
                                    <label for="scifi">Sci-Fi</label><br />
                                    <input type="checkbox" className = "input2" id="thriller" name="genre"/>
                                    <label for="thriller">Thriller</label><br />
                                    <input type="checkbox" className = "input2" id="romance" name="genre"/>
                                    <label for="romance">Romance</label><br />
                                </form> 
                            </div>
                            <div className = "filterCol2">
                            <li>Realism</li>
                                <form>
                                    <input type="radio" className = "input2" id="fiction" name="realism"/>
                                    <label for="fiction">Fiction</label><br />
                                    <input type="radio" className = "input2" id="nonFiction" name="realism"/>
                                    <label for="nonFiction">Non-Fiction</label><br />
                                </form>
                                <li>Readability</li>
                                <form>
                                    <input type="radio" className = "input2" id="easy" name="Readability"/>
                                    <label for="easy">Quick/Easy Read</label><br />
                                    <input type="radio" className = "input2" id="medium" name="Readability"/>
                                    <label for="medium">Medium Read</label><br />
                                    <input type="radio" className = "input2" id="hard" name="Readability"/>
                                    <label for="hard">Long/Difficult Read</label><br />
                                </form>
                            </div>
                        </ol>
                        <button className = "button3" onClick = {(e) => this.filterBooks(e)}>Apply Filter</button>
                    </div>
                </Collapsible>
            </div>
        );
    }

    filterBooks(event) {
        event.preventDefault();
        alert("worked");
    } 

    renderBooks() {
        let numOfOpenSpaces = 0;
        return (
            <div>
                {this.state.listOfBooks.slice(0, this.state.numOfBooks).map((book) => {
                    if (!book.nominated) {
                        numOfOpenSpaces++;
                    }
                })}

                {this.state.listOfBooks.slice(0, (this.state.numOfBooks + numOfOpenSpaces)).map((book, index) => {
                    if (book.nominated) {
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
        document.getElementById("moreInfoBox").style.display = "block";
        this.setState({currentBook: book});
        this.setState({showMoreInfo: true});
    }
    
    moreBooks(event) {
        event.preventDefault();
        let newNumOfBooks = this.state.numOfBooks + 8;
        if (newNumOfBooks >= this.state.listOfBooks.length) {
            newNumOfBooks = this.state.listOfBooks.length;
            document.getElementById('loadMoreBooks').style.display = 'none';
            alert("That is all the available books!");
        }
        this.setState({numOfBooks: newNumOfBooks});
    }

    close(event) {
        event.preventDefault();
        if (event.target.id == "moreInfoBox") {
            document.getElementById("moreInfoBox").style.display = "none";
        }
    }
}

export default Recommendations;