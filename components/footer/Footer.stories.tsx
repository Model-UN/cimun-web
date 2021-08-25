import React from 'react';
import { Meta, Story } from '@storybook/react';
import Footer from '.';

export default {
  title: 'Layout/Footer',
  component: Footer,
} as Meta;

const Template: Story = (args) => <Footer {...args} />;

export const base = Template.bind({});
