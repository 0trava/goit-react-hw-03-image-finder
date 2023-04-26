import css from './ImageGallery.module.css';
import {ImageGalleryItem} from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types'; // типизація пропсів


export const ImageGallery = ({imagelist, openModal}) => {


 if (imagelist) {
   if (imagelist.length > 0){
      console.log(imagelist.length);
      return (
         <>
            <ul className={css.ImageGallery}>
              <ImageGalleryItem imagelist ={imagelist} openModal={openModal}/>
            </ul>
         </>

      )
    } else {
      return (
         <>
            <div>
               <h1>We don't find image with this name</h1>
            </div>
         </>

      )

    }
 }

}

ImageGallery.propTypes = {
   imagelist: PropTypes.arrayOf(PropTypes.object).isRequired, // масив об'єктів
   openModal: PropTypes.func.isRequired // функція
 };
 
