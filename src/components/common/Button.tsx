import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const sizes = {
  stretch: css`
    padding: 20px 0;
    font-size: 1.14rem;
    width: 100%;
  `,
  small: css`
    font-size: 0.71rem;
    padding: 6px 14px;

    @media screen and (min-width: 768px) {
      font-size: 1rem;
      padding: 12px 32px;
    }

    @media screen and (min-width: 1440px) {
      font-size: 1.14rem;
      padding: 18px 44px;
    }
  `,
  smallStatic: css`
    padding: 10px 24px;
  `,
  primary: css`
    padding: 0.7rem 1.7rem;

    @media screen and (min-width: 768px) {
      font-size: 1.15rem;
      padding: 0.7rem 3.5rem;
    }

    @media screen and (min-width: 1440px) {
      padding: 1.3rem 3.5rem;
    }
  `,
};

const colors = {
  primary: css`
    background: var(--color-action);
    color: var(--color-white-2);
  `,
  secondary: css`
    background: transparent;
    border: 1.5px solid var(--color-action);
  `,
  black: css`
    background: var(--color-black);
    color: var(--color-white-2);
  `,
};

const StyledButton = styled.button<{
  size: ButtonSize;
  $variant: ButtonVariant;
  $btncolor: ButtonColor;
}>`
  display: inline-block;
  text-align: center;
  border-radius: 6px;
  font-weight: 300;
  line-height: 1.12;

  ${({ $btncolor }) => colors[$btncolor]}
  ${({ size }) => sizes[size]}
  ${({ $variant }) => $variant === 'skew' && 'border-radius: 24px 44px;'}
`;

type ButtonSize = 'small' | 'smallStatic' | 'primary' | 'stretch';
type ButtonVariant = 'primary' | 'skew';
type ButtonColor = 'primary' | 'secondary' | 'black';

type Props = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  btnColor?: ButtonColor;
  to?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  size = 'primary',
  variant = 'primary',
  btnColor = 'primary',
  to,
  ...props
}: Props) => {
  if (to)
    return (
      <Link to={to}>
        <StyledButton
          as="span"
          size={size}
          $variant={variant}
          $btncolor={btnColor}>
          {children}
        </StyledButton>
      </Link>
    );

  return (
    <StyledButton
      size={size}
      $variant={variant}
      $btncolor={btnColor}
      {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
