import { FiSearch } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: nav;
`;

const NavList = styled.ul<{ orientation: OrientationType }>`
  display: flex;
  align-items: center;

  color: ${(props) =>
    props.orientation === 'vertical' ? 'var(--color-white-2)' : 'inherit'};
  gap: ${(props) => (props.orientation === 'vertical' ? '1em' : '2em')};
  flex-direction: ${(props) =>
    props.orientation === 'vertical' ? 'column' : 'row'};

  li:last-child {
    display: ${(props) =>
      props.orientation === 'vertical' ? 'none' : 'block'};
  }
`;

const StyledNavLink = styled(NavLink)`
  line-height: 1.28;
  letter-spacing: -0.28px;
  display: flex;
  align-items: center;

  &.active {
    color: var(--color-action);
  }

  &:hover {
    color: var(--color-action);
  }
`;

type OrientationType = 'vertical' | 'horizontal';

type Props = {
  orientation?: OrientationType;
};

const AppNav = ({ orientation = 'horizontal' }: Props) => {
  return (
    <Nav>
      <NavList orientation={orientation}>
        <li>
          <StyledNavLink to="categories">Categories</StyledNavLink>
        </li>
        <li>
          <StyledNavLink end to="recipes/new">
            Add recipes
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink end to="recipes/all">
            My recipes
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="recipes/favourites">Favourites</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="cart">Shopping List</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="search">
            <FiSearch size={20} />
          </StyledNavLink>
        </li>
      </NavList>
    </Nav>
  );
};

export default AppNav;
