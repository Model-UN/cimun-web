import React from 'react';
import {Meta, Story} from '@storybook/react';
import Letter from './letter';

export default {
  title: 'Articles/Letter',
  component: Letter,
} as Meta;

const Template: Story = () => <Letter/>;

export const letter_text = Template.bind({});
