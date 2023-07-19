import styled from "styled-components";
import { colors } from "../../styles/colors";

interface AnnouncementBarProps {
  backgroundColor?: string;
  fontColor?: string;
}

const AnnouncementBar = styled.span<AnnouncementBarProps>`
  display: flex;
  place-content: center;
  width: 100%;

  background-color: ${(props: AnnouncementBarProps) =>
    props.backgroundColor ? props.backgroundColor : colors.accentOrange};
`;

export default AnnouncementBar;
