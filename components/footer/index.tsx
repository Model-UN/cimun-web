import React from 'react';
import Image from 'next/image';
import { FooterSection, StyledFooter, VercelLink, LogoBox } from './Footer.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer: React.FC = () => (
  <StyledFooter >
    <FooterSection>
      <div >
        <a href="https://www.facebook.com/CIMUNMUNDO" target="_blank" rel="noreferrer">
          <LogoBox>
            <FontAwesomeIcon icon={['fab', 'facebook-square']} />
          </LogoBox>
        </a>
        <a href="https://www.instagram.com/cimun_mundo/" target="_blank" rel="noreferrer">
          <LogoBox>
            <FontAwesomeIcon icon={['fab', 'instagram-square']} />
          </LogoBox>
        </a>
        <a href="https://twitter.com/CIMUN_MUNDO" target="_blank" rel="noreferrer">
          <LogoBox>
            <FontAwesomeIcon icon={['fab', 'twitter-square']} />
          </LogoBox>
        </a>
      </div>
      <div >
        <a href=" https://forms.gle/qDLJH7VgahsHG9ec8" target="_blank">Register Here</a>
      </div>
      <div >
        <a href="https://www.cimunmerch.org">The CIMUN Store</a>
      </div>
      <div >
        <a href="mailto:SC@cimun.org">Contact Us</a>
      </div>
      <div >
        <a href="http://www.mimun.mx/" target="_blank" rel="noreferrer">Check out MIMUN</a>
      </div>
    </FooterSection>
    <FooterSection>
      <VercelLink
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <LogoBox>
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            width={72}
            height={16}
          />
        </LogoBox>
      </VercelLink>
    </FooterSection>
  </StyledFooter>
);

export default Footer;
