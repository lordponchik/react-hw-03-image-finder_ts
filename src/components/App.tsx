import { Component } from 'react';
import './App.css';

import Searchbar from '../components/Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component<{}, {}> {
  state = {
    images: [],
    query: '',
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
