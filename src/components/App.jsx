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
    filter: '',

  }



  // СТАРТ - завантажуємо початковий лист з зображеннями
  componentDidMount () {
    fetch (`https://pixabay.com/api/?q=cat&page=1&key=${API_CAY}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(res => res.json())
    .then (imagelist => this.setState({imagelist}));
  }


// INPUT - зберігаємо данні при вводі текста в input
handleChange = (event) => {
  console.log(event.currentTarget);
  const {name, value} = event.currentTarget;
  this.setState({[name]: value});
}


// РЕНДНЕРІНГ сторінки
  render(){
    // const imagelist = this.state.imagelist.hits;
    const {filter, imagelist} = this.state;
    let visible = false;

    return (
      <div>
        <section>
          <Searchbar filter={filter} handleChange={this.handleChange}/>
        </section>
        <section>
          <ImageGallery  imagelist={imagelist.hits}/>
              { !imagelist.hits && (<Loader/>) }
              { imagelist.hits && (<Button/>) }
        </section>
        { visible && (<Modal/>) }
          
      </div>
     );
  }

};
