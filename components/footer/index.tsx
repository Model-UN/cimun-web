import React from 'react';
import Image from 'next/image';
import {
  FooterSection, StyledFooter, VercelLink, LogoBox, FooterNav, FooterCol, FooterColFirst, Icon
} from './Footer.styles';

const Footer: React.FC = () => (
  <StyledFooter>
    <FooterNav>
      <FooterSection>
        <FooterColFirst >
          <div>
            <Image
              src='/CIMUN_White.png'
              layout='responsive'
              width={105}
              height={30}
            />
          </div>
          <p>
            It's your world... <strong>fix it!</strong>
          </p>
        </FooterColFirst>

        <FooterCol>
            <h2>Explore</h2>

            <div >
              <a href="https://www.cimunmerch.org">The CIMUN Store</a>
            </div>

            <div >
              <a href="https://www.mimun.mx/"
                 target="_blank"
                 rel="noreferrer">Check out MIMUN</a>
            </div>
          <br/>
        </FooterCol>

        <FooterCol>
          <h2>Connect with Us</h2>
          <div >
            <a href="https://www.facebook.com/CIMUNMUNDO"
               target="_blank"
               rel="noreferrer">
              <Icon icon={['fab', 'facebook-square']} />
            </a>
            <a href="https://www.instagram.com/cimun_mundo/"
               target="_blank"
               rel="noreferrer">
              <Icon icon={['fab', 'instagram-square']} />
            </a>
            <a href="https://twitter.com/CIMUN_MUNDO" target="_blank" rel="noreferrer">
              <Icon icon={['fab', 'twitter-square']} />
            </a>
          </div>
          <br />
          <div >
            <a href="mailto:sc@cimun.org">sc@cimun.org</a>
          </div>
          <br/>
        </FooterCol>
      </FooterSection>
      <FooterSection>
        <div/>
        <VercelLink
          href="https://vercel.com?utm_source=model-un&utm_campaign=oss"
          target="_blank"
          rel="noopener"
        >
          Powered by{'    '}
          <LogoBox>
            <Image
              alt="Vercel Logo"
              height={16}
              src="/Vercel/logotype/light/vercel-logotype-light.svg"
              width={72}
              color="white"
            />
          </LogoBox>
        </VercelLink>
        <div/>
      </FooterSection>
    </FooterNav>
  </StyledFooter>
);

export default Footer;
