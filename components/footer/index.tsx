import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FooterSection,
  StyledFooter,
  VercelLink,
  LogoBox,
  FooterNav,
  FooterCol,
  FooterColFirst,
  FootH2,
  SocialAnchor
} from "./Footer.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer: React.FC = () => (
  <StyledFooter>
    <FooterNav>
      <FooterSection>
        <FooterColFirst>
          <div>
            <Image
              alt="CIMUN logo"
              src="/cimun_footer.png"
              layout="responsive"
              width={105}
              height={30}
            />
          </div>
          <p>
            It's your world... <strong>fix it!</strong>
          </p>
        </FooterColFirst>
        <FooterCol>
          <FootH2>CIMUN XX</FootH2>
          {/* <a */}
          {/*  href="CIMUN XIX Schedule.pdf" */}
          {/*  target="_blank" */}
          {/*  rel="noopener noreferrer" */}
          {/* > */}
          {/*  Conference Schedule */}
          {/* </a> */}
          <a href="/committees" target="_blank" rel="noopener noreferrer">
            Committees & Cabinets
          </a>
          {/* <a */}
          {/*  href="CIMUN XIX - Delegate Guide.pdf" */}
          {/*  target="_blank" */}
          {/*  rel="noopener noreferrer" */}
          {/* > */}
          {/*  Delegate Guide */}
          {/* </a> */}
          {/* <a */}
          {/*  href="https://press.cimun.org/" */}
          {/*  target="_blank" */}
          {/*  rel="noopener noreferrer" */}
          {/* > */}
          {/*  The CIMUN Chronicle */}
          {/* </a> */}
        </FooterCol>
        <FooterCol>
          <FootH2>Explore</FootH2>
          <Link href="/about">About CIMUN</Link>
          <Link href="/resources">Delegate Resource Hub</Link>
          <a href="https://www.mimun.mx/" target="_blank" rel="noreferrer">
            Check out MIMUN
          </a>
          {/* TODO: Add open source credits page */}
          {/* <div > */}
          {/*  <Link href="/open-source"> */}
          {/*    <a> */}
          {/*      Licenses & Credits */}
          {/*    </a> */}
          {/*  </Link> */}
          {/* </div> */}
          <br />
        </FooterCol>
        <FooterCol>
          <FootH2>Connect with Us</FootH2>
          <div>
            <SocialAnchor href="https://www.facebook.com/CIMUNMUNDO"
              target="_blank"
              rel="noreferrer">
              <FontAwesomeIcon icon={["fab", "facebook-f"]} />
            </SocialAnchor>
            <SocialAnchor href="https://www.instagram.com/cimun_mundo/"
              target="_blank"
              rel="noreferrer">
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </SocialAnchor>
            <SocialAnchor href="https://twitter.com/CIMUN_MUNDO"
              target="_blank"
              rel="noreferrer">
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </SocialAnchor>
          </div>
          <br />
          <div>
            Email: <a href="mailto:sc@cimun.org">sc@cimun.org</a>
          </div>
          <br />
        </FooterCol>
      </FooterSection>
      <br />
      <br />
      <FooterSection>
        <div />
        <VercelLink
          href="https://vercel.com?utm_source=model-un&utm_campaign=oss"
          target="_blank"
          rel="noopener"
        >
          Powered by{"    "}
          <LogoBox>
            <Image
              alt="Vercel Logo"
              height={16}
              src="/Vercel/logotype/light/vercel-logotype-light.svg"
              width={72}
            />
          </LogoBox>
        </VercelLink>
        <div />
      </FooterSection>
    </FooterNav>
  </StyledFooter >
);

export default Footer;
