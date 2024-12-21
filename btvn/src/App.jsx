import { useState } from "react";

import SideImage from "./assets/SideImage/SideImage";
import Header from "./assets/Header/Header";
import Input from "./assets/Input/Input";
import Checkbox from "./assets/Checkbox/Checkbox";
import Button from "./assets/Button/Button";
import Linebreak from "./assets/Linebreak/Linebreak";
import LoginOptions from "./assets/LoginOptions/LoginOptions";
import Footer from "./assets/Footer/Footer";
import "./App.css";

function App() {
  const [signUp, setsignUp] = useState(true);
  const handleSignUpToggle = () => {
    setsignUp(!signUp);
  };
  return (
    <>
      <SideImage />

      <div id="input-container">
        <Header text={signUp ? "Get started now" : "Welcome back!"} />
        <Input text="Name" type="text" placeholder="Enter your username" />
        {signUp && (
          <Input
            text="Email address"
            type="email"
            placeholder="Enter your email"
          />
        )}
        <Input
          text="Password"
          type="password"
          placeholder="Enter your password"
        />
        <Checkbox text="I agree to the terms and policy" />
        <Button text={signUp ? "Signup" : "Login"} />
        <Linebreak text="Or" />
        <LoginOptions />
        <Footer
          text={signUp ? "Have an account?" : "Don't have an account?"}
          highlight={signUp ? "Login" : "Signup"}
          onClick={handleSignUpToggle}
        />
      </div>
    </>
  );
}

export default App;
