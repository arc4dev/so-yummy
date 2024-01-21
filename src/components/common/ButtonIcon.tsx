import { FaAngleDown, FaMinus, FaPlus, FaXmark } from 'react-icons/fa6';
import styled, { css } from 'styled-components';

const variants = {
  expand: css`
    display: inline-flex;
    color: var(--color-action);
    font-size: 1.4rem;
  `,
  x: css`
    font-size: 1.28rem;
  `,
  minus: css``,
  plus: css``,
};

const StyledButtonIcon = styled.button<{ $variant: ButtonVariant }>`
  ${({ $variant }) => variants[$variant]}
`;

type ButtonVariant = 'expand' | 'x' | 'minus' | 'plus';

type Props = {
  variant: ButtonVariant;
} & React.ComponentProps<'button'>;

const ButtonIcon = ({ variant, ...props }: Props) => {
  return (
    <StyledButtonIcon $variant={variant} {...props}>
      {variant === 'expand' && <FaAngleDown />}
      {variant === 'x' && <FaXmark />}
      {variant === 'minus' && <FaMinus />}
      {variant === 'plus' && <FaPlus />}
    </StyledButtonIcon>
  );
};

export default ButtonIcon;
