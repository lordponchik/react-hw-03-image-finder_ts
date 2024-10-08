import style from './LoadMore.module.css';

interface Props {
  nextPage: () => void;
}

const LoadMore = ({ nextPage }: Props) => {
  return (
    <button type="button" onClick={nextPage} className={style.loadMore}>
      LoadMore
    </button>
  );
};

export default LoadMore;
