import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const sizes = {
  small: css`
    padding: 10px 24px;
  `,
  primary: css`
    padding: 0.7em 1.7em;

    @media screen and (min-width: 768px) {
      font-size: 1.15rem;
      padding: 0.7em 3.5em;
    }

    @media screen and (min-width: 1440px) {
      padding: 1.3em 3.5em;
    }
  `,
};

const StyledButton = styled.button<{ size: ButtonSize }>`
  text-align: center;
  border-radius: 6px;
  background: var(--color-action);
  color: var(--color-white-2);
  font-weight: 300;
  line-height: 1.12;

  ${({ size }) => sizes[size]}
`;

type ButtonSize = 'small' | 'primary';

type Props = {
  children: React.ReactNode;
  size: ButtonSize;
  to?: string;
};

const Button = ({ children, size, to }: Props) => {
  if (to)
    return (
      <Link to={to}>
        <StyledButton as="span" size={size}>
          {children}
        </StyledButton>
      </Link>
    );

  return <StyledButton size={size}>{children}</StyledButton>;
};

export default Button;

// width 100%
// small
