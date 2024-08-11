import { IoPersonOutline } from "react-icons/io5";
import type { Meta, StoryObj } from "@storybook/react";
import InputField from "./index";
import React from "react";

const meta: Meta<typeof InputField> = {
  title: "Formulaires/InputField",
  component: InputField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Defaut: Story = {
  args: {
    label: "Your name",
    type: "text",
    id: "username",
    iconBefore: React.createElement(IoPersonOutline),
    placeholder: "John Doe",
  },
};
