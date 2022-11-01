import React from 'react';
import {Meta, Story} from '@storybook/react';
import KieraKingAwardDetails from "./kiera-king";

export default {
  title: 'Articles/Kiera King Award Details',
  component: KieraKingAwardDetails,
} as Meta;

const Template: Story = () => <KieraKingAwardDetails/>;

export const award_details_text = Template.bind({});
