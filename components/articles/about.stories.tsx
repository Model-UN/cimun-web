import React from 'react';
import {Meta, Story} from '@storybook/react';
import About from './about';

export default {
  title: 'Articles/About',
  component: About,
} as Meta;

const Template: Story = () => <About/>;

export const about_text = Template.bind({});
