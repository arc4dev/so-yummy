import styled from 'styled-components';
import Input from './Input';
import Button from './Button';
import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { useAuth } from '../contexts/authContexts';
import { useForm } from 'react-hook-form';
import { registerUser } from '../utils/userApi';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

export const AuthForm = styled.form`
  width: 335px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-black-3);
  border-radius: 30px;
  padding: 32px 28px;
  gap: 1.7rem;
  box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 768px) {
    width: 500px;
    padding: 44px 50px;
  }
`;

export const AuthHeader = styled.h1`
  align-self: flex-start;
  color: var(--color-white-2);
  font-size: 1.71rem;
  font-weight: 500;
  line-height: 1.16;
  letter-spacing: -0.48px;

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const InputWrapper = styled.div`
  display: grid;
  width: 100%;
  gap: 1.2rem;
`;

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
      name: '',
      password: '',
    },
  });

  const navigate = useNavigate();
  const { dispatch } = useAuth();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      toast.success('Registration successful! Please very your email.');
      reset();
    },
    onError: (error: AxiosError<ResponseError>) => {
      toast.error(error?.response?.data.message || error.message);
      reset();
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    await mutateAsync({
      email: data.email,
      password: data.password,
      name: data.name,
    });

    dispatch({
      type: 'REGISTER',
    });

    navigate('/login');
  };

  return (
    <AuthForm onSubmit={handleSubmit(onSubmit)} autoComplete="off" noValidate>
      <AuthHeader>Register</AuthHeader>

      <InputWrapper>
        <Input
          variant="Email"
          sizee="stretch"
          {...register('email', {
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: 'Email is invalid',
            },
          })}
          error={errors?.email}
          disabled={isPending}
        />

        <Input
          variant="Name"
          sizee="stretch"
          {...register('name', {
            minLength: {
              value: 3,
              message: 'Name must be at least 3 characters',
            },
            maxLength: {
              value: 24,
              message: 'Name must be at most 24 characters',
            },
          })}
          error={errors?.name}
          disabled={isPending}
        />

        <Input
          variant="Password"
          sizee="stretch"
          {...register('password', {
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters',
            },
            maxLength: {
              value: 32,
              message: 'Password must be at most 32 characters',
            },
          })}
          error={errors?.password}
          disabled={isPending}
        />
      </InputWrapper>

      <Button disabled={isPending} size="stretch">
        Register
      </Button>
    </AuthForm>
  );
};

export default RegisterForm;
