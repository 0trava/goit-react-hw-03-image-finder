import { Component } from "react";
import {Searchbar} from './Searchbar/Searchbar';
import {ImageGallery} from './ImageGallery/ImageGallery';
import {Loader} from './Loader/Loader';
import {Button} from './Button/Button';
import {Modal} from './Modal/Modal';



const API_CAY = '33995663-3283b38da6c47940fd5e67885';
let PAGE = 1;
let openList = '';
let total = 1;
// const URL = 'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12';



export class App extends Component {

  state = {
    imagelist: [],
    total: 1,
    filter: '',
    loading: false,
    showModal: false,

  }




// INPUT - зберігаємо данні при вводі текста в input
handleChange = (event) => {
  const {name, value} = event.currentTarget;
  this.setState({[name]: value});
}

// FILTER - запуск команди пошуку
searchBtnClick = (e) => {
  e.preventDefault(); // Зупиняємо оновлення сторінки
  openList = this.state.filter;
  console.log(openList);
  fetch (`https://pixabay.com/api/?q=${this.state.filter}&page=1&key=${API_CAY}&image_type=photo&orientation=horizontal&per_page=12`)
  .then(res => res.json())
  .then (imagelist => this.setState({imagelist}));
  total = this.state.imagelist.total;
  console.log(total);
  this.setState( { filter: ''}); // очищення вмісту форми
}

clickLoadMore = (e) =>  {
  e.preventDefault(); // Зупиняємо оновлення сторінки
  console.log("start");
  console.log(PAGE);
  console.log(openList);
  
  PAGE +=1;
  let oldImagelist = this.state.imagelist.hits;
  console.log(oldImagelist);
  const newPage = fetch (`https://pixabay.com/api/?q=${openList}&page=${PAGE}&key=${API_CAY}&image_type=photo&orientation=horizontal`)
  .then(res => res.json());
  console.log(newPage);
}

// OPEN MODAL  - відкриття модалки
openModal = (largeImageURL, alt) => {
  this.setState(({ showModal }) => {
    return { showModal: !showModal, largeImageURL, alt };
  });
};

// CLOSE MODAL  - Закриття модалки
closeModal = () => {
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
              { imagelist.hits && (<Button clickLoadMore={this.clickLoadMore}/>) }
        </section>
        {showModal && (
          <Modal closeModal={this.closeModal} src={largeImageURL} alt={alt}/>
        )}
          
      </div>
     );
  }

};
