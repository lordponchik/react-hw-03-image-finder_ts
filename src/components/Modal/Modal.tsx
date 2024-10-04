import { Component, ReactNode } from 'react';
import { createPortal } from 'react-dom';

const modalRoot: any = document.querySelector('#modal-root');

class Modal extends Component {
  //   onClickToggle = () => {

  //   };

  componentDidMount() {}

  render() {
    return createPortal(
      <div>
        <div>
          <img src="" alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}
