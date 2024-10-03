import { Component } from 'react';
import './App.css';
import IImage from '../interfaces/Image.inteface';

import Searchbar from '../components/Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import getImages from '../services/PixabauAPI';
import LoadMore from './LoadMore/LoadMore';

interface State {
  images: IImage[];
  query: string;
  page: number;
  isLoading: boolean;
}

class App extends Component<{}, State> {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
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

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.qetQuery} />
        <ImageGallery images={this.state.images} />
        {this.state.isLoading && <Loader />}
        {this.state.images.length > 0 && <LoadMore nextPage={this.nextPage} />}
      </div>
    );
  }
}

export default App;
