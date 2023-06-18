import React from "react";
import Link from "next/link";
import { Committee } from "../types";
import { Header, SubTitle, Body } from "../../styles/typography";
import { MaterialCard, SealImage, CardItemWrapper } from "./elements";
import { colors } from "../../styles/colors";

type CommitteeCardProps = {
  committee: Committee;
};

export const CommitteeCard = (props: CommitteeCardProps) => {
  const topics = props.committee.Topics.map((topic) => {
    if (topic.Title.includes(":")) {
      const titleItems = topic.Title.split(":");
      const title = titleItems[0];
      const subtitle = titleItems.slice(1).join("");

      return (
        <li>
          <strong>{title}</strong>: {subtitle}
        </li>
      );
    }
    return (
      <li>
        <strong>{topic.Title}</strong>
      </li>
    );
  });

  const topicList =
    props.committee.Topics.length > 0 ? (
      <ol>
        <Body size="1.1rem" line={1.5}>
          {topics}
        </Body>
      </ol>
    ) : (
      <></>
    );

  const link = props.committee.Site ? (
    <Body
      align="center"
      size="1rem"
      color={colors.primaryBlue}
      margins="0 0 0 0"
    >
      <br />
      <strong>
        <a
          href={props.committee.Site}
          target="_blank"
          rel="noopener noreferrer"
        >
          More about the {props.committee.Name}
        </a>
      </strong>
    </Body>
  ) : (
    <></>
  );
  const guide =
    props.committee.Guide && props.committee.Abbr === "IPD" ? (
      <Body
        align="center"
        size="1rem"
        color={colors.primaryBlue}
        margins="0 0 0 0"
      >
        <br />
        <Link href={`bg/${props.committee.Guide}`}>
          <a target="_blank" rel="noopener noreferrer">
            <strong>IPD Delegate Guide</strong>
          </a>
        </Link>
      </Body>
    ) : props.committee.Guide ? (
      <Body
        align="center"
        size="1rem"
        color={colors.primaryBlue}
        margins="0 0 0 0"
      >
        <br />
        <Link href={`bg/${props.committee.Guide}`}>
          <a target="_blank" rel="noopener noreferrer">
            <strong>Background Guide</strong>
          </a>
        </Link>
      </Body>
    ) : (
      <></>
    );

  const image = props.committee.Img ? (
    <SealImage src={`/committees/${props.committee.Img}`} />
  ) : (
    <SealImage />
  );

  const topicHeader =
    props.committee.Topics.length > 0 ? (
      <SubTitle
        size="1.4rem"
        weight={700}
        line={0.5}
        margins="0 0 0 0"
        mobSize="1.2rem"
      >
        Anticipated Topics:
      </SubTitle>
    ) : props.committee.Abbr === "IPD" ? (
      <></>
    ) : (
      <SubTitle
        size="1.4rem"
        weight={700}
        line={1.5}
        margins="0 0 0 0"
        mobSize="1.2rem"
      >
        More details regarding committees will be made available on or before Labor Day.
      </SubTitle>
    );

  const committeeDescription = props.committee.Description ? (
    <Body size="1.1rem" line={1.5}>
      <div
        dangerouslySetInnerHTML={{ __html: props.committee.Description }}
      ></div>
    </Body>
  ) : (
    <></>
  );

  return (
    <MaterialCard background={colors.ivory}>
      {image}
      <CardItemWrapper>
        <Header line={0.8} mobSize="1.5rem">
          {props.committee.Name}{" "}
          {props.committee.Abbr ? "(" + props.committee.Abbr + ")" : ""}
          <hr />
        </Header>
        {topicHeader}
        {topicList}
        {committeeDescription}
        {guide}
        {link}
      </CardItemWrapper>
    </MaterialCard>
  );
};
