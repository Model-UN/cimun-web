import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components'
import { colors } from '../../styles/colors';

export const StyledFooter = styled.footer`
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  ;
  background-color: ${colors.primaryBlue};
  border-top: 1px solid #EAEAEA;
  color: white;
  font-size: 18px;
  // padding: 50px 0;
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
  padding-bottom: 25px;
`

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

export const Icon = styled(FontAwesomeIcon)`
  font-size: 2em;
  height: 1em;
  margin-left: 0.5rem;
`
export const FootH2 = styled.h2`
  margin-top:0;
`;
