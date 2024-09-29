import { Component } from 'react';

interface State {
  valueInput: string;
}

class Searchbar extends Component<{}, State> {
  state = {
    valueInput: '',
  };

  handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    this.setState({ valueInput: value });
  };

  render() {
    const { valueInput } = this.state;

    return (
      <header className="searchbar">
        <form className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            value={valueInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChangeInput}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
