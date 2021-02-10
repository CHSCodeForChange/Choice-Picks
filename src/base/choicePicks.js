import '../index.css';
import React, {Component} from 'react';
import Book from './book';
import Recommendations from './recommendations';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '../../node_modules/@brainhubeu/react-carousel/lib/style.css'


class ChoicePicks extends Component {
    render() {
        return (
            <div>
                <p>This is choice picks.</p>
                {this.renderLatestBooks()}

                <Carousel
                    plugins={[
                        'infinite',
                        'arrows',
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                                numberOfSlides: 3
                            }
                        },
                    ]}
                >
                    <img src="wimpyKid.jpg" alt = "this is image one" width="200" height="350"/>
                    <img src="scytheBook.jpg" alt = "this is image two" width="200" height="350"/>
                    <img src="howToCodeBook.jpeg" aalt = "this is image three" width="200" height="350"/>
                    <img src="hungerGames.jpg" aalt = "this is image three" width="200" height="350"/>
                    <img src="harryPotter.jpg" aalt = "this is image three" width="200" height="350"/>
                </Carousel>
            </div>
        );
    }
    
    renderLatestBooks() {
        return (
            <div>
                {/* {Recommendations.state.listOfBooks.map((book, index) => {
                    return (
                        <div class = "book" key = {index}>
                            <Book name = {book.name} />
                        </div>
                    );
                })} */}
                {/* what to do here is have a common parent class that holds the access to all the books and pass the state down to both this
                and recommendations page as a prop. this way, we can avoid multiple copies of the same database. i heard we are supposed
                to use redux for this  */}
            </div>
        );
    }  

}

export default ChoicePicks;