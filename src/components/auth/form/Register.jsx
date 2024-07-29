import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { useState } from "react";

export default function Register({ onFormChange }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function onEmailChange(value) {
    setEmail(value);
  }

  function onPasswordChange(value) {
    setPassword(value);
  }

  function onNameChange(value) {
    setName(value);
  }

  function onUsernameChange(value) {
    setUsername(value);
  }

  function onConfirmPasswordChange(value) {
    setConfirmPassword(value);
  }

  function switchToLogin() {
    onFormChange("login");
  }

  return (
    <>
      <h1 className="text-gray-900 text-center text-xl md:text-3xl font-bold">
        Register
      </h1>
      <h2 className="text-md md:text-2xl text-center py-2 font-extralight text-slate-950">
        Use Whats Chat in Web
      </h2>
      {/* email */}
      <h3 className="text-md font-medium text-slate-950">Email</h3>
      <Input onValueChange={onEmailChange} type="email" />
      {/* username */}
      <h3 className="text-md font-medium text-slate-950">Username</h3>
      <Input onValueChange={onUsernameChange} />
      {/* name */}
      <h3 className="text-md font-medium text-slate-950">Name</h3>
      <Input onValueChange={onNameChange} />
      {/* password */}
      <h3 className="text-md font-medium text-slate-950">Password</h3>
      <Input onValueChange={onPasswordChange} type="password" />
      {/* Confirm Password */}
      <h3 className="text-md font-medium text-slate-950">Confirm Password</h3>
      <Input onValueChange={onConfirmPasswordChange} type="password" />

      <Button label="Register" />

      <p className="text-slate-950 font-light">
        Have an account?{" "}
        <span
          onClick={switchToLogin}
          className="font-bold text-teal-600 cursor-pointer">
          Login here!
        </span>
      </p>
    </>
  );
}
