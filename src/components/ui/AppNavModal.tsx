import AppNav from '../common/AppNav';
import ButtonIcon from '../common/ButtonIcon';
import Logo from '../common/Logo';
import styled from 'styled-components';

import ThemeSwitch from '../common/ThemeSwitch';
import { useEffect } from 'react';
import Modal from '../common/Modal';

const ModalContainer = styled.div.attrs({ className: 'app-nav-modal' })`
  z-index: 20;
  width: 100dvw;
  height: 100dvh;
  inset: 0px;
  border: none;
  background: var(--color-action-light);
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    padding: 18px 32px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const AppNavModal = ({ isOpen, onClose }: Props) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="App nav modal"
      className="app-nav-modal">
      <ModalContainer>
        <Wrapper>
          <Logo onClick={onClose} />
          <ButtonIcon variant="x" onClick={onClose} />
        </Wrapper>

        <AppNav orientation="vertical" variant="modal" onClickLink={onClose} />

        <ThemeSwitch />
      </ModalContainer>
    </Modal>
  );
};

export default AppNavModal;
