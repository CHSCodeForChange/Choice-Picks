import React, {Component} from 'react';
import '../index.css'
import './style.css'

class Footer extends Component{
    render() {
        return (
            <div class="container">
                <section class="main-section alabaster" id="contact">
                    <center>
                        <h1> Contact </h1>
                    </center>
                    <div class="row">
                        <div class="col-lg-6 col-sm-7 wow fadeInLeft">
                            <div class="contact-info-box address clearfix">
                                <h3><i class=" icon-map-marker"></i>Address:</h3>
                                <span>Carmel High School, Carmel, Indiana, 46032</span>
                            </div>
                            <div class="contact-info-box phone clearfix">
                                <h3><i class="fas fa-phone"></i>Phone:</h3>
                                <span><a href = "tel: 5554280940">(317) 814-3900</a></span>
                            </div>
                            <div class="contact-info-box email clearfix">
                                <h3><i class="fa fa-pencil"></i>email:</h3>
                                <span><a href="mailto:jbeckman@carmelclaylibrary.org">jbeckman@carmelclaylibrary.org</a></span>
                            </div>
                            <div class="contact-info-box email clearfix">
                                <p>Facebook: <a href="https://www.facebook.com/chscodeforchange/?__tn__=%2Cd%2CP-R&eid=ARCw46dcn7BusvWKLpS5fx5R1ilmkW7kB1Bscnpj6WCl32RvQySfUc_UZ7gWOd6lYAxF9AD_pZfecVO6">Click Here</a></p>
                                <p>Instagram: <a href="https://www.instagram.com/chscodeforchange/">Click Here</a></p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-5 wow fadeInUp delay-05s">
                            <div class="form">
                                <div id="sendmessage">Your message has been sent. Thank you!</div>
                                <div id="errormessage"></div>
                                <form action="" method="post" role="form" class="contactForm">
                                    <div class="form-group">
                                        <input type="text" name="name" class="form-control input-text" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                        <div class="validation"></div>
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control input-text" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                        <div class="validation"></div>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control input-text" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                        <div class="validation"></div>
                                    </div>
                                    <div class="form-group">
                                        <textarea class="form-control input-text text-area" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                        <div class="validation"></div>
                                    </div>
                                    <div class="text-center"><button type="submit" class="input-btn">Send Message</button></div>
                                </form>
                            </div>
                        </div>
                        <span class="copyright">&copy; Code For Change. All Rights Reserved</span>
                        <div class="credits">
                            Designed by <a href="https://codeforchange.herokuapp.com/" target="__blank">Code For Change</a> <br/>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Footer;