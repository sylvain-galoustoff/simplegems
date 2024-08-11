import ToastScreen from "./screens/ToastScreen";

export default {
  component: ToastScreen,
  title: "Notifications/Toaster screen test",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
};

export const Default = {
  args: {
    toastType: "success",
    toastMessage: "This is default Message",
  },
};
