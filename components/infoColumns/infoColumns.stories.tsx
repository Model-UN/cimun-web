import type { Meta, StoryObj } from "@storybook/react";

import InfoColumns from ".";

const meta: Meta<typeof InfoColumns> = {
  title: "Components/InfoColumns",
  component: InfoColumns,
};

export default meta;
type Story = StoryObj<typeof InfoColumns>;

export const Primary: Story = {
  render: () => <InfoColumns />,
};
