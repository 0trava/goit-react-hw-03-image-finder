import { Component } from "react";
import {Searchbar} from './Searchbar/Searchbar';
import {ImageGallery} from './ImageGallery/ImageGallery';
import {Loader} from './Loader/Loader';
import {ImageGalleryItem} from './ImageGalleryItem/ImageGalleryItem';
import {Button} from './Button/Button';
import {Modal} from './Modal/Modal';



// const API_CAY = '33995663-3283b38da6c47940fd5e67885';
// const URL = 'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12';



export class App extends Component {



// РЕНДНЕРІНГ сторінки
  render(){
    return (
      <div>
        <section>
          <Searchbar/>
        </section>
        <section>
          <ImageGallery>
              <Loader></Loader>
              <ImageGalleryItem />
              <Button />
          </ImageGallery>
        </section>
          <Modal />
      </div>
     );
  }

};
