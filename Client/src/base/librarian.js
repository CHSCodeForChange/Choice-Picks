import React, {Component} from 'react';
import '../index.css';
import Axios from "axios";

class Library extends Component{
    constructor(props) {
        super(props)
        this.state = {
            //currently manual, but can call getData and set it to lines
            lines: ["username: admin, password: password",
            "username: guna, password: asdf"],
            newAccount: false,
            content: true,
            showImg: false,
            path: "",
            books: [],
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleNewAccount = this.handleNewAccount.bind(this);
        this.signOut = this.signOut.bind(this);
        this.addBook = this.addBook.bind(this);
        this.getBooks = this.getBooks.bind(this);
        this.loadPic = this.loadPic.bind(this);
    }

    getData() {
        //problem with this is it is async
        //this means that before the request is even returned, it is moving on to other parts while running this in the background
        //moving to other parts is causing issues
        //finding a way to make ths wait will complete this
        //minor issue though I think
        let tempData = Axios.get('http://localhost:3001/getLogin')
            .then(response => { 
                return response.data;
            })
        return tempData;
    }

    render() {
        const createNewAccount = (this.state.newAccount) ? this.createNewAccount(): null;
        const content = (this.state.content) ? this.content(): null;
        return (
            <div>
                <br/>
                {this.login()}
                <div id = "loginContent">
                    {content}
                    {createNewAccount}
                </div>
                
            </div>
        );
    }

    toggle() {
        this.setState({newAccount: !this.state.newAccount});
        this.setState({content: !this.state.content});
        try {
            document.getElementById("accPass").value = "";
            document.getElementById("newU").value = "";
            document.getElementById("newP").value = "";
            document.getElementById("confirmP").value = "";
        }
        catch(e) {
            
        };
    }

    content() {
        const image = (this.state.showImg) ? (<img src= {this.state.path} className = "previewImg"></img>): null;
        const closeBtn = (this.state.showImg) ? (<button className = "button2" onClick = {(e) => this.closePic(e)}>Close Picture</button>): null;
        const books = (this.state.books);        

        return (
            <div className = "Content">
                <h1 className = "header1">Enter Book Information:</h1>
                <form>
                    <div className = "col1">
                        <div style = {{padding: "5vh"}}>
                            <div>
                                <h3>General Info:</h3>
                                <label>
                                    <input className = "addBookInputs" type="text" id = "bTitle" 
                                    placeholder = "Name" 
                                    required="required"/>
                                </label>
                                <label>
                                    <input className = "addBookInputs" type="text" id = "bAuthor" 
                                    placeholder = "Author" 
                                    required="required"/>
                                </label>
                                <label>
                                    <input className = "addBookInputs" type="text" id = "fnominee" placeholder = "First Nominee" required="required"/>
                                </label>
                                <label>
                                    <input className = "addBookInputs" type="text" id = "snominee" placeholder = "Second Nominee" required="required"/>
                                </label>
                                <label>
                                    <input className = "addBookInputs" type="text" id = "tnominee" placeholder = "Third Nominee" required="required"/>
                                </label>
                                <label>
                                    <input className = "addBookInputs" type="text" id = "becamecp" placeholder = "Became Choice Pick" required="required"/>
                                </label>
                                <label>
                                    <input className = "bookSummary" type="textarea" id = "bSummary" placeholder = "Summary" required="required"/>
                                </label>
                            </div>
                            <br/>
                            <div>
                                <h3>Additional Info:</h3>
                                <p>*This information is not required, but is necessary for the website to recommend book.*</p>
                                <table className = "Selectors">
                                    <tr>
                                        <th>
                                            <h4>Genre</h4>
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label>Action</label>
                                        </td>
                                        <td> 
                                            <input type="checkbox" id = "bAdventure"/>
                                        </td> 
                                    </tr>

                                    <tr>
                                        <td>
                                            <label>Adventure</label>
                                        </td>
                                        <td> 
                                            <input type="checkbox" id = "bAdventure"/>
                                        </td> 
                                    </tr>

                                    <tr>
                                        <td>
                                            <label>Comedy</label>
                                        </td>
                                        <td> 
                                            <input type="checkbox" id = "bAdventure"/>
                                        </td> 
                                    </tr>

                                    <tr>
                                        <td>
                                            <label>Mystery</label>
                                        </td>
                                        <td> 
                                            <input type="checkbox" id = "bAdventure"/>
                                        </td> 
                                    </tr>

                                    <tr>
                                        <td>
                                            <label>Fantasy</label>
                                        </td>
                                        <td> 
                                            <input type="checkbox" id = "bAdventure"/>
                                        </td> 
                                    </tr>

                                    <tr>
                                        <td>
                                            <label>Horror</label>
                                        </td>
                                        <td> 
                                            <input type="checkbox" id = "bAdventure"/>
                                        </td> 
                                    </tr>

                                    <tr>
                                        <td>
                                            <label>Sci-Fi</label>
                                        </td>
                                        <td> 
                                            <input type="checkbox" id = "bAdventure"/>
                                        </td> 
                                    </tr>

                                    <tr>
                                        <td>
                                            <label>Thriller</label>
                                        </td>
                                        <td> 
                                            <input type="checkbox" id = "bAdventure"/>
                                        </td> 
                                    </tr>

                                    <tr>
                                        <td>
                                            <label>Romance</label>
                                        </td>
                                        <td> 
                                            <input type="checkbox" id = "bAdventure"/>
                                        </td> 
                                    </tr>

                                </table>
                                <table className = "Selectors">
                                    <tr>
                                        <th>
                                            <h4>Readability</h4>
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label>Quick & Easy Read</label>
                                        </td>
                                        <td>
                                            <input type="radio" name = "readability" id = "bAdventure"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label>Medium Read</label>
                                        </td>
                                        <td>
                                            <input type="radio" name = "readability" id = "bAdventure"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label>Difficult Read</label>
                                        </td>
                                        <td>
                                            <input type="radio" name = "readability" id = "bAdventure"/>
                                        </td>
                                    </tr>
                                </table>
                                <table className = "Selectors">
                                    <tr>
                                        <th>
                                            <h4>Other Info</h4>
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label>Fiction</label>
                                        </td>
                                        <td>
                                            <input type="radio" name = "fiction" id = "bAdventure"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label>Non-Fiction</label>
                                        </td>
                                        <td>
                                            <input type="radio" name = "fiction" id = "bAdventure"/>
                                        </td>
                                    </tr>
                                </table>
                                    
                            </div>
                        </div>
                    </div>
                    <div className = "col2">
                        <div style = {{padding: "5vh"}}>
                            <div>
                                <h3>Book Picture:</h3>
                                <label>
                                    Please provide a link a book image:
                                    <br/>
                                    <input placeholder = "Book Image Link" className = "addBookInputs2" type="text" id = "bImgPath"/>
                                </label>
                                <button className = "button2" onClick = {(e) => this.loadPic(e)}>Pre-View Picture</button>
                                {closeBtn}
                                <br/>
                                {image}
                            </div>
                        </div>
                    </div>
                    <button onClick = {(e) => this.addBook(e)} className = "button">Add Book</button>
                    <div>
                        <button onClick={(e) => this.getBooks(e)} className = "button">Show Books</button>
                        {this.state.books.map((val, key) => {
                        return (
                            <div>
                            <div>
                                <table>
                                    <tr>
                                <td>Book Title: {val.bokk_title}   </td>
                                <td>Author: {val.book_author}</td>
                                </tr>
                                </table>
                            </div>
                            </div>
                            )})};
                    </div>

                </form>
                <button className = "button1" onClick = {(e) => this.toggle(e)}>New Account</button>
                <button className = "button1" onClick = {(e) => this.signOut(e)}>Sign Out</button>
            </div>
        );
    }

    login() {
        return (
            <div className = "login1" id = "login">
                <h1 className = "loginHeader">Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div style = {{padding: "5vh"}}>
                        <label>
                            <input type="text" id = "name" placeholder = "Username" required="required"/>
                        </label>
                        <label>
                            <input type="password" id = "password" placeholder = "Password" required="required"/>
                        </label>
                    </div>
                    <input className = "submitBtn" type="submit" value="Submit" />
                </form>
            </div>
        );
    }

    createNewAccount() {
        return (
            <div className = "login2">
                <h1 className = "loginHeader">Create New Account</h1>
                <form onSubmit = {this.handleNewAccount}>
                    <div style = {{padding: "5vh"}}>
                        <label style = {{paddingBottom: "5vh"}}>
                                <input type="password" id = "accPass" placeholder = "Account Password:" required="required"/>
                        </label>
                        <label>
                                <input type="text" id = "newU" placeholder = "New Username" required="required"/>
                        </label>
                        <label>
                                <input type="password" id = "newP" placeholder = "New Password" required="required"/>
                        </label>
                        <label>
                                <input type="password" id = "confirmP" placeholder = "Confirm Password" required="required"/>
                        </label>
                    </div>
                    <input type="submit" value="Submit" className = "submitBtn"/>
                    <input type="button" value="Return" className = "returnBtn" onClick = {(e) => this.toggle(e)}/>
                </form>
            </div>
        );
    }

    addBook (event) {
        event.preventDefault();
        let btitle = document.getElementById("bTitle").value.trim();
        let bauthor = document.getElementById("bAuthor").value.trim();
        let fnominee = document.getElementById("fnominee").value.trim();
        let snominee = document.getElementById("snominee").value.trim();
        let tnominee = document.getElementById("tnominee").value.trim();
        let becamecp = document.getElementById("becamecp").value.trim();
        
        Axios.post('http://localhost:3001/create', {
        btitle: btitle,
        bauthor: bauthor,
        fnominee: fnominee,
        snominee: snominee,
        tnominee: tnominee,
        becamecp: becamecp,
        }).then( 
            (response) => { alert('Added Successfully') },
            (error) => { console.log(error) }
        );
    }

    getBooks (event) {
        event.preventDefault();              
        Axios.get('http://localhost:3001/books')
        .then((res)=>{
            var data = res.data
            this.setState({books : data})
        })
            
    }


    loadPic(event) {
        event.preventDefault();
        const bPath = document.getElementById("bImgPath").value;
        this.setState({showImg: true});
        this.setState({path: bPath});
    }

    closePic(event) {
        event.preventDefault();
        this.setState({showImg: false});
    }

    handleSubmit(event) {
        event.preventDefault()
        let username = document.getElementById("name").value.trim();
        let password = document.getElementById("password").value.trim();
        let authenticated = false;
        for (let i = 0; i < this.state.lines.length; i++) {
            let line = this.state.lines[i];
            const beginI = line.indexOf(":") + 2;
            const endI = line.indexOf(",");
            let rUsername = line.substring(beginI, endI).trim();
            if (username === rUsername) {
                let rPassword = this.state.lines[i].substring(endI + 12).trim();
                if (password === rPassword) {
                    authenticated = true;
                    break;
                }
            }
        }
        if (authenticated) {
            document.getElementById("login").style.display = "none";
            document.getElementById("loginContent").style.display = "block";
        }
        else {
            alert("Incorrect Credentials!");
            document.getElementById("name").value = "";
            document.getElementById("password").value = "";
        }
    }

    //new accounts are now properly made
    handleNewAccount(event) {
        //preventing reload
        event.preventDefault()

        //fetching new credentials
        let accPass = document.getElementById("accPass").value.trim();
        let newU = document.getElementById("newU").value.trim();
        let newP = document.getElementById("newP").value;
        let confirmP = document.getElementById("confirmP").value;

        //checking if original password is correct
        if (accPass === document.getElementById("password").value.trim()) {
            //checking if new username is already taken by someone else
            let alreadyTaken = false;
            for (let i = 0; i < this.state.lines[0].length; i++) {
                let line = this.state.lines[0][i];
                const beginI = line.indexOf(":") + 2;
                const endI = line.indexOf(",");
                let username = line.substring(beginI, endI).trim();
                if (username === newU) {
                    alreadyTaken = true;
                }
            }
            if (!alreadyTaken) {
                //making sure the passwords match
                if (newP === confirmP) {
                    let newLine = "\nusername: " + newU + ", password: " + newP;
                    alert(newLine);
                    //adding it to txt file
                    Axios.post('http://localhost:3001/login', {
                    newLine: newLine,
                    }).then( 
                        (response) => { alert('Added Successfully') },
                        (error) => { console.log(error) }
                    );
                    this.toggle();
                }
                else {
                    alert("Passwords do not match!");
                    document.getElementById("newP").value = "";
                    document.getElementById("confirmP").value = "";
                }
            }
            else {
                alert("Username already taken!");
                document.getElementById("newU").value = "";
            }
        }
        else {
            alert("Incorrect password!");
            document.getElementById("accPass").value = "";
        }
    }

    signOut () {
        document.getElementById("login").style.display = "block";
        document.getElementById("loginContent").style.display = "none";
        document.getElementById("name").value = "";
        document.getElementById("password").value = "";
    }
}

export default Library;