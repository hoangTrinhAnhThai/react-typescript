import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeHolder?: string;
  backgroundColor?: string;
  color?: string;
  fontSize?: number;
  width?: number;
}

export interface LabelInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  label: string;
  placeHolder?: string;
  backgroundColor?: string;
  color?: string;
  fontSize?: number;
  width?: number;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  backgroundColor?: string;
  color?: string;
  fontSize?: number;
}

interface LinkProps {
  url: string;
  label: string;
  color?: string;
  fontSize?: number;
}

export interface LabelProps {
  label: string;
  backgroundColor?: string;
  color?: string;
  fontSize?: number;
}
export interface FormProps extends InputHTMLAttributes<HTMLFormElement> {
  children: JSX.Element;
  title: string;
  width?: number;
  saveText?: string;
  removeText?: tring;
  cancelText?: string;
  redirect?: {
    title: string,
    route: string,
  }
  onSave?: (e) => void
  onDelete?: (e) => void
  onCancel?: (e) => void
}
