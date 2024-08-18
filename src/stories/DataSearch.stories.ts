import type { Meta, StoryObj } from "@storybook/react";
import DataSearch from "../lib/Forms/DataSearch";

const meta: Meta<typeof DataSearch> = {
  title: "Formulaires/DataSearch",
  component: DataSearch,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof DataSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defaut: Story = {
  args: {
    data: ["pomme", "poire", "noix de coco", "abricot", "raisins", "mangue", "ananas"],
  },
};
