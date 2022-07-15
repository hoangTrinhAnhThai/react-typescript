import React from "react";
import styled from "styled-components";
import { ButtonProps } from "../../../interfaces/components";

export const Button = ({
  label,
  backgroundColor,
  color,
  fontSize,
}: ButtonProps) => {
  return (
    <ButtonWrapper type="button" style={{ backgroundColor, color, fontSize }}>
      {label}
    </ButtonWrapper>
  );
};
const ButtonWrapper = styled.button`
  padding: 10px 20px;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  text-transform: uppercase;
`;
