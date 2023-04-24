
import css from './ImageGallery.module.css';
import {ImageGalleryItem} from 'components/ImageGalleryItem/ImageGalleryItem';


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

// ImageGalleryItem.propTypes = {
//    imagelist: PropTypes.arrayOf(PropTypes.object).isRequired, // масив об'єктів
//  };
 
