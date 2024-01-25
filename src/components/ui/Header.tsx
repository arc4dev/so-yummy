import styled from 'styled-components';
import Logo from '../common/Logo';
import AppNav from '../common/AppNav';
import ThemeSwitch from '../common/ThemeSwitch';
import useBreakpoints from '../../hooks/useBreakpoints';
import { useAuth } from '../../contexts/authContext';
import AppNavModal from './AppNavModal';
import { useState } from 'react';
import hamburgerIcon from '../../assets/svg/hamburger-menu.svg';
import OptionsPopup from '../common/OptionsPopup';
import UserPopup from '../common/UserEditPopup';
import LogoutPopup from '../common/LogoutPopup';

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: space-between;
  padding: 18px 16px;

  @media screen and (min-width: 768px) {
    padding: 18px 32px 0px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 14px 100px 0 100px;
  }
`;

const UserImage = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 100%;
  object-fit: cover;
  object-position: center;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.4em;
`;

const UserInfo = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.8em;
  font-weight: 500;
`;

const Header = () => {
  const { isDesktop } = useBreakpoints();
  const { user } = useAuth();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOptionsPopupOpen, setIsOptionsPopupOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);

  return (
    <StyledHeader>
      <Logo />

      {isDesktop ? (
        <>
          <AppNav />

          <Container>
            <UserInfo
              onClick={() => setIsOptionsPopupOpen(!isOptionsPopupOpen)}>
              <UserImage src={user?.image} alt={`Image of ${user?.image}`} />
              <span>{user?.name}</span>
            </UserInfo>

            <ThemeSwitch />
          </Container>
        </>
      ) : (
        <>
          <Container>
            <UserInfo
              onClick={() => setIsOptionsPopupOpen(!isOptionsPopupOpen)}>
              <UserImage src={user?.image} alt={`Image of ${user?.image}`} />
              <span>{user?.name}</span>
            </UserInfo>

            <button onClick={() => setIsModalOpen(!isModalOpen)}>
              <img src={hamburgerIcon} alt="Hamburger icon" />
            </button>
          </Container>
        </>
      )}

      <UserPopup
        isOpen={isEditProfileModalOpen}
        onClose={() => setIsEditProfileModalOpen(false)}
      />
      <LogoutPopup
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
      />
      <OptionsPopup
        isOpen={isOptionsPopupOpen}
        onClose={() => setIsOptionsPopupOpen(false)}
        onEditProfile={() => setIsEditProfileModalOpen(true)}
        onLogout={() => setIsLogoutModalOpen(true)}
      />
      <AppNavModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </StyledHeader>
  );
};

export default Header;
