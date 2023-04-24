// import * as basicLightbox from 'basiclightbox'
import { Component } from 'react';
import css from './Modal.module.css';


export class Modal extends Component{

  render () {
    return(
      <div className={css.Overlay}>
        <div className={css.Modal}>
          <img src="" alt="" />
        </div>
      </div>
    )
  }
}



// Під час кліку на елемент галереї повинно відкриватися модальне вікно з темним 
// оверлеєм і відображатися велика версія зображення. Модальне вікно повинно 
// закриватися по натисканню клавіші ESC або по кліку на оверлеї.

// Зовнішній вигляд схожий на функціонал цього VanillaJS-плагіна, 
// тільки замість білого модального вікна рендериться зображення 
// (у прикладі натисніть Run). Анімацію робити не потрібно!

// const instance = basicLightbox.create(`
//     <iframe src="https://www.youtube.com/embed/E1oZhEIrer4" width="560" height="315" frameborder="0"></iframe>
// `)

// instance.show()


