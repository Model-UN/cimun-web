import React from 'react';
import { Meta, Story } from '@storybook/react';
import Card, { CardProps } from '.';

export default {
  title: 'Layout/Card',
  component: Card,
  argTypes: {
    body: { control: 'text' },
  },
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'asdf',
  body: 'qwertyuiop',
};
