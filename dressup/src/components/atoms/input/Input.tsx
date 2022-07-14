import React, { InputHTMLAttributes, useState } from "react";
import styled from "styled-components";
import { InputProps } from "../../../interfaces/components";

export const Input = ({
  type,
  backgroundColor,
  color,
  fontSize,
  width,
  placeHolder,
  ...arg
}: InputProps) => {
  return (
    <InputWrapper
      type={type}
      style={{ backgroundColor, color, fontSize, width }}
      placeholder={placeHolder}
      {...arg}
    ></InputWrapper>
  );
};
const InputWrapper = styled.input`
  padding: 10px;
  border: 1px solid grey;
`;
