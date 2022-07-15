import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import useRedirect from "../../../hooks/useRedirect";
import Signup from "../../organisms/auth/Signup";

export const SignupPage = () => {
  return (
    <ContainerWrapper>
      <Signup></Signup>
    </ContainerWrapper>
  );
};

const ContainerWrapper = styled.div`
  // text-align: center;
  margin: 0 auto;
`;
