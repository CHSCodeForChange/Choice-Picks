import React, {Component} from 'react';
import '../index.css';

class ClickableView extends Component {
    render() {
        return (
            <div className = "modal-content">
                <span onClick = {(e) => this.close(e)} className = "close">&times;</span>
                <div id = "picture" className = "col1">
                    <img src = {this.props.book.path} width = "350vh" height = "500vh"/>
                </div>
                <div id = "content" className = "col2">
                    <h3><u>{this.props.book.name}</u></h3>
                    <p>info abt books go here</p>
                </div>
            </div>
        );
    }

    close(event) {
        event.preventDefault();
        document.getElementById("moreInfoBox").style.display = "none";
    }
}

export default ClickableView;