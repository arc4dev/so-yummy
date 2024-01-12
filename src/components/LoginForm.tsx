import Input from './Input';
import Button from './Button';
import { AuthForm, AuthHeader, InputWrapper } from './RegisterForm';

const LoginForm = () => {
  return (
    <AuthForm>
      <AuthHeader>Sign in</AuthHeader>

      <InputWrapper>
        <Input size="stretch" type="Email" />
        <Input size="stretch" type="Password" />
      </InputWrapper>

      <Button size="stretch">Sign up</Button>
    </AuthForm>
  );
};

export default LoginForm;
