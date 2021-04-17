import React, {Component} from 'react';
import $ from 'jquery';
import '../index.css'

class Footer extends Component{
    render() { 
        return (
            <section className="main-section footer" id="contact">
                <span className="copyright">&copy; Code For Change. All Rights Reserved</span>
                <div className="credits">
                    Designed by <a href="https://codeforchange.herokuapp.com/" target="__blank">Code For Change</a> <br/>
                </div>
                <center>
                    <button onClick = {() => this.setPage()}> Contact Us </button>
                </center>
            </section>
        );
    }

    setPage() {
        document.getElementById('choicePicks').style.display = 'none';
        document.getElementById('recommendations').style.display = 'none';
        document.getElementById('librarian').style.display = 'none';
        document.getElementById('nominations').style.display = 'none';
        document.getElementById('contacts').style.display = 'block';
        document.getElementById('title').innerHTML = 'Contact Page';
        $('html, body').animate({ scrollTop: 0 }, 'fast');
    }
}

export default Footer;