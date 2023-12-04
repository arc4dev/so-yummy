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
  const iconStyle = { width: '20px', height: '20px' };

  return (
    <SocialsList>
      <SocialItem>
        <FaFacebook style={iconStyle} />
      </SocialItem>
      <SocialItem>
        <FaYoutube style={iconStyle} />
      </SocialItem>
      <SocialItem>
        <FaTwitter style={iconStyle} />
      </SocialItem>
      <SocialItem>
        <FaInstagram style={iconStyle} />
      </SocialItem>
    </SocialsList>
  );
};

export default SocialLinks;
