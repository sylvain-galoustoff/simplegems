import type { Meta, StoryObj } from "@storybook/react";
import Toast from "../lib/Notifications/Toaster/Toast";

const meta: Meta<typeof Toast> = {
  title: "Notifications/Toasts",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defaut: Story = {
  args: {
    variant: "primary",
    message: "Toast message here.",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    message: "Every little thing gonna be all right.",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    message: "Don't push the button !",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    message: "The world is about to explode !",
  },
};
