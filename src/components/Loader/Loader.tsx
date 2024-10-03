import { ThreeDots } from 'react-loader-spinner';
import style from './Loader.module.css';

const Loader = () => {
  return (
    <div className={style.loaderWrapper}>
      <ThreeDots />
    </div>
  );
};

export default Loader;
