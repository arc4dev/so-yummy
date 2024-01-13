import Input from './Input';
import Button from './Button';
import { AuthForm, AuthHeader, InputWrapper } from './RegisterForm';
import { useForm } from 'react-hook-form';

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

  const onSubmit = async (data: LoginFormData) => {
    console.log(data);
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
        />
      </InputWrapper>

      <Button size="stretch">Sign in</Button>
    </AuthForm>
  );
};

export default LoginForm;
