import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types'; // типизація пропсів



export const ImageGalleryItem = ({imagelist}) => {
   console.log("start");
   console.log(imagelist );
   if (imagelist) {
      return (
        <>
        {imagelist.map(item => (
          <li 
              key={item.id}  
              className={css.galleryItem}>
            <img
              loading="lazy"
              className={css.ImageGalleryItem_image}
              src={item.webformatURL}
              alt={item.tags}
            />
          </li>
          ))}
        </>
    )
   }

}


ImageGalleryItem.propTypes = {
  imagelist: PropTypes.arrayOf(PropTypes.object).isRequired, // масив об'єктів
};
