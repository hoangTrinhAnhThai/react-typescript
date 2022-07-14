import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../atoms/button/Button";
import { SignupForm } from "../../molecules/form/SignupForm";
import { LabelInput } from "../../molecules/label-input/LabelInput";
import { useDispatch } from "react-redux";

export const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <SignupForm title="Signup" width={350} onSave={() => {}}>
        <ContainerWrapper>
          <InputContainerWrapper>
            <LabelInput
              label="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            ></LabelInput>
            <LabelInput
              label="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            ></LabelInput>
          </InputContainerWrapper>
          <ButtonContainerWrapper>
            <Button label="Create account"></Button>
          </ButtonContainerWrapper>
        </ContainerWrapper>
      </SignupForm>
    </div>
  );
};

const ContainerWrapper = styled.div``;
const InputContainerWrapper = styled.div``;
const ButtonContainerWrapper = styled.div`
  text-align: center;
`;
