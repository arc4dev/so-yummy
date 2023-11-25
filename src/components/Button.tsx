import styled from 'styled-components';

const StyledButton = styled.button`
  text-align: center;
  padding: 0.7em 1.7em;
  border-radius: 6px;
  line-height: 1.14;
  background: var(--color-action);
  color: var(--color-white-2);
  font-weight: 300;
  line-height: 1.12;

  @media screen and (min-width: 768px) {
    font-size: 1.15rem;
    padding-left: 3.5em;
    padding-right: 3.5em;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 1.3em;
    padding-bottom: 1.3em;
  }
`;

type Props = {
  children: React.ReactNode;
};

const Button = ({ children }: Props) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
