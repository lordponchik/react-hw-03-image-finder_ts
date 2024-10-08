import IImage from '../../interfaces/Image.inteface';
import style from './ImageGalleryItem.module.css';

interface Props {
  image: IImage;
  isOpenModal: (modalData: string) => void;
}

const ImageGalleryItem = ({ image: { id, webformatURL, largeImageURL }, isOpenModal }: Props) => {
  return (
    <li
      className={style.galleryItem}
      onClick={() => {
        isOpenModal(largeImageURL);
      }}
    >
      <img src={webformatURL} alt="" />
    </li>
  );
};

export default ImageGalleryItem;
