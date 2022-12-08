import {
  InfoColumnWrapper,
  CardWrapper,
  CardContainer,
} from "../../../components/infoColumns/infoColumns.styles";

export const InformationalWrapper = ({ children }): JSX.Element => {
  return (
    <InfoColumnWrapper margins="0rem 1rem">
      <CardWrapper flex="1" margins="0rem 15%" pad="auto">
        <CardContainer noMargins>{children}</CardContainer>
      </CardWrapper>
    </InfoColumnWrapper>
  );
};
