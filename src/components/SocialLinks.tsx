import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const SocialsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  grid-area: socialLinks;
`;

const SocialItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  color: var(--color-action);

  &:hover {
    transform: scale(1.1);
  }
`;

const SocialLinks = () => {
  return (
    <SocialsList>
      <SocialItem>
        <FaFacebook style={{ width: '20px', height: '20px' }} />
      </SocialItem>
      <SocialItem>
        <FaYoutube style={{ width: '20px', height: '20px' }} />
      </SocialItem>
      <SocialItem>
        <FaTwitter style={{ width: '20px', height: '20px' }} />
      </SocialItem>
      <SocialItem>
        <FaInstagram style={{ width: '20px', height: '20px' }} />
      </SocialItem>
    </SocialsList>
  );
};

export default SocialLinks;
