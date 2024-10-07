interface Props {
  imageData: string;
}

const ImageModal = ({ imageData }: Props) => {
  return <img src={imageData} alt="" />;
};

export default ImageModal;
