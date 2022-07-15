import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LinkProps } from "../../../interfaces/components";

export const LinkAtom = ({ url, label, color, fontSize }: LinkProps) => {
  return (
    <LinkWrapper>
      <Link to={url}>{label}</Link>
    </LinkWrapper>
  );
};
const LinkWrapper = styled.a`
  text-decoration: none;
  color: black;
`;
