import type { Meta, StoryObj } from "@storybook/react";
import Button from "./index";
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";
import React from "react";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    iconAfter: {
      control: false,
    },
    iconBefore: {
      control: false,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defaut: Story = {
  args: {
    label: "Button",
  },
};

export const Primary: Story = {
  args: {
    label: "Button",
    variant: "primary",
  },
};

export const Success: Story = {
  args: {
    label: "Button",
    variant: "success",
  },
};

export const Danger: Story = {
  args: {
    label: "Button",
    variant: "danger",
  },
};

export const Warning: Story = {
  args: {
    label: "Button",
    variant: "warning",
  },
};

export const IconBefore: Story = {
  args: {
    label: "Back",
    variant: "primary",
    iconBefore: React.createElement(IoArrowBackCircle),
  },
};

export const IconAfter: Story = {
  args: {
    label: "Next",
    variant: "primary",
    iconAfter: React.createElement(IoArrowForwardCircle),
  },
};
