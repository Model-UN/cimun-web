import Link from 'next/link';
import React from 'react';
import { Body } from '../styles/typography';
import AnnouncementBar from "./elements/AnnouncementBar.elements";
import {colors} from "../styles/colors";

const RegistrationOpen = () => {
  return (
      <AnnouncementBar>
        <Body
            color={colors.ltGray}
            weight={600}
            align="center"
            margins="0 0 0 0"
            mobMargins="0 0 0 0"
        >
          Want to bring your school to CIMUN XVIII? You're in luck!
          {" - "}
          <Link href="/school-registration">
            <a><u>Register Now</u></a>
          </Link>
          {" - "}
          <Link href="/registration-information.pdf">
            <a><u>More Information</u></a>
          </Link>
        </Body>
      </AnnouncementBar>
  )
};

const VirtualConference = () => {
  return (
      <AnnouncementBar>
        <Body
            color={colors.ltGray}
            weight={600}
            align="center"
            margins="0.5rem 0 0.5rem 0"
            mobMargins="0.5rem 0 0.5rem 0"
        >
          CIMUN XVIII will take place <em>virtually</em> this year from February 4th to 6th
          {" - "}
          <Link href="/#letter">
            <a><u>Click Here to Read More</u></a>
          </Link>
        </Body>
      </AnnouncementBar>
  )
};

const DelegateGuide = () => {
  return (
      <AnnouncementBar backgroundColor={colors.accentBlue}>
        <Body
            color="white"
            weight={600}
            align="center"
            margins="0.5rem 0 0.5rem 0"
            mobMargins="0.5rem 0 0.5rem 0"
        >
          <Link href="DelegateGuide.pdf">
            <a
                target="_blank"
                rel="noopener noreferrer"
            >
              <strong>DELEGATES!</strong> - Getting ready for CIMUN XVIII?
              Click <strong>here</strong> to review our Delegate Guide!
            </a>
          </Link>
        </Body>
      </AnnouncementBar>
  )
};

const BackgroundGuides = () => {
  return (
      <AnnouncementBar backgroundColor={colors.accentOrange}>
        <Body
            color="white"
            weight={600}
            align="center"
            margins="0.5rem 0 0.5rem 0"
            mobMargins="0.5rem 0 0.5rem 0"
        >
          <Link href="committees">
            <a>
              CIMUN XVIII begins Friday, February 4th. Click here to see our Committees & Background Guides!
            </a>
          </Link>
        </Body>
      </AnnouncementBar>
  )
};

const Announce = {
  RegistrationOpen,
  VirtualConference,
  DelegateGuide,
  BackgroundGuides,
};

export default Announce;
