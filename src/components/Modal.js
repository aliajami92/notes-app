import React from 'react';
import { createPortal } from 'react-dom';
import { Container, ModalBody } from '../style/Modal';

const Modal = ({ show, title, footer, children, ...rest }) => {
  return show
    ? createPortal(
        <Container show={show}>
          <ModalBody {...rest}>
            <h2>{title}</h2>
            <div className='content'>{children}</div>
            <div className='footer'>{footer()}</div>
          </ModalBody>
        </Container>,
        document.getElementById('modal'),
      )
    : null;
};

export default Modal;
