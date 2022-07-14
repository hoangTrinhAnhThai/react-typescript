import React from "react";
import styled from "styled-components";
import { Button } from "../../atoms/button/Button";
import { Label } from "../../atoms/label/Label";
import { LabelInput } from "../label-input/LabelInput";

export interface FormProps {
  title: string;
  labelInputs: { label: string; type: string }[];
  buttons: { label: string }[];
  width: number;
}

export const LoginForm = (formProps: FormProps) => {
  const listLabelInput = formProps.labelInputs.map((item) => (
    <LiWrapper>
      <LabelInput
        label={item.label}
        type={item.type}
        width={formProps.width}
      ></LabelInput>
    </LiWrapper>
  ));
  const listButton = formProps.buttons.map((item) => (
    <LiWrapper>
      <Button label={item.label}></Button>
    </LiWrapper>
  ));
  return (
    <LoginWrapper style={{ width: `${formProps.width + 23}px ` }}>
      <LabelWrapper>
        <Label label={formProps.title}></Label>
      </LabelWrapper>
      {formProps.labelInputs.length && <UlWrapper>{listLabelInput}</UlWrapper>}
      <ButtonContainerWrapper>
        {formProps.buttons.length && <UlWrapper>{listButton}</UlWrapper>}
      </ButtonContainerWrapper>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  margin: 0 auto;
`;
const LabelWrapper = styled.div`
  text-align: center;
  margin: 15px auto;
`;
const UlWrapper = styled.ul``;
const LiWrapper = styled.li`
  margin: 15px 0;
`;

const ButtonContainerWrapper = styled.div`
  text-align: center;
`;
