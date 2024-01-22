import styled from 'styled-components';
import ButtonIcon from './ButtonIcon';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.5rem;
`;

const StyledPagination = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  border-radius: 26px;
  background: #fafafa;
  padding: 0.8rem 2rem;
  box-shadow: 0px 4px 4px 0px rgba(135, 135, 135, 0.2);
`;

const PageList = styled.ul`
  display: flex;
  gap: 1.1rem;
`;

const PageListItem = styled.li<{ $active: boolean }>`
  font-size: 0.85rem;
  text-align: center;
  width: 30px;
  height: 30px;
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 100ms ease-in-out;

  background-color: ${({ $active }) =>
    $active ? 'var(--color-action-light)' : 'transparent'};

  &:hover {
    background-color: var(--color-action-light);
  }
`;

type Props = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ totalPages, currentPage, onPageChange }: Props) => {
  if (totalPages === 1) return null;

  return (
    <PaginationContainer>
      <StyledPagination>
        <ButtonIcon variant="minus" />
        <PageList>
          {Array.from({ length: totalPages }, (_, i) => (
            <PageListItem
              $active={i + 1 === currentPage}
              onClick={() => onPageChange(i + 1)}
              key={`Page ${i + 1}`}>
              {i + 1}
            </PageListItem>
          ))}
        </PageList>
        <ButtonIcon variant="plus" />
      </StyledPagination>
    </PaginationContainer>
  );
};

export default Pagination;
