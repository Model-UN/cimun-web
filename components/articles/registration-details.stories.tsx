import React from 'react';
import {Meta, Story} from '@storybook/react';
import RegistrationDetails from "./registration-details";

export default {
  title: 'Articles/Registration Details',
  component: RegistrationDetails,
} as Meta;

const Template: Story = () => <RegistrationDetails/>;

export const registration_details_text = Template.bind({});
