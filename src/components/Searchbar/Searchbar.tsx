import React, { Component } from 'react';

interface State {
  valueInput: string;
}

interface Props {
  onSubmit: (valueInput: string) => void;
}

class Searchbar extends Component<Props, State> {
  state = {
    valueInput: '',
  };

  handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    this.setState({ valueInput: value });
  };

  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    this.props.onSubmit(this.state.valueInput);
  };

  render() {
    const { valueInput } = this.state;

    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.onSubmit}>
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
