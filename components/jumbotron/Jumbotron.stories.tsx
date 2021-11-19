import React from "react";
import { Meta } from '@storybook/react';
import Jumbotron from ".";

export default {
  title: 'Layout/Jumbotron',
  component: Jumbotron
} as Meta;

export const base = () => (
  <Jumbotron
    titleOne={"CIMUN"}
    titleTwo={"Chicago"}
    subTitle={"THE 18TH ANNUAL CHICAGO INTERNATIONAL MODEL UNITED NATIONS CONFERENCE"}
    height={86}
  />
);
