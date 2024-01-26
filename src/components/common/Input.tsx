import styled, { css } from 'styled-components';

import { FiLock, FiMail, FiUser } from 'react-icons/fi';
import { forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

const InputContainer = styled.div`
  position: relative;
`;

const Icon = styled.div`
  position: absolute;
  transition: all 200ms ease-in-out;
  top: 1.15rem;
  left: 1.2rem;
  width: 20px;
`;

const ErrorMessage = styled.span`
  position: absolute;
  left: 0px;
  bottom: -15px;
  color: var(--color-wrong);
  font-size: 0.7rem;
`;

const sizees = {
  stretch: css`
    width: 100%;
    font-size: 1rem;

    @media screen and (min-width: 768px) {
      font-sizee: 1.28rem;
    }
  `,
  primary: css`
    font-size: 0.7rem;
    min-width: 200px;

    @media screen and (min-width: 768px) {
      font-sizee: 1rem;
      min-width: 260px;
    }

    @media screen and (min-width: 1440px) {
      font-sizee: 1.17rem;
      min-width: 338px;
    }
  `,
};

const colors = {
  light: css`
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: var(--color-white);

    & + ${Icon} {
      color: rgba(255, 255, 255, 0.7);
    }

    &:hover,
    &:focus {
      border-color: var(--color-white);

      + ${Icon} {
        color: var(--color-white);
      }
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  `,
  dark: css`
    border: 1px solid var(--color-gray-4);
    color: var(--color-primary);

    & + ${Icon} {
      color: var(--color-gray);
    }

    &:hover,
    &:focus {
      border-color: var(--color-black-3);

      + ${Icon} {
        color: var(--color-black-3);
      }
    }

    &::placeholder {
      color: var(--color-gray);
    }
  `,
};

const StyledInput = styled.input<{ $sizee: InputSizee; $colors: InputColors }>`
  padding: 1.1em 2em 1.1em 3.4em;
  background: none;
  outline: none;
  border-radius: 6px;
  letter-spacing: -0.36px;
  font-weight: 300;
  transition: all 200ms ease-in-out;

  ${({ $sizee }) => sizees[$sizee]}
  ${({ $colors }) => colors[$colors]}
`;

type InputSizee = 'stretch' | 'primary';
type InputVariant = 'Email' | 'Password' | 'Name' | 'Newsletter';
type InputColors = 'light' | 'dark';

type Props = {
  variant: InputVariant;
  sizee: InputSizee;
  error?: FieldError;
  colors?: InputColors;
} & React.ComponentProps<'input'>;

const Input = forwardRef<HTMLInputElement, Props>(
  ({ variant, sizee, error, colors = 'light', ...props }, ref) => {
    let placeholder = '';
    if (variant === 'Newsletter') placeholder = 'Enter your email address';
    else placeholder = variant;

    let icon: JSX.Element | null = null;
    let type: React.HTMLInputTypeAttribute = 'text';

    const iconStyle = { width: '100%', height: '100%' };

    if (variant === 'Email' || variant === 'Newsletter') {
      icon = <FiMail style={iconStyle} />;
      type = 'email';
    } else if (variant === 'Password') {
      icon = <FiLock style={iconStyle} />;
      type = 'password';
    } else if (variant === 'Name') {
      icon = <FiUser style={iconStyle} />;
      type = 'text';
    }

    return (
      <InputContainer>
        <StyledInput
          type={type}
          $colors={colors}
          placeholder={placeholder}
          $sizee={sizee}
          style={
            error
              ? {
                  borderColor: 'var(--color-wrong)',
                  color: 'var(--color-wrong)',
                }
              : {}
          }
          {...props}
          ref={ref}
        />
        <Icon style={error ? { color: 'var(--color-wrong)' } : {}}>{icon}</Icon>
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
      </InputContainer>
    );
  }
);

export default Input;
