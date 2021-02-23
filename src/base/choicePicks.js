import '../index.css';
import React, {Component} from 'react';
import Book from './book';
// import Recommendations from './recommendations';
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
                    <Book name = 'Harry Potter' path = "harryPotter.jpg"/>
                    <Book name = 'Hunger Games' path = "hungerGames.jpg"/>
                    <Book name = 'How to Code' path = "howToCodeBook.jpeg"/>
                    <Book name = 'Scythe' path = "scytheBook.jpg"/>
                    <Book name = 'Dairy of a Wimpy Kid' path = "wimpyKid.jpg"/>
                </Carousel>
            </div>
        );
    }

    //under work
    renderLatestBooks() {
        return (
            <div>
            {/* this is still under testing */}
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