import { Google } from "@mui/icons-material";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainIcon from "Components/Icons/MainIcon";

export default {
    title: "Example/Button",
    component: MainIcon,
    argTypes: {
        icon: {
            table: { disable: true },
        },
    },
} as ComponentMeta<typeof MainIcon>;

const Template: ComponentStory<typeof MainIcon> = args => (
    <MainIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    href: "https://www.google.com",
    caption: "Google",
    icon: Google,
};
