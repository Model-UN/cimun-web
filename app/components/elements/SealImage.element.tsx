import styled from "styled-components";
import { breakpoints } from "../../../styles/breakpoints";

export const SealImage = styled.img`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex: 1;

  align-self: center;
  margin: 5%;
  object-fit: contain;
  max-width: 15%;

  ${breakpoints("max-width", "", [{ 600: "35%" }])};
  ${breakpoints("margin", "", [{ 600: "0" }])};
`;
