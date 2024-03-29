import styled from "styled-components";
import { colors } from "../../../styles/colors";

export type PillProps = {
  id?: string;
  currentSelection?: string;
  selectedColor?: string;
  defaultColor?: string;
};

export const PillButton = styled.button<PillProps>`
  flex: 1;

  background: ${(props: PillProps) => {
    return props.currentSelection === props.id
      ? props.selectedColor || colors.indigo
      : props.defaultColor || colors.fadedltGray;
  }};
  color: ${(props: PillProps) => {
    return props.currentSelection === props.id
      ? colors.ivory
      : colors.primaryBlue;
  }};

  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;

  border-radius: 0.5em;
  border-width: 1px;
  border-color: transparent;
  border-style: solid;

  padding: 0.25rem 15px 0.25rem 15px;
  margin: 0.25rem;
  height: 60px;

  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);

  transition: 0.3s;

  &:hover {
    cursor: pointer;
    opacity: 70%;
  }
`;

export const PillLink = styled.a<PillProps>`
  display: flex;
  align-items: center;

  background: ${(props: PillProps) => {
    return props.currentSelection === props.id
      ? props.selectedColor || colors.indigo
      : props.defaultColor || colors.fadedltGray;
  }};
  color: ${(props: PillProps) => {
    return props.currentSelection === props.id
      ? colors.ivory
      : colors.primaryBlue;
  }};

  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none;

  border-radius: 0.5em;
  border-width: 1px;
  border-color: transparent;
  border-style: solid;

  padding: 0.25rem 15px 0.25rem 15px;
  margin: 0.25rem;
  min-height: 60px;

  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);

  transition: 0.3s;

  &:hover {
    cursor: pointer;
    opacity: 70%;
  }
`;
