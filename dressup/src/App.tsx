import React from "react";
import "./App.css";
import { LoginPage } from "./components/templates/auth/LoginPage";
import { SignupPage } from "./components/templates/auth/SignupPage";

function App() {
  return (
    <div className="App">
      {/* <LoginPage /> */}
      <SignupPage></SignupPage>
    </div>
  );
}

export default App;
