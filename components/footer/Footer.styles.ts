import styled from "styled-components";
import { colors } from "../../styles/colors";

export const StyledFooter = styled.footer`
  background-color: ${colors.indigo};
  border-top: 1px solid #eaeaea;
  color: white;
  font-size: 18px;
  padding-bottom: 120px;
  padding-top: 48px;
  position: relative;
  width: 100%;
  z-index: 1;
`;

export const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1200px;
  width: 90%;
`;

export const FooterSection = styled.div`
  align-items: start;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

export const FooterCol = styled.section`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
  width: 14rem;
`;

export const FooterColFirst = styled(FooterCol)`
  width: 18rem;
  padding-bottom: 0.5rem;
`;

export const VercelLink = styled.a`
  align-self: center;
  align-items: center;
  width: 14rem;
`;

export const LogoBox = styled.span`
  height: 1rem;
  margin-left: 0.5rem;
  flex-grow: 2;
`;

export const FootH2 = styled.h2`
  margin-top: 0;
`;

export const SocialAnchor = styled.a`
  display: inline-block;
  height: 3rem;
  width: 3rem;
  border-radius: 100%;
  padding: 0.5rem;
  margin-left: 0.5rem;

  &:hover {
    background: rgba(255, 255, 255, 0.1)
  }

  svg {
    height: 100%;
    width: 100%;
  }
`
