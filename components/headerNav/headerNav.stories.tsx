import type { Meta, StoryObj } from "@storybook/react";

import HeaderNav from ".";

const meta: Meta<typeof HeaderNav> = {
  title: "Layout/HeaderNav",
  component: HeaderNav,
};

export default meta;
type Story = StoryObj<typeof HeaderNav>;

export const Primary: Story = {
  render: () => <HeaderNav />,
};
