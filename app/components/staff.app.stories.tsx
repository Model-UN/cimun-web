import React from 'react';
import {Meta, Story} from '@storybook/react';
import StaffApp from './staff.app';

export default {
  title: 'Articles/StaffApp',
  component: StaffApp,
} as Meta;

const Template: Story = () => <StaffApp/>;

export const staff_app_text = Template.bind({});
