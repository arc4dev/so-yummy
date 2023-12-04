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

  @media screen and (min-width: 768px) {
    top: 1.15em;
    left: 1.2em;
    width: 20px;
  }

  @media screen and (min-width: 1440px) {
    top: 1.47em;
    left: 1.5em;
  }
`;

const StyledInput = styled.input`
  padding: 1.1em 2em 1.1em 3.4em;
  font-size: 0.65rem;
  background: none;
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--color-white);
  border-radius: 6px;
  min-width: 200px;
  letter-spacing: -0.36px;
  font-weight: 300;

  transition: all 200ms ease-in-out;

  &:hover {
    border-color: var(--color-white);

    + ${Icon} {
      color: var(--color-white);
    }
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    border-color: var(--color-white);

    + ${Icon} {
      color: var(--color-white);
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 1rem;
    min-width: 260px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 1.17rem;
    min-width: 338px;
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

  const iconStyle = { width: '100%', height: '100%' };

  if (type === 'Email' || type === 'Newsletter') {
    icon = <FiMail style={iconStyle} />;
    inputType = 'email';
  } else if (type === 'Password') {
    icon = <FiLock style={iconStyle} />;
    inputType = 'password';
  } else if (type === 'Name') {
    icon = <FiUser style={iconStyle} />;
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
