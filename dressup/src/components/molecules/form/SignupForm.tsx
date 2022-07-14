import { string } from "prop-types";
import styled from "styled-components";
import { FormProps } from "../../../interfaces/components";
import { Label } from "../../atoms/label/Label";

export const SignupForm = ({ title, children, width }: FormProps) => {
  return (
    <SignupWrapper style={{ width: `${width}px ` }}>
      <LabelWrapper>
        <Label label={title}></Label>
      </LabelWrapper>
      {children}
    </SignupWrapper>
  );
};

const SignupWrapper = styled.form`
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

const InputContainerWrapper = styled.div``;
const ButtonContainerWrapper = styled.div`
  text-align: center;
`;
