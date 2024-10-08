import { Component } from 'react';
import './App.css';
import IImage from '../interfaces/Image.inteface';

import Searchbar from '../components/Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import getImages from '../services/PixabauAPI';
import LoadMore from './LoadMore/LoadMore';
import Modal from './Modal/Modal';
import ImageModal from './ImageModal/ImageModal';

interface State {
  images: IImage[];
  query: string;
  page: number;
  isLoading: boolean;
  isOpenModal: boolean;
  modalImageData: null | string;
}

class App extends Component<{}, State> {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    isOpenModal: false,
    modalImageData: '',
  };

  async componentDidUpdate(_: any, prevState: State) {
    if (
      (this.state.query.length !== 0 && prevState.query !== this.state.query) ||
      (this.state.page !== prevState.page && this.state.query !== '')
    ) {
      this.sendingRequest();
    }
  }

  sendingRequest = async () => {
    this.setState({ isLoading: true });

    try {
      const images = await getImages(this.state.query, this.state.page);

      this.setState(prevState => {
        return {
          images: [...prevState.images, ...images],
          isLoading: true,
        };
      });
    } catch (error) {
    } finally {
      this.setState({ isLoading: false });
    }
  };

  qetQuery = (valueInput: string) => {
    if (valueInput === '') {
      alert(`Can't find "Nothing"`);
      return;
    }

    if (this.state.query === valueInput) {
      alert(`${valueInput} found`);
      return;
    }

    this.setState({
      images: [],
      query: valueInput,
      page: 1,
    });
  };

  nextPage = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  handleToggleModal = (modalData: string = '') => {
    this.setState(({ isOpenModal }) => {
      return { isOpenModal: !isOpenModal, modalImageData: modalData };
    });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.qetQuery} />
        <ImageGallery images={this.state.images} isOpenModal={this.handleToggleModal} />
        {this.state.isLoading && <Loader />}
        {this.state.images.length > 0 && <LoadMore nextPage={this.nextPage} />}

        {this.state.isOpenModal && (
          <Modal closeModal={this.handleToggleModal}>
            <ImageModal imageData={this.state.modalImageData} />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
