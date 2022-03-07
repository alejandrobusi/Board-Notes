import React from 'react';
import { Modal } from '@mui/material'
import './ModalContainer.scss';

export default function ModalContainer(props) {

  const { isOpenModal, closeModal, children } = props;

  return (
    <Modal className="modal-container" aria-aria-labelledby='transition-modal-title' open={isOpenModal} onClose={closeModal} closeAfterTransition>
      <div>{children}</div>
    </Modal>
  );
}
