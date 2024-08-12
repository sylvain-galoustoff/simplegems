import type { Meta, StoryObj } from "@storybook/react";
import Toaster from "../lib/Notifications/Toaster";
import * as ToastStories from "./Toast.stories";

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
  args: {
    toastsList: [
      {
        ...ToastStories.Defaut.args,
        id: 3,
        variant: "success",
        message: "Every little thing gonna be all right.",
      },
      {
        ...ToastStories.Defaut.args,
        id: 2,
        variant: "warning",
        message: "Don't push the button !",
      },
      {
        ...ToastStories.Defaut.args,
        id: 1,
        variant: "danger",
        message: "The world is about to explode !",
      },
    ],
  },
};
