import React from 'react';
import Link from 'next/link';
import {Committee} from "../types";
import {Header, SubTitle, Body} from "../../styles/typography";
import {MaterialCard, SealImage, CardItemWrapper} from "./elements";
import {colors} from "../../styles/colors";

type CommitteeCardProps = {
  committee: Committee
}

export const CommitteeCard = (props: CommitteeCardProps) => {
  const topics = props.committee.Topics.map(topic => {
    if (topic.Title.includes(":")) {
      const titleItems = topic.Title.split(":")
      const title = titleItems[0]
      const subtitle = titleItems.slice(1).join("")

      return <li><strong>{title}</strong>: {subtitle}</li>
    }
    return (
          <li><strong>{topic.Title}</strong></li>
    )
  })

  const link = props.committee.Site
      ? (
        <Body align="center" size="1rem" color={colors.primaryBlue} margins="0 0 0 0">
          <br/>
          <strong>
            <a
                href={props.committee.Site}
                target="_blank"
                rel="noopener noreferrer"
            >
              About the {props.committee.Name}
            </a>
          </strong>
        </Body>
      )
      : <></>
  const guide = props.committee.Site
      ? (
          <Body align="center" size="1rem" color={colors.primaryBlue} margins="0 0 0 0">
            <br/>
            <strong>
              <Link href={`bg/${props.committee.Guide}`}>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                >Background Guide</a>
              </Link>
            </strong>
          </Body>
      )
      : <></>

  return (
      <MaterialCard>
        <SealImage src={`/committees/${props.committee.Img}`}/>
        <CardItemWrapper>
          <Header line={0.8} mobSize="1.5rem">{props.committee.Name} {props.committee.Abbr ? ("(" + props.committee.Abbr + ")") : ""}<hr/></Header>
          <SubTitle size="1.4rem" weight={700} line={0.5} margins="0 0 0 0" mobSize="1.2rem">Anticipated Topics:</SubTitle>
          <br/>
          <ol>
            <Body size="1.1rem" line={1.5}>
              {topics}
            </Body>
          </ol>
          {guide}
          {link}
        </CardItemWrapper>
      </MaterialCard>
  )
};
