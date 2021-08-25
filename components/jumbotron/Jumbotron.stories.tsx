import React from "react";
import { Meta, Story } from '@storybook/react';
import Jumbotron from ".";

export default {
  title: 'Layout/Jumbotron',
  component: Jumbotron
} as Meta;

const Template: Story = (args) => <Jumbotron {...args} />;

export const base = Template.bind({});
