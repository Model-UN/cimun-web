import React from 'react';
import { Story, Meta } from '@storybook/react';
import Footer from './index';

export default {
  title: 'Layout/Footer',
  component: Footer,
} as Meta;

const Template: Story = (args) => <Footer {...args} />;

export const base = Template.bind({});
