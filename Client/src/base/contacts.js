import React, {Component} from 'react';
import '../index.css';
import emailjs from 'emailjs-com';

class Contacts extends Component {
    render () {
        return (
            <div className="container"> 
                <section className="main-section alabaster" id="contact">
                    <div className="row">
                        <div className="col-lg-6" id = "contactInfo">
                            <div className="contact-info-box">
                                <h3><i class="fa fa-map-marker"></i>Address:</h3>
                                <span><a target="__blank" href = "https://www.google.com/maps/place/2140+E+116th+St,+Carmel,+IN+46032/@39.9585644,-86.1199571,17z/data=!3m1!4b1!4m5!3m4!1s0x8814ada097472ab5:0x9f4fc8c69992733e!8m2!3d39.9585603!4d-86.1177631" >2140 E 116th St, Carmel, IN 46032</a></span>
                            </div>
                            <div className="contact-info-box">
                                <h3><i className="fa fa-phone"></i>Phone:</h3>
                                <span><a href = "tel: 5554280940">(317) 814-3900</a></span>
                            </div>
                            <div className="contact-info-box">
                                <h3><i className="fa fa-pencil"></i>E-mail:</h3>
                                <span><a target="__blank" href="mailto:jbeckman@carmelclaylibrary.org">jbeckman@carmelclaylibrary.org</a></span>
                            </div>
                            <div className="contact-info-box">
                                <h3><i class="fab fa-facebook"></i>Facebook:</h3>
                                <a target="__blank" href="https://www.facebook.com/carmellib/">Click Here</a>
                            </div>
                            <div className="contact-info-box">
                                <h3><i class="fab fa-instagram"></i>Instagram:</h3>
                                <a target="__blank"  href="https://www.instagram.com/carmel_library/?hl=en">Click Here</a>
                            </div>
                            <div className="contact-info-box">
                                <h3><i class="fab fa-twitter"></i>Twitter:</h3>
                                <a target="__blank"  href="https://www.instagram.com/carmel_library/?hl=en">Click Here</a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-5 wow fadeInUp delay-05s" id = "contactBox">
                            <div className="form">
                                <div id="sendmessage">Your message has been sent. Thank you!</div>
                                <div id="errormessage"></div>
                                <form onSubmit = {this.handleSubmit} action="" method="post" role="form" className="contactForm">
                                    <div className="form-group">
                                        <input type="text" name="name" className="form-control input-text" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                        <div className="validation"></div>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control input-text" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                        <div className="validation"></div>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control input-text" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                        <div className="validation"></div>
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control input-text text-area" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                        <div className="validation"></div>
                                    </div>
                                    <div className="text-center"><button type="submit" class="input-btn">Send Message</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    };

    handleSubmit(e) {
        e.preventDefault();
        emailjs.sendForm('service_1qmh2dc', 'template_yznagmp', e.target, 'user_o6t4c09ESEWOJ3hZSDIcV')
        .then((result) => {
            alert("Message Sent");
            e.target.reset();
        }, (error) => {
            alert("There was an error. Please try again later!");
        });
    }
}

export default Contacts;