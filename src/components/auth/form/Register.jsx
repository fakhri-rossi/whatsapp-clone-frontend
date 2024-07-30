import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { useState } from "react";

export default function Register({ onFormChange }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onEmailChange = (value) => setEmail(value);
  const onPasswordChange = (value) => setPassword(value);
  const onNameChange = (value) => setName(value);
  const onUsernameChange = (value) => setUsername(value);
  const onConfirmPasswordChange = (value) => setConfirmPassword(value);

  const switchToLogin = () => onFormChange("login");

  function handleRegister() {
    console.log({
      email,
      name,
      username,
      password,
      confirmPassword,
    });
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

      <Button onClick={() => handleRegister()} label="Register" />

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
