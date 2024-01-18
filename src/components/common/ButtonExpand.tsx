import { FaAngleDown } from 'react-icons/fa6';
import styled from 'styled-components';

const StyledExpandButton = styled.button`
  display: inline-flex;
  color: var(--color-action);
  font-size: 1.4rem;
`;

const ButtonExpand = () => {
  return (
    <StyledExpandButton>
      <FaAngleDown />
    </StyledExpandButton>
  );
};

export default ButtonExpand;
