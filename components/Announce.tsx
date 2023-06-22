import Link from "next/link";
import React from "react";
import { Body } from "../styles/typography";
import AnnouncementBar from "./elements/AnnouncementBar.elements";
import { colors } from "../styles/colors";

const RegistrationOpen = () => {
  return (
    <AnnouncementBar backgroundColor={colors.indigo}>
      <Body
        color={colors.ivory}
        weight={600}
        align="center"
        margins="1rem 0 1rem 0"
        $mobMargins="0.5rem 0 0.5rem 0"
      >
        Want to bring your school to CIMUN XIX? You're in luck!
        {" - "}
        <Link href="/school-registration">
          <u>Register Now</u>
        </Link>
        {/*{" - "}*/}
        {/*<Link href="/registration-information.pdf">*/}
        {/*  <a><u>More Information</u></a>*/}
        {/*</Link>*/}
      </Body>
    </AnnouncementBar>
  );
};

const PositionPapers = () => {
  return (
    <AnnouncementBar backgroundColor={colors.indigo}>
      <Body
        color={colors.ivory}
        weight={600}
        align="center"
        margins="1rem 0 1rem 0"
        $mobMargins="0.5rem 0 0.5rem 0"
      >
        Position paper submissions have closed!
        {" - "}
        <Link href="/resources">
          <u>View Position Papers</u>
        </Link>{" "}
        ... Still need to submit a position paper?
        {" - "}
        <Link href="https://forms.gle/FwfBNTbxQdootZ7o7">
          <u>Late Position Paper Submission</u>
        </Link>
      </Body>
    </AnnouncementBar>
  );
};

const VirtualConference = () => {
  return (
    <AnnouncementBar>
      <Body
        color={colors.ltGray}
        weight={600}
        align="center"
        margins="0.5rem 0 0.5rem 0"
        $mobMargins="0.5rem 0 0.5rem 0"
      >
        CIMUN XVIII will take place <em>virtually</em> this year from February
        4th to 6th
        {" - "}
        <Link href="/#letter">
          <u>Click Here to Read More</u>
        </Link>
      </Body>
    </AnnouncementBar>
  );
};

const DelegateGuide = () => {
  return (
    <AnnouncementBar backgroundColor={colors.accentBlue}>
      <Body
        color="white"
        weight={600}
        align="center"
        margins="0.5rem 0 0.5rem 0"
        $mobMargins="0.5rem 0 0.5rem 0"
      >
        <Link
          href="DelegateGuide.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>DELEGATES!</strong>- Getting ready for CIMUN XVIII? Click{" "}
          <strong>here</strong>to review our Delegate Guide!
        </Link>
      </Body>
    </AnnouncementBar>
  );
};

const BackgroundGuides = () => {
  return (
    <AnnouncementBar backgroundColor={colors.accentOrange}>
      <Body
        color="white"
        weight={600}
        align="center"
        margins="0.5rem 0 0.5rem 0"
        $mobMargins="0.5rem 0 0.5rem 0"
      >
        <Link href="committees">
          CIMUN XVIII begins Friday, February 4th. Click here to see our
          Committees & Background Guides!
        </Link>
      </Body>
    </AnnouncementBar>
  );
};

const ResourceHub = () => {
  return (
    <AnnouncementBar backgroundColor={colors.plum}>
      <Body
        color={colors.ivory}
        weight={600}
        align="center"
        margins="1rem 0 1rem 0"
        $mobMargins="0.5rem 0 0.5rem 0"
      >
        <Link href="resources" target="_blank" rel="noopener noreferrer">
          Delegates, CIMUN XIX is just around the corner! Check out our
          committees, read our guides, submit your position papers, and get
          ready for CIMUN in our Delegate Resource Hub!
        </Link>
      </Body>
    </AnnouncementBar>
  );
};

const Announce = {
  RegistrationOpen,
  PositionPapers,
  VirtualConference,
  DelegateGuide,
  BackgroundGuides,
  ResourceHub,
};

export default Announce;
