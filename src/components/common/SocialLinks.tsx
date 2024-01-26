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
  font-size: 1.43rem;

  &:hover {
    transform: scale(1.1);
  }
`;

const SocialLinks = () => {
  return (
    <SocialsList>
      <SocialItem>
        <Link to="https://www.facebook.com" aria-label="Facebook link">
          <FaFacebook />
        </Link>
      </SocialItem>
      <SocialItem>
        <Link to="https://www.youtube.com" aria-label="Youtube link">
          <FaYoutube />
        </Link>
      </SocialItem>
      <SocialItem>
        <Link to="https://www.twitter.com" aria-label="Twitter link">
          <FaTwitter />
        </Link>
      </SocialItem>
      <SocialItem>
        <Link to="https://www.instagram.com" aria-label="Instagram link">
          <FaInstagram />
        </Link>
      </SocialItem>
    </SocialsList>
  );
};

export default SocialLinks;
