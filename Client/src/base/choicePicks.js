import React, {Component} from 'react';
import Carousel, { slidesToShowPlugin, Dots } from '@brainhubeu/react-carousel';
import '../../node_modules/@brainhubeu/react-carousel/lib/style.css';
import '../index.css';
import Book from './book';
import ClickableView from './clickableView';
import Collapsible from 'react-collapsible';
 
class ChoicePicks extends Component {
 
   constructor(props) {
       super(props);
       this.state = {
         value: 0,
       };
     }
       onChange = value => this.setState({ value });
  
   render() {
       return (
           <div>
               <Carousel
               value={this.state.value}
               onChange={this.onChange}
 
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
               <Dots className="dots" value={this.state.value} onChange={this.onChange} number={8}/>
           </div>
       );
   }
}
export default ChoicePicks;

