import React, {Component} from 'react';
import '../index.css';
import raw from './credentials.txt';
import Axios from "axios";

class Library extends Component{
    constructor(props) {
        super(props)
        let lines = []
        fetch(raw)
            .then(r => r.text())
                .then(text => {
                    lines.push(text.split("\n"));
        });
        this.state = {
            lines,
            newAccount: false,
            content: true,
            showImg: false,
            path: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleNewAccount = this.handleNewAccount.bind(this);
        this.signOut = this.signOut.bind(this);
        this.addBook = this.addBook.bind(this);
        this.loadPic = this.loadPic.bind(this);
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
                                <h4>Genre</h4>
                                <div>
                                    <label>
                                        Action:   
                                        <input type="checkbox" id = "bAdventure"/>
                                    </label>
                                    <label>
                                        Adventure:
                                        <input type="checkbox" id = "bAdventure"/>
                                    </label>
                                    <label>
                                        Comedy:   
                                        <input type="checkbox" id = "bAdventure"/>
                                    </label>
                                    <label>
                                        Mystery:  
                                        <input type="checkbox" id = "bAdventure"/>
                                    </label>
                                    <label>
                                        Fantasy:  
                                        <input type="checkbox" id = "bAdventure"/>
                                    </label>
                                    <label>
                                        Horror:   
                                        <input type="checkbox" id = "bAdventure"/>
                                    </label>
                                    <label>
                                        Sci-Fi:   
                                        <input type="checkbox" id = "bAdventure"/>
                                    </label>
                                    <label>
                                        Thriller: 
                                        <input type="checkbox" id = "bAdventure"/>
                                    </label>
                                    <label>
                                        Romance:  
                                        <input type="checkbox" id = "bAdventure"/>
                                    </label>
                                </div>
                                <h4>Readability</h4>
                                <div>
                                    <label>
                                        Quick & Easy Read:
                                        <input type="radio" name = "readability" id = "bAdventure"/>
                                    </label>
                                    <label>
                                        Medium Read:
                                        <input type="radio" name = "readability" id = "bAdventure"/>
                                    </label>
                                    <label>
                                        Difficult Read:
                                        <input type="radio" name = "readability" id = "bAdventure"/>
                                    </label>
                                </div>
                                <h4>Other Info</h4>
                                <div>
                                    <label>
                                        Fiction:
                                        <input type="radio" name = "fiction" id = "bAdventure"/>
                                    </label>
                                    <label>
                                        Non-Fiction:
                                        <input type="radio" name = "fiction" id = "bAdventure"/>
                                    </label>
                                </div>
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
        for (let i = 0; i < this.state.lines[0].length; i++) {
            let line = this.state.lines[0][i];
            const beginI = line.indexOf(":") + 2;
            const endI = line.indexOf(",");
            let rUsername = line.substring(beginI, endI).trim();
            if (username === rUsername) {
                let rPassword = this.state.lines[0][i].substring(endI + 12).trim();
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

    handleNewAccount(event) {
        event.preventDefault()
        let accPass = document.getElementById("accPass").value;
        if (accPass === document.getElementById("password").value) {
            let newU = document.getElementById("newU").value;
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
                let newP = document.getElementById("newP").value;
                let confirmP = document.getElementById("confirmP").value;
                if (newP === confirmP) {
                    let newLine = "username: " + newU + ", password: " + newP;
                    // localStorage.setItem('1', newLine);
                    // console.log(localStorage.getItem('1') + "local storage");
                    // this.state.lines[0].add(newLine);
                    // const fs = require('fs');
                    // fs.appendFile('./credentials.txt', '\nRight there up on Broadway', (err) => {
                    //     if (err) throw err;
                    //     console.log('The lyrics were updated!');
                    // });
                    // using(StreamWrite sw = new StreamWriter("file.txt"))
                    // credential.txt
                    // window.updateFile(newLine);
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