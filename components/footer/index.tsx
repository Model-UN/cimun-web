import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import {
  FooterSection, StyledFooter, VercelLink, LogoBox,
  FooterNav, FooterCol, FooterColFirst, Icon, FootH2,
} from './Footer.styles';

const Footer: React.FC = () => (
  <StyledFooter>
    <FooterNav>
      <FooterSection>
        <FooterColFirst>
          <div>
            <Image
              src='/cimun_footer.png'
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
          <FootH2>CIMUN XIX</FootH2>
          <div >
            <a
                href="DelegateGuide.pdf"
                target="_blank"
                rel="noopener noreferrer"
            >
              Delegate Guide
            </a>
          </div>
          <div >
            <a
                href="/staff-apps"
                rel="noopener noreferrer"
            >
              Staff Applications
            </a>
          </div>
        </FooterCol>
        <FooterCol>
          <FootH2>Explore</FootH2>
          <div >
            <a href="https://www.cimunmerch.org">The CIMUN Store</a>
          </div>
          <div >
            <a
              href="https://www.mimun.mx/"
              target="_blank"
              rel="noreferrer"
            >
              Check out MIMUN
            </a>
          </div>
          {/* TODO: Add open source credits page */}
          {/*<div >*/}
          {/*  <Link href="/open-source">*/}
          {/*    <a>*/}
          {/*      Licenses & Credits*/}
          {/*    </a>*/}
          {/*  </Link>*/}
          {/*</div>*/}
          <br/>
        </FooterCol>
        <FooterCol>
          <FootH2>Connect with Us</FootH2>
          <div >
            <a href="https://www.facebook.com/CIMUNMUNDO"
               target="_blank"
               rel="noreferrer">
              <Icon icon={['fab', 'facebook-f']} />
            </a>
            <a href="https://www.instagram.com/cimun_mundo/"
               target="_blank"
               rel="noreferrer">
              <Icon icon={['fab', 'instagram']} />
            </a>
            <a href="https://twitter.com/CIMUN_MUNDO" target="_blank" rel="noreferrer">
              <Icon icon={['fab', 'twitter']} />
            </a>
          </div>
          <br />
          <div >
            Email: <a href="mailto:sc@cimun.org">sc@cimun.org</a>
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
            />
          </LogoBox>
        </VercelLink>
        <div/>
      </FooterSection>
    </FooterNav>
  </StyledFooter>
);

export default Footer;
