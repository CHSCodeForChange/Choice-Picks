import React, {Component} from 'react';
import '../index.css';

class ClickableView extends Component {
    render() {
        return (
            <div className = 'clickableView'>
                <p>This is the exandable window. This is the book {this.props.name}</p>
            </div>
        );
    }
}

export default ClickableView;