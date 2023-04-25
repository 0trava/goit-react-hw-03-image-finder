import { Component } from "react";
import {Searchbar} from './Searchbar/Searchbar';
import {ImageGallery} from './ImageGallery/ImageGallery';
import {Loader} from './Loader/Loader';
import {Button} from './Button/Button';
import {Modal} from './Modal/Modal';



const API_CAY = '33995663-3283b38da6c47940fd5e67885';
// const URL = 'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12';



export class App extends Component {

  state = {
    imagelist: [],
    page: 1,
    search: '',

  }



  // СТАРТ - завантажуємо початковий лист з зображеннями
  componentDidMount () {
    fetch (`https://pixabay.com/api/?q=cat&page=1&key=${API_CAY}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(res => res.json())
    .then (imagelist => this.setState({imagelist}));
  }



// РЕНДНЕРІНГ сторінки
  render(){
    const imagelist = this.state.imagelist.hits;
    let visible = false;
    let test = false;

    console.log(imagelist);

    if (test) { visible = true;}
    else {visible = false; };

    return (
      <div>
        <section>
          <Searchbar/>
        </section>
        <section>
          <ImageGallery  imagelist={imagelist} >
              <Loader />
              <Button />
          </ImageGallery>
        </section>
        { visible && (<Modal/>) }
          
      </div>
     );
  }

};
