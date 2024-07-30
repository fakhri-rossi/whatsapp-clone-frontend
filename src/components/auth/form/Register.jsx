import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { useState } from "react";
import MySyncLoader from "../../ui/spinner/MySyncLoader";
import { register } from "../../../composables/useAuth";
import MySnackbar from "../../ui/snackbar/MySnackbar";

export default function Register({ onFormChange }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onEmailChange = (value) => setEmail(value);
  const onPasswordChange = (value) => setPassword(value);
  const onNameChange = (value) => setName(value);
  const onUsernameChange = (value) => setUsername(value);
  const onConfirmPasswordChange = (value) => setConfirmPassword(value);

  const switchToLogin = () => onFormChange("login");

  const [barState, setBarState] = useState({
    showBar: false,
    messageBar: "message...",
    typeBar: "success",
  });

  const handleCloseAlert = () => setBarState({ showBar: false });

  const { showBar, messageBar, typeBar } = barState;

  async function handleRegister() {
    setIsLoading(true);

    try {
      const data = await register({
        email,
        name,
        username,
        password,
      });
      console.log(data);
      setBarState({
        showBar: true,
        messageBar: "Registration success, Login to your account!",
        typeBar: "success",
      });
    } catch (error) {
      console.log(error);
      setBarState({
        showBar: true,
        messageBar: error.message,
        typeBar: "error",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <h1 className="text-gray-900 text-center text-xl md:text-3xl font-bold">
        Register
      </h1>
      <h2 className="text-md md:text-2xl text-center py-2 font-extralight text-slate-950">
        Use Whats Chat in Web
      </h2>

      {/* <Button label="Show Bar" onClick={handleOpenAlert} /> */}

      <MySnackbar
        openBar={showBar}
        closeBar={handleCloseAlert}
        message={messageBar}
        type={typeBar}
      />

      {isLoading ? (
        <div className="flex items-center justify-center py-8">
          <MySyncLoader />
        </div>
      ) : (
        <div className="flex flex-col justify-center gap-4">
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
          <h3 className="text-md font-medium text-slate-950">
            Confirm Password
          </h3>
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
        </div>
      )}
    </>
  );
}
