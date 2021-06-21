import styled from 'styled-components'

export const StyledFooter = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

export const VercelLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

export const LogoBox = styled.span`
  height: 1em;
  margin-left: 0.5rem;
`;