import type { Meta, StoryObj } from "@storybook/react";
import Button from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
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
