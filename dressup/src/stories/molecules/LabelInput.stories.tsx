import { ComponentMeta, ComponentStory } from "@storybook/react";
import { LabelInput } from "../../components/molecules/label-input/LabelInput";

export default {
  title: "Oganisms/LabelInput",
  component: LabelInput,
} as ComponentMeta<typeof LabelInput>;

const Template: ComponentStory<typeof LabelInput> = (args) => (
  <LabelInput {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  label: "LabelInput",
  type: "Text",
};
