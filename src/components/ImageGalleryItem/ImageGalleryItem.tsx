import IImage from '../../interfaces/Image.inteface';
import style from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, webformatURL, largeformatURL }: IImage) => {
  return (
    <li className={style.galleryItem}>
      <img src={webformatURL} alt="" />
    </li>
  );
};

export default ImageGalleryItem;
