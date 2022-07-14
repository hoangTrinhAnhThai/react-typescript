import React from "react";
import styled from "styled-components";
import { Label } from "../../atoms/label/Label";
import { Input } from "../../atoms/input/Input";
import { LabelInputProps } from "../../../interfaces/components";

export const LabelInput = ({ label, type, width }: LabelInputProps) => {
  return (
    <LabelInputWrapper>
      <Label label={label}></Label>
      <Input type={type} width={width}></Input>
    </LabelInputWrapper>
  );
};

const LabelInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
