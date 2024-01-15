import Input from './Input';
import Button from './Button';
import { AuthForm, AuthHeader, InputWrapper } from './RegisterForm';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { loginUser } from '../utils/userApi';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';
import { useAuth } from '../contexts/authContexts';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { dispatch } = useAuth();

  const { mutateAsync, isPending, reset } = useMutation({
    mutationFn: loginUser,
    onSuccess: () => toast.success('Login successful!'),
    onError: (error: AxiosError<ResponseError>) => {
      toast.error(error?.response?.data.message || error.message);
      reset();
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    const user = await mutateAsync({
      email: data.email,
      password: data.password,
    });

    dispatch({
      type: 'LOGIN',
      payload: {
        user,
      },
    });
  };

  return (
    <AuthForm onSubmit={handleSubmit(onSubmit)} autoComplete="off" noValidate>
      <AuthHeader>Sign in</AuthHeader>

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
        Sign in
      </Button>
    </AuthForm>
  );
};

export default LoginForm;
