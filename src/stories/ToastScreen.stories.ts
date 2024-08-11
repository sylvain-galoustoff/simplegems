import ToastScreen from "./screens/ToastScreen";

export default {
  component: ToastScreen,
  title: "Notifications/Toaster screen test",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    // toastType: {
    //   options: ["success", "warning", "danger"],
    //   control: { type: "inline-radio" },
    // },
  },
};

export const Default = {
  args: {
    toastType: "success",
    toastMessage: "This is default Message",
  },
};
