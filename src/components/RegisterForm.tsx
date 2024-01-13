import styled from 'styled-components';
import Input from './Input';
import Button from './Button';

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
  return (
    <AuthForm>
      <AuthHeader>Registration</AuthHeader>

      <InputWrapper>
        <Input size="stretch" type="Name" />
        <Input size="stretch" type="Email" />
        <Input size="stretch" type="Password" />
      </InputWrapper>

      <Button size="stretch">Sign up</Button>
    </AuthForm>
  );
};

export default RegisterForm;
