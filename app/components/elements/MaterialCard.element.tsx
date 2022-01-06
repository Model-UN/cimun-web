import styled from "styled-components";
import {breakpoints} from "../../../styles/breakpoints";

export const MaterialCard = styled.div`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: row;

  ${breakpoints("flex-direction", "", [{ 600: "column"}])};
  
  background: #fff;
  
  min-height: 100px;
  margin: 1rem;
  padding: 1rem;
  position: relative;
  width: 100%;

  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  
  :hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22); 
  }
`