import IImage from '../../interfaces/Image.inteface';
import style from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

interface Props {
  images: IImage[];
}

const ImageGallery = ({ images }: Props) => {
  return (
    <ul className={style.gallery}>
      {images.map((image: IImage) => {
        return <ImageGalleryItem key={image.id} {...image} />;
      })}
    </ul>
  );
};

export default ImageGallery;
