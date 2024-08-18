import type { Meta, StoryObj } from "@storybook/react";
import DataTable from "../lib/DataTable";

const meta: Meta<typeof DataTable> = {
  title: "DataTable",
  component: DataTable,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defaut: Story = {
  args: {
    rows: [
      {
        firstName: "John",
        lastName: "Doe",
        gender: "male",
        age: "26",
      },
      {
        firstName: "Mary",
        lastName: "Jane",
        gender: "female",
        age: "22",
      },
    ],
    columns: ["gender", "firstName", "lastName"],
    labels: {
      gender: "Genre",
      firstName: "Prénom",
      lastName: "Nom",
    },
  },
};
