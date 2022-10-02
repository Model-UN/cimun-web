import {
  InfoColumnWrapper,
  CardWrapper,
  CardContainer,
} from "../../../components/infoColumns/infoColumns.styles";

export const InformationalWrapper = ({children} ): JSX.Element => {
  return (
      <InfoColumnWrapper>
        <CardWrapper flex="1" margins="1rem 15% 0 15%" pad="auto">
          <CardContainer noMargins>
            {children}
          </CardContainer>
        </CardWrapper>
      </InfoColumnWrapper>
  )
};
