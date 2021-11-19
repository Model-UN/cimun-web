import React from 'react';
import { CardImage, CardText, CardWrapper } from "./Card.styles";
import { SubTitle, Body } from "../../styles/typography";

export interface CardProps {
  image?: string;
  title: string;
  body: string;
}

/**
 * Card
 * @param props
 * @constructor
 */
const Card = (props: CardProps) => {
  const { image, title, body } = props;

  return (
    <CardWrapper>
      <CardImage>
        {image}
      </CardImage>
      <CardText>
        <SubTitle>
          {title}
        </SubTitle>
        <Body>
          {body}
        </Body>
      </CardText>
    </CardWrapper>
  );
}

export default Card;
