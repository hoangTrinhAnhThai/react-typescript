import React from "react";
import styled from "styled-components";
import { LabelProps } from "../../../interfaces/components";

export const Label = ({
  label,
  backgroundColor,
  color,
  fontSize,
}: LabelProps) => {
  return (
    <LabelWrapper style={{ backgroundColor, color, fontSize }}>
      {label}
    </LabelWrapper>
  );
};
const LabelWrapper = styled.label`
  font-family: "Montserrat", sans-serif;
`;
