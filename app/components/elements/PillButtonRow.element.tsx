import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const PillButtonRow = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  overflow: hidden;
  align-items: stretch;
  justify-content: center;
  border-radius: 0.5em;
  border-width: 1px;
  border-color: ${colors.fadedltGray};
  margin-bottom: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
`;
