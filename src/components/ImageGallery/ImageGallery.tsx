import IImage from '../../interfaces/Image.inteface';
import style from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';

interface Props {
  images: IImage[];
  isOpenModal: (modalData: string) => void;
}
interface State {}

class ImageGallery extends Component<Props, State> {
  listRef = React.createRef<HTMLUListElement>();

  getSnapshotBeforeUpdate(prevProps: Props, prevState: State): number | null {
    const list = this.listRef.current;
    if (list) {
      return list.scrollHeight;
    }
    return null;
  }

  componentDidUpdate(prevProps: Props, prevState: State, snapshot: number | null) {
    if (snapshot !== null) {
      const list = this.listRef.current;

      if (list) {
        scroll.scrollTo(snapshot);
      }
    }
  }

  render() {
    const { images, isOpenModal } = this.props;

    return (
      <ul className={style.gallery} ref={this.listRef}>
        {images.map((image: IImage, index) => {
          return (
            <ImageGalleryItem
              key={`${image.id}_${index}`}
              image={image}
              isOpenModal={isOpenModal}
            />
          );
        })}
      </ul>
    );
  }
}

export default ImageGallery;
