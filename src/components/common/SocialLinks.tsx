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
        <Link to="https://www.facebook.com">
          <FaFacebook />
        </Link>
      </SocialItem>
      <SocialItem>
        <Link to="https://www.youtube.com">
          <FaYoutube />
        </Link>
      </SocialItem>
      <SocialItem>
        <Link to="https://www.twitter.com">
          <FaTwitter />
        </Link>
      </SocialItem>
      <SocialItem>
        <Link to="https://www.instagram.com">
          <FaInstagram />
        </Link>
      </SocialItem>
    </SocialsList>
  );
};

export default SocialLinks;
