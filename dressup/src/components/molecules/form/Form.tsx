import React from "react";
import { FormProps } from "../../../interfaces/components";
import { Button } from "../../atoms/button/Button";
import { Label } from "../../atoms/label/Label";
import { LinkAtom } from "../../atoms/link/Link";
import { Body, Footer, FormContainer, Title } from "./style";

export const Form = ({
  children,
  title,
  saveText,
  cancelText,
  removeText,
  redirect,
  ...args
}: FormProps) => {
  return (
    <FormContainer style={{ width: args.width }}>
      <Title style={{ width: args.width }}>
        <Label label={title}></Label>
      </Title>
      <Body style={{ width: args.width }}>{children}</Body>
      <Footer style={{ width: args.width }}>
        {saveText !== "" && (
          <Button onClick={args?.onSave} label={saveText}></Button>
        )}
        {typeof redirect !== "undefined" && (
          <Button>
            <LinkAtom label={redirect.title} url={redirect.route}></LinkAtom>
          </Button>
        )}
        {cancelText && cancelText !== "" && (
          <Button onClick={args?.onCancel} label={cancelText}></Button>
        )}
      </Footer>
    </FormContainer>
  );
};
