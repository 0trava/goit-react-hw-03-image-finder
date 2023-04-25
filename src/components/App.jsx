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
    loading: false,
    showModal: false,
    imageModal: '',

  }




// INPUT - зберігаємо данні при вводі текста в input
handleChange = (event) => {
  const {name, value} = event.currentTarget;
  this.setState({[name]: value});
}

// FILTER - запуск команди пошуку
searchBtnClick = (e) => {
  e.preventDefault(); // Зупиняємо оновлення сторінки
  fetch (`https://pixabay.com/api/?q=${this.state.filter}&page=1&key=${API_CAY}&image_type=photo&orientation=horizontal&per_page=12`)
  .then(res => res.json())
  .then (imagelist => this.setState({imagelist}));
  this.setState( {filter: ''}); // очищення вмісту форми
}

// openModal = (evt) => {
 
// this.setState({showModal: true, imageModal: evt.target.id});

// };

openModal = (largeImageURL, alt) => {

  // Використовуємо setState з функцією, яка приймає попередній стан і повертає новий.
  this.setState(({ showModal }) => {
    return { showModal: !showModal, largeImageURL, alt };
  });
};

closeModal = () => {

  // Використовуємо setState з функцією, яка приймає попередній стан і повертає новий.
  this.setState(({ showModal }) => {
    return { showModal: !showModal };
  });
};


// РЕНДНЕРІНГ сторінки
  render(){
    // const imagelist = this.state.imagelist.hits;
    const {filter, imagelist, loading, showModal, largeImageURL, alt } = this.state;
    // let visible = false;

    return (
      <div>
        <section>
          <Searchbar filter={filter} handleChange={this.handleChange} searchBtnClick={this.searchBtnClick}/>
        </section>
        <section>
          <ImageGallery  imagelist={imagelist.hits} openModal={this.openModal}/>
              { loading.hits && (<Loader/>) }
              { imagelist.hits && (<Button/>) }
        </section>
        {showModal && (
          <Modal closeModal={this.closeModal} src={largeImageURL} alt={alt}/>
        )}
          
      </div>
     );
  }

};
