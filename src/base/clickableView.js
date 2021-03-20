import React, {Component} from 'react';
import '../index.css';

class ClickableView extends Component {
    render() {
        if (this.props.book.nominated) {
            return (
                <div className = "modal-content">
                    <span onClick = {(e) => this.close(e)} className = "close">&times;</span>
                    <div id = "picture" className = "col1">
                        <img src = {this.props.book.path} width = "350vh" height = "500vh" alt = "Unable to Load Picture"/>
                    </div>
                    <div id = "content" className = "col2">
                        <h2><u>{this.props.book.name}</u></h2>
                        <p>info abt books go here</p>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className = "modal-content">
                    <span onClick = {(e) => this.close(e)} className = "close">&times;</span>
                    <div id = "picture" className = "col1">
                        <img src = {this.props.book.path} width = "350vh" height = "500vh" alt = "Unable to Load Picture"/>
                    </div>
                    <div id = "content" className = "col2">
                        <h2><u>{this.props.book.name}</u></h2>
                        <p>not nominated</p>
                        <form>
                            <input type = "text" placeholder = "Name (First Last)" />
                        </form>
                        <button className = "button4">Nominate!</button>
                    </div>
                </div>
            );
        }
    }

    close(event) {
        event.preventDefault();
        document.getElementById("moreInfoBox").style.display = "none";
        document.getElementById("moreInfoBox1").style.display = "none";
    }
}

export default ClickableView;