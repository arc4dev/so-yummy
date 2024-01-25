import styled from 'styled-components';
import Modal from './Modal';
import ButtonIcon from './ButtonIcon';
import Input from './Input';
import Button from './Button';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '../../contexts/authContext';
import { useMutation } from '@tanstack/react-query';
import { updateUser } from '../../services/userApi';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';

const StyledUserPopup = styled.div.attrs({ className: 'user-popup' })`
  z-index: 20;
  position: relative;
  background: var(--color-white-2);
  box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.1);
  border-radius: 2rem;
  padding: 3.2rem 2.8rem 2.2rem;
  width: 300px;

  @media screen and (min-width: 768px) {
    width: 400px;
    gap: 1.3rem;
    padding: 2.9rem;
  }
`;

const ButtonCloseWrapper = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;

const EditProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
`;
const schema = yup.object({
  avatar: yup.mixed(),
  name: yup.string().min(3).max(24),
});

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const UserPopup = ({ isOpen, onClose }: Props) => {
  const { user, dispatch } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<yup.InferType<typeof schema>>({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: {
      avatar: undefined,
      name: user?.name || '',
    },
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: updateUser,
    onSuccess: () => toast.success('User updated successfully'),

    onError: (error: AxiosError<ResponseError>) =>
      toast.error(error?.response?.data.message || error.message),
  });

  const onSubmitEditProfile = async (data: yup.InferType<typeof schema>) => {
    const formData = new FormData();

    formData.append('avatar', data.avatar[0] as File);
    formData.append('name', data.name as string);

    const user = await mutateAsync(formData);

    dispatch({
      type: 'UPDATE',
      payload: {
        user,
      },
    });

    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="User popup"
      className="user-popup">
      <StyledUserPopup>
        <ButtonCloseWrapper>
          <ButtonIcon onClick={onClose} variant="x" />
        </ButtonCloseWrapper>

        <EditProfileForm
          onSubmit={handleSubmit(onSubmitEditProfile)}
          autoComplete="off">
          <input type="file" {...register('avatar')} />
          {errors?.avatar && <span>{errors?.avatar?.message?.toString()}</span>}
          <Input
            variant="Name"
            sizee="stretch"
            {...register('name')}
            error={errors?.name}
          />
          <Button type="submit" disabled={isPending} stretch={true}>
            Save changes
          </Button>
        </EditProfileForm>
      </StyledUserPopup>
    </Modal>
  );
};

export default UserPopup;
