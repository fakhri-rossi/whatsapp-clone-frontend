import { useState } from "react";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

export default function Login({ emailValue, passwordValue, onFormChange }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function triggerEmailChange(value) {
    setEmail(value);
  }

  function triggerPasswordChange(value) {
    setPassword(value);
  }

  function switchToRegister() {
    onFormChange("register");
  }

  return (
    <>
      <h1 className="text-gray-900 text-center text-xl md:text-3xl font-bold">
        Login
      </h1>
      <h2 className="text-md md:text-2xl text-center py-0 md:py-2 font-extralight text-slate-950">
        Use Whats Chat in Web
      </h2>
      <h3 className="text-md font-medium text-slate-950">Email</h3>
      <Input onValueChange={triggerEmailChange} value="" type="email" />
      <h3 className="text-md font-medium text-slate-950">Password</h3>
      <Input onValueChange={triggerPasswordChange} type="password" />

      <Button label="Login" />

      <p className="text-slate-950 font-light">
        Don't have an account?{" "}
        <span
          onClick={switchToRegister}
          className="font-bold text-teal-600 cursor-pointer">
          Register here!
        </span>
      </p>
    </>
  );
}
