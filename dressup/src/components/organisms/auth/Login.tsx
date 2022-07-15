import React from "react";
import styled from "styled-components";
import { Form } from "../../molecules/form/Form";
import { LabelInput } from "../../molecules/label-input/LabelInput";

export default function Login() {
  return (
    <LoginWrapper>
      <Form title="Login" saveText="Sign in">
        <div>
          <LabelInput label="Email" type="text"></LabelInput>
          <LabelInput label="Password" type="password"></LabelInput>
        </div>
      </Form>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.div``;
