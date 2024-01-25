import { LuPencil } from 'react-icons/lu';
import { GoArrowRight } from 'react-icons/go';
import Button from './Button';
import styled from 'styled-components';
import Modal from './Modal';

const StyledOptionsPopup = styled.div.attrs({ className: 'options-popup' })`
  position: absolute;
  border: 1px solid var(--color-gray-2);
  top: 70px;
  right: 60px;
  padding: 1.2rem;
  border-radius: 8px;
  background-color: var(--color-white-2);

  @media screen and (min-width: 768px) {
    top: 80px;
    right: 80px;
  }
`;

const EditProfileButton = styled.button`
  display: flex;
  width: 100%;
  font-size: 0.9rem;
  justify-content: space-between;
  align-items: center;
  line-height: 1.6;
  margin-bottom: 1.8rem;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onEditProfile: () => void;
  onLogout: () => void;
};

const OptionsPopup = ({ isOpen, onEditProfile, onLogout, onClose }: Props) => {
  const handleClickProfileButton = () => {
    onClose();
    onEditProfile();
  };

  const handleClickLogoutButton = () => {
    onClose();
    onLogout();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Options popup"
      className="options-popup">
      <StyledOptionsPopup>
        <EditProfileButton onClick={handleClickProfileButton}>
          Edit profile
          <LuPencil />
        </EditProfileButton>

        <Button
          onClick={handleClickLogoutButton}
          size="small"
          stretch={true}
          variant="skew">
          Log out <GoArrowRight style={{ marginLeft: '.3rem' }} />
        </Button>
      </StyledOptionsPopup>
    </Modal>
  );
};

export default OptionsPopup;
