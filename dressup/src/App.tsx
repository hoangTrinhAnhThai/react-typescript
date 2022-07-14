import React from "react";
import "./App.css";
import { LoginPage } from "./components/templates/auth/LoginPage";
import { SignupPage } from "./components/templates/auth/SignupPage";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <LoginPage /> */}
        <SignupPage></SignupPage>
      </div>
    </Provider>
  );
}

export default App;
