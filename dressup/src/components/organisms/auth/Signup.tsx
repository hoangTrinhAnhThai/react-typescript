import React, { useState } from "react";
import { useDispatch } from "react-redux";
import useRedirect from "../../../hooks/useRedirect";
import { IUser } from "../../../interfaces/redux";
import { Form } from "../../molecules/form/Form";
import { LabelInput } from "../../molecules/label-input/LabelInput";

export default function Signup() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [user, setUser] = useState<IUser>({ email: "", password: "" });
  const dispatch = useDispatch();
  const { goBack } = useRedirect();
  const onSubmit = () => {
    setUser({
      email,
      password,
    });
    console.log(user);
  };
  return (
    <Form
      title="Signup"
      saveText="Create an Account"
      width={320}
      onSubmit={onSubmit}
    >
      <div>
        <LabelInput
          width={320}
          label="Email"
          type="text"
          onChange={() => setEmail}
        ></LabelInput>
        <LabelInput width={320} label="Password" type="password"></LabelInput>
      </div>
    </Form>
  );
}
