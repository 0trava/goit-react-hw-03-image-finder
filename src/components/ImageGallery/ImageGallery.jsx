import css from './ImageGallery.module.css';
import {ImageGalleryItem} from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types'; // типизація пропсів


export const ImageGallery = ({imagelist}) => {
      console.log(imagelist);
      return (
         <>
            <ul className={css.ImageGallery}>
              <ImageGalleryItem imagelist ={imagelist} />
            </ul>
         </>

      )
}

ImageGallery.propTypes = {
   imagelist: PropTypes.arrayOf(PropTypes.object).isRequired, // масив об'єктів
 };
 
