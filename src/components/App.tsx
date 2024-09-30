import { Component } from 'react';
import './App.css';

import Searchbar from '../components/Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

import getImages from '../services/PixabauAPI';

interface State {
  images: {}[];
  query: string;
}

class App extends Component<{}, State> {
  state = {
    images: [],
    query: '',
  };

  async componentDidUpdate(_: any, prevState: State) {
    if (this.state.query.length !== 0 && prevState.query !== this.state.query) {
      this.sendingRequest();
    }
  }

  sendingRequest = async () => {
    const images = await getImages(this.state.query);

    this.setState(prevState => {
      return { images: [...prevState.images, ...images] };
    });
  };

  qetQuery = (valueInput: string) => {
    this.setState({ query: valueInput });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.qetQuery} />
        <ImageGallery />
      </div>
    );
  }
}

export default App;
