import {
  FaAngleLeft,
  FaAngleRight,
  FaMinus,
  FaPlus,
  FaXmark,
} from 'react-icons/fa6';
import styled, { css } from 'styled-components';

const variants = {
  x: css`
    font-size: 1.28rem;
  `,
  minus: css``,
  plus: css``,
  arrowLeft: css`
    font-size: 1.25rem;
    color: rgba(169, 169, 169, 0.73);
  `,
  arrowRight: css`
    font-size: 1.25rem;
    color: rgba(169, 169, 169, 0.73);
  `,
};

const StyledButtonIcon = styled.button<{ $variant: ButtonVariant }>`
  transition: all 200ms ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  ${({ $variant }) => variants[$variant]}
`;

type ButtonVariant = 'x' | 'minus' | 'plus' | 'arrowLeft' | 'arrowRight';

type Props = {
  variant: ButtonVariant;
} & React.ComponentProps<'button'>;

const ButtonIcon = ({ variant, ...props }: Props) => {
  return (
    <StyledButtonIcon $variant={variant} {...props}>
      {variant === 'x' && <FaXmark />}
      {variant === 'minus' && <FaMinus />}
      {variant === 'plus' && <FaPlus />}
      {variant === 'arrowLeft' && <FaAngleLeft />}
      {variant === 'arrowRight' && <FaAngleRight />}
    </StyledButtonIcon>
  );
};

export default ButtonIcon;
