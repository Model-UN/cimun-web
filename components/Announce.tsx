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
            margins="0.5rem"
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
            margins="0.5rem"
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

const Announce = {
  RegistrationOpen,
  VirtualConference,
};

export default Announce;
