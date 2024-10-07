import { Component, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import style from './Modal.module.css';

const modalRoot: any = document.querySelector('#modal-root');

interface Props {
  closeModal: (modalData: string) => void;
  children?: React.ReactElement;
}

class Modal extends Component<Props, {}> {
  render() {
    return createPortal(
      <div className={style.backdrop}>
        <div className={style.modal}>
          <button
            type="button"
            onClick={() => this.props.closeModal('')}
            className={style.closeBtn}
          >
            X
          </button>
          {this.props.children}
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
