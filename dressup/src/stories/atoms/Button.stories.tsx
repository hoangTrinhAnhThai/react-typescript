import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "../../components/atoms/button/Button";
import React from "react";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: "Button",
};
