import React, {Component} from 'react';
import '../index.css';
import raw from './credentials.txt';

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
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    render() {
        const createNewAccount = (this.state.newAccount) ? this.createNewAccount(): null;
        return (
            <div>
                <br/>
                {this.login()}
                <div id = "loginContent">
                    <button onClick = {(e) => this.toggle(e)}>New Account</button>
                    {createNewAccount}
                </div>
                
            </div>
        );
    }

    toggle() {
        this.setState({newAccount: !this.state.newAccount});
    }

    login() {
        return (
            <div id = "login">
                <form onSubmit={this.handleSubmit}>
                    <label>
                            Username: 
                            <input type="text" id = "name" />
                    </label>
                    <br />
                    <label>
                            Password: 
                            <input type="text" id = "password" />
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
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
            console.log(rUsername);
            if (username == rUsername) {
                let rPassword = this.state.lines[0][i].substring(endI + 12).trim();
                if (password == rPassword) {
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

    createNewAccount() {
        return (
            <div>
                <form onSubmit = {this.handleNewAccount}>
                    <label>
                            Account Password: 
                            <input type="text" id = "accPass" />
                    </label>
                    <label>
                            New Account Username: 
                            <input type="text" id = "newU" />
                    </label>
                    <label>
                            New Account Password: 
                            <input type="text" id = "newP" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }

    handleNewAccount(event) {
        event.preventDefault()
        let accPass = document.getElementById("accPass").value;
        if (accPass == document.getElementById("password").value) {
            let newU = document.getElementById("newU").value;
            let newP = document.getElementById("newP").value;
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
            window.updateFile(newLine);
        }
        else {
            alert("Incorrect password!");
        }
    }
}

export default Library;


// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import '../index.css';

// export default function Library() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function validateForm() {
//     return email.length > 0 && password.length > 0;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//   }

//   return (
//     <div className="Login">
//       <Form onSubmit={handleSubmit}>
//         <Form.Group size="lg" controlId="email">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             autoFocus
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group size="lg" controlId="password">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>
//         <Button block size="lg" type="submit" disabled={!validateForm()}>
//           Login
//         </Button>
//       </Form>
//     </div>
//   );
// }