import styled from 'styled-components';
import Modal from './Modal';

const StyledUserPopup = styled.div.attrs({ className: 'user-popup' })`
  z-index: 20;
  width: 200px;
  height: 200px;
  background: var(--color-action-light);
  padding: 1.2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const UserPopup = ({ isOpen, onClose }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="User popup"
      className="user-popup">
      <StyledUserPopup>User popup</StyledUserPopup>
    </Modal>
  );
};

export default UserPopup;
