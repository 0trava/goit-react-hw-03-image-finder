import css from './ImageGalleryItem.module.css';


export const ImageGalleryItem = () => {

  return (
      <>
      <li key="" className={ImageGalleryItem}>
          <img
            loading="lazy"
            className={css.ImageGalleryItem_image}
            src="{item.webformatURL}"
            alt="{item.tags}"
          />
      </li>
      </>
  )

}
