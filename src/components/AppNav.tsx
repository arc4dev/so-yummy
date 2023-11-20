import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavList = styled.ul<{ orientation: OrientationType }>`
  display: flex;
  align-items: center;

  color: ${(props) =>
    props.orientation === 'vertical'
      ? 'var(--color-primary)'
      : 'var(--color-white)'};
  gap: ${(props) => (props.orientation === 'vertical' ? '1em' : '2em')};
  flex-direction: ${(props) =>
    props.orientation === 'vertical' ? 'column' : 'row'};
`;

const StyledNavLink = styled(NavLink)`
  color: var(--color-white);

  line-height: 1.28;
  letter-spacing: -0.28px;
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
          <StyledNavLink to="recipes/new">Add recipes</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="recipes">My recipes</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="favourites">Favourites</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="cart">Shopping List</StyledNavLink>
        </li>
        <li>
          <Link to="search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none">
              <path
                d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                stroke="#22252A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20.9999 21L16.6499 16.65"
                stroke="#22252A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </li>
      </NavList>
    </Nav>
  );
};

export default AppNav;
