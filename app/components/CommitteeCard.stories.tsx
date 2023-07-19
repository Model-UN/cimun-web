import type { Meta, StoryObj } from "@storybook/react";
import { CommitteeCard } from "./CommitteeCard";
import { Committee } from "../types";

const meta: Meta<typeof CommitteeCard> = {
  title: "Components/CommitteeCard",
  component: CommitteeCard,
};

export default meta;
type Story = StoryObj<typeof CommitteeCard>;

const ipdCard = new Committee(
  "International Press Delegation",
  "IPD",
  "",
  "cimun-logo.png",
  0,
  [],
  "../CIMUN XIX - IPD Delegate Guide.pdf",
  "The International Press Delegation (IPD) produces The CIMUN Chronicle, a digital newspaper, " +
    "and partners with the CIMUN News Network (CNN), a staff-run broadcast news program.<br/><br/>" +
    "All press coverage during CIMUN is provided by Delegates from the International Press Delegation.",
);

export const Primary: Story = {
  render: () => <CommitteeCard committee={ipdCard} />,
};
