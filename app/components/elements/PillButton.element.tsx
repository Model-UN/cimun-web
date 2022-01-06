import styled from "styled-components";
import {colors} from "../../../styles/colors";

export type PillProps = {
  id: string
  currentSelection: string
  selectedColor?: string
  defaultColor?: string
}

export const PillButton = styled.button<PillProps>`
  flex: 1;
  
  background: ${(props: PillProps) => {
    return props.currentSelection === props.id
        ? props.selectedColor || colors.primaryBlue
        : props.defaultColor || colors.ltGray
  }};
  color: ${(props: PillProps) => {
    return props.currentSelection === props.id
        ? colors.ltGray
        : "black"
  }};

  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;

  border-radius: 0.5em;
  border-width: 1px;
  border-color: transparent;
  border-style: solid;
  
  padding: .25rem 15px .25rem;
  margin: .25rem;
  
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  
  transition: 0.3s;

  :hover {
    cursor: pointer;
    opacity: 70%;
  }
`
