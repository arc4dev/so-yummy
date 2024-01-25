import styled from 'styled-components';
import Modal from './Modal';
import ButtonIcon from './ButtonIcon';
import Button from './Button';
import { useAuth } from '../../contexts/authContext';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';
import { logoutUser } from '../../services/userApi';

const StyledLogoutPopup = styled.div.attrs({ className: 'logout-popup' })`
  z-index: 20;
  position: relative;
  inset: 0px;
  background: var(--color-white-2);
  box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.1);
  border-radius: 2rem;
  padding: 3.2rem 2.8rem 2.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  gap: 1.1rem;

  @media screen and (min-width: 768px) {
    width: 400px;
    gap: 1.3rem;
    padding: 2.9rem;
  }
`;

const LogoutDescription = styled.p`
  font-size: 0.9rem;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1.2rem;
`;

const ButtonCloseWrapper = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const LogoutPopup = ({ isOpen, onClose }: Props) => {
  const { dispatch } = useAuth();

  const { mutateAsync, isPending, reset } = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => toast.success('Log out successful!'),
    onError: (error: AxiosError<ResponseError>) => {
      toast.error(error?.response?.data.message || error.message);
      reset();
    },
  });

  const handleLogout = async () => {
    await mutateAsync();

    dispatch({
      type: 'LOGOUT',
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Logout popup"
      className="logout-popup">
      <StyledLogoutPopup>
        <ButtonCloseWrapper>
          <ButtonIcon variant="x" />
        </ButtonCloseWrapper>

        <LogoutDescription>Are you sure you want to log out?</LogoutDescription>
        <ButtonWrapper>
          <Button
            onClick={handleLogout}
            disabled={isPending}
            stretch={true}
            size="small">
            Log out
          </Button>
          <Button onClick={onClose} stretch={true} size="small" btnColor="gray">
            Cancel
          </Button>
        </ButtonWrapper>
      </StyledLogoutPopup>
    </Modal>
  );
};

export default LogoutPopup;
