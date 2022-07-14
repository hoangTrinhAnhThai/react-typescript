import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Label } from "../../components/atoms/label/Label";

export default {
  title: "Atoms/Label",
  component: Label,
  argTypes: {},
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: "Label",
};
