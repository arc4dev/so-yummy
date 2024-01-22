import AppNav from '../common/AppNav';
import ButtonIcon from '../common/ButtonIcon';
import Logo from '../common/Logo';
import styled from 'styled-components';
import Modal from 'react-modal';
import ThemeSwitch from '../common/ThemeSwitch';
import { useEffect } from 'react';

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
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
      appElement={document.getElementById('root')!}
      style={{
        overlay: {
          position: 'fixed',
          inset: '0px',
          zIndex: 100,
        },
        content: {
          width: '100dvw',
          height: '100dvh',
          inset: '0px',
          border: 'none',
          background: 'var(--color-action-light)',
          padding: 0,
        },
      }}>
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
