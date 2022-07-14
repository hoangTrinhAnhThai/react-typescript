import React from "react";
import { LoginForm } from "../../molecules/form/LoginForm";

import { FormProps } from "../../molecules/form/LoginForm";
export const LoginPage = () => {
  const formprops: FormProps = {
    title: "Login",
    labelInputs: [
      { label: "email", type: "text" },
      { label: "pasword", type: "password" },
    ],
    buttons: [{ label: "Login" }],
    width: 350,
  };
  return (
    <div>
      <LoginForm
        title={formprops.title}
        labelInputs={formprops.labelInputs}
        buttons={formprops.buttons}
        width={formprops.width}
      ></LoginForm>
    </div>
  );
};
