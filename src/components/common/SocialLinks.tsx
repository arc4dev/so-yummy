import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SocialsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  grid-area: socialLinks;
`;

const SocialItem = styled.li`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 200ms ease-in-out;
  color: var(--color-action);

  &:hover {
    transform: scale(1.1);
  }
`;

const iconStyle = { width: '20px', height: '20px' };

const SocialLinks = () => {
  return (
    <SocialsList>
      <SocialItem>
        <Link to="https://www.facebook.com">
          <FaFacebook style={iconStyle} />
        </Link>
      </SocialItem>
      <SocialItem>
        <Link to="https://www.youtube.com">
          <FaYoutube style={iconStyle} />
        </Link>
      </SocialItem>
      <SocialItem>
        <Link to="https://www.twitter.com">
          <FaTwitter style={iconStyle} />
        </Link>
      </SocialItem>
      <SocialItem>
        <Link to="https://www.instagram.com">
          <FaInstagram style={iconStyle} />
        </Link>
      </SocialItem>
    </SocialsList>
  );
};

export default SocialLinks;
