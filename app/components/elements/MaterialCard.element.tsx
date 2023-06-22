import styled from "styled-components";
import { breakpoints } from "../../../styles/breakpoints";

interface MaterialCardProps {
  margins?: string;
  pad?: string;
  mobmargins?: string;
  flexdirection?: string;
  $noAnimate?: boolean;
  background?: string;
}

export const MaterialCard = styled.div<MaterialCardProps>`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex: 1;

  position: relative;
  width: 100%;
  min-height: 100px;

  flex-direction: ${(props: MaterialCardProps) => props.flexdirection};
  ${breakpoints("flex-direction", "", [{ 600: "column" }])};
  margin: ${(props: MaterialCardProps) =>
    props.margins ? props.margins : "1rem"};
  ${(props: MaterialCardProps) => {
    return props.mobmargins
      ? breakpoints("margin", "", [{ 1000: props.mobmargins }])
      : breakpoints("margin", "", [{ 1000: "0" }]);
  }}

  padding: ${(props: MaterialCardProps) => (props.pad ? props.pad : "1rem")};

  background: ${(props: MaterialCardProps) =>
    props.background ? props.background : "#fff"};
  border-radius: 2px;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  transition: ${(props: MaterialCardProps) => {
    return props.$noAnimate ? "none" : "all 0.3s cubic-bezier(.25,.8,.25,1)";
  }};

  :hover {
    box-shadow: ${(props: MaterialCardProps) => {
      return props.$noAnimate
        ? "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
        : "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)";
    }};
  }
`;
