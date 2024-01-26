import { FiSearch } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: nav;
`;

const styles = {
  regular: css``,
  modal: css`
    font-size: 1.28rem;
    gap: 2rem;
  `,
};

const NavList = styled.ul<{
  $orientation: OrientationType;
  $color: ColorType;
  $variant: VariantType;
}>`
  display: flex;
  align-items: center;

  gap: ${({ $orientation }) => ($orientation === 'vertical' ? '1em' : '2em')};
  flex-direction: ${({ $orientation }) =>
    $orientation === 'vertical' ? 'column' : 'row'};
  color: ${({ $color }) =>
    $color === 'black' ? 'inherit' : 'var(--color-white-2)'};

  ${({ $variant }) => styles[$variant]}

  li:last-child {
    display: ${({ $orientation, $variant }) =>
      $orientation === 'horizontal' || $variant === 'modal' ? 'block' : 'none'};
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
type ColorType = 'black' | 'white';
type VariantType = 'regular' | 'modal';

type Props = {
  orientation?: OrientationType;
  color?: ColorType;
  variant?: VariantType;
  onClickLink?: () => void;
};

const AppNav = ({
  orientation = 'horizontal',
  color = 'black',
  variant = 'regular',
  onClickLink,
}: Props) => {
  return (
    <Nav>
      <NavList $orientation={orientation} $color={color} $variant={variant}>
        <li>
          <StyledNavLink onClick={onClickLink} to="categories">
            Categories
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink onClick={onClickLink} end to="recipes/new">
            Add recipes
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink onClick={onClickLink} end to="recipes/all">
            My recipes
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink onClick={onClickLink} to="recipes/favourites">
            Favourites
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink onClick={onClickLink} to="cart">
            Shopping List
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink onClick={onClickLink} to="search">
            <FiSearch size={20} aria-label="Search icon" />
          </StyledNavLink>
        </li>
      </NavList>
    </Nav>
  );
};

export default AppNav;
