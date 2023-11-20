import styled from 'styled-components';

const StyledButton = styled.button`
  text-align: center;
  padding: 0.7em 1.7em;
  border-radius: 6px;
  line-height: 1.14;
  background: var(--color-action);
  color: var(--color-white-2);
`;

type Props = {
  children: React.ReactNode;
};

const Button = ({ children }: Props) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
