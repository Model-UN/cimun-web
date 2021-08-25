import React from 'react';
import { Meta, Story } from '@storybook/react';
import Card from '.';

export default {
  title: 'Layout/Card',
  component: Card,
} as Meta;

const Template: Story = (args) => <Card {...args} />;

export const base = Template.bind({});
