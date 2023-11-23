import { HTMLInputTypeAttribute } from 'react';
import { FiLock, FiMail, FiUser } from 'react-icons/fi';
import styled from 'styled-components';

const InputContainer = styled.div`
  position: relative;
`;

const Icon = styled.div`
  position: absolute;
  top: 0.7em;
  left: 0.7em;
  color: rgba(255, 255, 255, 0.7);
  transition: all 200ms ease-in-out;
`;

const StyledInput = styled.input`
  padding: 1.1em 3.4em;
  font-size: 0.65rem;
  background: none;
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--color-white);
  border-radius: 6px;
  min-width: 200px;
  font-weight: 300;

  transition: all 200ms ease-in-out;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    border-color: var(--color-white);
  }

  &:focus + ${Icon} {
    color: var(--color-white);
  }
`;

type Props = {
  type: 'Email' | 'Password' | 'Name' | 'Newsletter';
};

const Input = ({ type }: Props) => {
  let placeholder = '';
  if (type === 'Newsletter') placeholder = 'Enter your email address';
  else placeholder = type;

  let icon: JSX.Element | null = null;
  let inputType: HTMLInputTypeAttribute = 'text';

  if (type === 'Email' || type === 'Newsletter') {
    icon = <FiMail />;
    inputType = 'email';
  } else if (type === 'Password') {
    icon = <FiLock />;
    inputType = 'password';
  } else if (type === 'Name') {
    icon = <FiUser />;
    inputType = 'text';
  }

  return (
    <InputContainer>
      <StyledInput type={inputType} placeholder={placeholder} />
      <Icon>{icon}</Icon>
    </InputContainer>
  );
};

export default Input;
