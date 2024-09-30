import { Component } from 'react';
import './App.css';

import Searchbar from '../components/Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

import getImages from '../services/PixabauAPI';

interface State {
  images: {};
  query: string;
}

class App extends Component<{}, State> {
  state = {
    images: [],
    query: '',
  };

  componentDidUpdate(prevState: State): void {
    if (this.state.query.length !== 0 && prevState.query !== this.state.query) {
      getImages(this.state.query);
    }
  }

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
