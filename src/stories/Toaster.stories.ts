import type { Meta, StoryObj } from "@storybook/react";
import Toaster from "../lib/Notifications/Toaster";

const meta: Meta<typeof Toaster> = {
  title: "Notifications/Toaster",
  component: Toaster,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defaut: Story = {
  args: {},
};
