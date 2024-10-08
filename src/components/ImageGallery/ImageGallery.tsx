import IImage from '../../interfaces/Image.inteface';
import style from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

interface Props {
  images: IImage[];
  isOpenModal: (modalData: string) => void;
}

const ImageGallery = ({ images, isOpenModal }: Props) => {
  return (
    <ul className={style.gallery}>
      {images.map((image: IImage, index) => {
        return (
          <ImageGalleryItem key={`${image.id}_${index}`} image={image} isOpenModal={isOpenModal} />
        );
      })}
    </ul>
  );
};

export default ImageGallery;
