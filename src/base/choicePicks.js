import React, {Component} from 'react';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '../../node_modules/@brainhubeu/react-carousel/lib/style.css';
import '../index.css';
import Book from './book';

class ChoicePicks extends Component {
    render() {
        return (
            <div>
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
                    <Book name = 'Harry Potter' path = "https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg"/>
                    <Book name = 'Hunger Games' path = "https://images-na.ssl-images-amazon.com/images/I/61JfGcL2ljL.jpg"/>
                    <Book name = 'How to Code' path = "https://images-na.ssl-images-amazon.com/images/I/81mT0cKE0oL.jpg"/>
                    <Book name = 'Scythe' path = "https://images-na.ssl-images-amazon.com/images/I/61dMoTN7t1L.jpg"/>
                    <Book name = 'Dairy of a Wimpy Kid' path = "https://prodimage.images-bn.com/pimages/9781419741869_p0_v1_s550x406.jpg"/>
                </Carousel>
            </div>
        );
    }
}

export default ChoicePicks;