import styled, { css } from 'styled-components';
import { HTMLInputTypeAttribute } from 'react';
import { FiLock, FiMail, FiUser } from 'react-icons/fi';

const InputContainer = styled.div`
  position: relative;
`;

const Icon = styled.div`
  position: absolute;
  color: rgba(255, 255, 255, 0.7);
  transition: all 200ms ease-in-out;
  top: 1.15em;
  left: 1.2em;
  width: 20px;

  @media screen and (min-width: 768px) {
    top: 1.6rem;
    left: 1.5rem;
  }
`;

const sizes = {
  stretch: css`
    width: 100%;
    font-size: 1rem;

    @media screen and (min-width: 768px) {
      font-size: 1.28rem;
    }
  `,
  primary: css`
    font-size: 0.7rem;
    min-width: 200px;

    @media screen and (min-width: 768px) {
      font-size: 1rem;
      min-width: 260px;
    }

    @media screen and (min-width: 1440px) {
      font-size: 1.17rem;
      min-width: 338px;
    }
  `,
};
const StyledInput = styled.input<{ size: InputSize }>`
  padding: 1.1em 2em 1.1em 3.4em;
  background: none;
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--color-white);
  border-radius: 6px;
  letter-spacing: -0.36px;
  font-weight: 300;
  transition: all 200ms ease-in-out;

  ${({ size }) => sizes[size]}

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
`;

type InputSize = 'stretch' | 'primary';

type Props = {
  type: 'Email' | 'Password' | 'Name' | 'Newsletter';
  size: InputSize;
};

const Input = ({ type, size }: Props) => {
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
      <StyledInput type={inputType} placeholder={placeholder} size={size} />
      <Icon>{icon}</Icon>
    </InputContainer>
  );
};

export default Input;
