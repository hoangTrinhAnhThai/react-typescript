import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Input } from "../../components/atoms/input/Input";

export default {
  title: "Atoms/Input",
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  type: "text",
};
