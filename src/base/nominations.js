import React, {Component} from 'react';
import '../index.css'

class Nominations extends Component{
    state = {
        users: [
            {username: "Guna", password: "asdf"},
        ],
    }

    render() {
        return (
            <div>
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
                <div id = "loginContent">
                    <p>Inside</p>
                </div>
            </div>
        );
    }

    handleSubmit(event) {
        event.preventDefault();
        let username = document.getElementById("name").value;
        let password = document.getElementById("password").value;
        // let ru = this.state.users.username;
        // if (username == this.state.users.get(0).username && password == this.state.users.get(0).password) {
        if (username == "Guna" && password == "asdf") {
            document.getElementById("login").style.display = "none";
            document.getElementById("loginContent").style.display = "block";
        }
    }
}

export default Nominations;