// import * as basicLightbox from 'basiclightbox'
import css from './Modal.module.css';


export const Modal = ({closeModal, src, alt})=>{
    return(
      <div className={css.Overlay} onClick={closeModal}>
        <div className={css.Modal}>
          <img src={src} alt={alt} />
        </div>
      </div>
    )
}


