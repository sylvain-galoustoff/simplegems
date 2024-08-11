import {
  IoCloseCircle,
  IoKeyOutline,
  IoMailOutline,
  IoPersonOutline,
  IoShieldCheckmark,
} from "react-icons/io5";
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

export const HasError: Story = {
  args: {
    label: "Your email",
    type: "email",
    id: "usermail",
    iconBefore: React.createElement(IoMailOutline),
    iconAfter: React.createElement(IoCloseCircle),
    variant: "danger",
  },
};

export const IsValid: Story = {
  args: {
    label: "Confirm password",
    type: "password",
    id: "usermail",
    iconBefore: React.createElement(IoKeyOutline),
    iconAfter: React.createElement(IoShieldCheckmark),
    variant: "success",
  },
};
