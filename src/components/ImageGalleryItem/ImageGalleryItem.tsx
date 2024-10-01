import IImage from '../../interfaces/Image.inteface';
// interface Props {
//   image: IImage;
// }

const ImageGalleryItem = ({ id, webformatURL, largeformatURL }: IImage) => {
  return (
    <li className="gallery-item">
      <img src={webformatURL} alt="" />
    </li>
  );
};

export default ImageGalleryItem;
