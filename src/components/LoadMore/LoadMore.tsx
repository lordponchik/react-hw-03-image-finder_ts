interface Props {
  nextPage: () => void;
}

const LoadMore = ({ nextPage }: Props) => {
  return (
    <button type="button" onClick={nextPage}>
      LoadMore
    </button>
  );
};

export default LoadMore;
