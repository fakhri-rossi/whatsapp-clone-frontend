import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { useState } from "react";
import MySyncLoader from "../../ui/spinner/MySyncLoader";
import { register, registerVerify } from "../../../composables/useAuth";
import MySnackbar from "../../ui/snackbar/MySnackbar";
import { useRef } from "react";
import { useEffect } from "react";

function Phase1({
  onEmailChange,
  onUsernameChange,
  onPasswordChange,
  onConfirmPasswordChange,
  onSwitchToLogin,
  disableNextButton,
  onNext,
}) {
  const [isLoading, setIsLoading] = useState(false);

  const [barState, setBarState] = useState({
    showBar: false,
    messageBar: "message...",
    typeBar: "success",
  });
  const handleCloseAlert = () => setBarState({ showBar: false });
  const { showBar, messageBar, typeBar } = barState;

  function handleValidate() {
    console.log("Handle Validate!");
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
          <Input isUsername={true} onValueChange={onUsernameChange} />
          {/* password */}
          <h3 className="text-md font-medium text-slate-950">Password</h3>
          <Input onValueChange={onPasswordChange} type="password" />
          {/* Confirm Password */}
          <h3 className="text-md font-medium text-slate-950">
            Confirm Password
          </h3>
          <Input onValueChange={onConfirmPasswordChange} type="password" />

          <Button
            disableBtn={disableNextButton}
            onClick={() => onNext()}
            label="Next"
          />

          <p className="text-slate-950 font-light">
            Have an account?{" "}
            <span
              onClick={onSwitchToLogin}
              className="font-bold text-teal-600 cursor-pointer">
              Login here!
            </span>
          </p>
        </div>
      )}
    </>
  );
}

function Phase2({ onNameChange }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [inputImageUrl, setInputImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");

  const hiddenFileInput = useRef(null);
  const showFileInput = (event) => hiddenFileInput.current.click();

  const handleNameChange = (value) => setName(value);

  const handleChangeFile = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = (event) => setInputImageUrl(event.target.result);
    reader.readAsDataURL(file);
    console.log("image change");
  };

  async function handleClick() {
    setIsLoading(true);
    try {
      const result = await registerVerify({ name, mediaFiles: [selectedFile] });
      console.log(result);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {isLoading ? (
        <MySyncLoader />
      ) : (
        <>
          <input
            type="file"
            name=""
            id=""
            hidden
            accept="image/png, image/gif, image/jpeg, image/jpg"
            ref={hiddenFileInput}
            onChange={handleChangeFile}
          />

          {/* image selector */}
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-full w-16 h-16">
              {inputImageUrl && (
                <img src={inputImageUrl} className="rounded-full" alt="" />
              )}
            </div>
            <div>
              <Button
                label={
                  inputImageUrl
                    ? "Change Profile Picture"
                    : "Upload Profile Picture"
                }
                onClick={showFileInput}
                size="sm"
              />
            </div>
            <div>
              <Button label="Register" onClick={handleClick} />
            </div>
          </div>

          {/* name */}
          <h3 className="text-md font-medium text-slate-950">Set Your Name</h3>
          <Input onValueChange={handleNameChange} />
        </>
      )}
    </>
  );
}

export default function Register({ onFormChange }) {
  const [currentPhase, setCurrentPhase] = useState("1");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (value) => setEmail(value);
  const handlePasswordChange = (value) => setPassword(value);
  const handleUsernameChange = (value) => setUsername(value);
  const handleConfirmPasswordChange = (value) => setConfirmPassword(value);

  const handleNameChange = (value) => setName(value);

  const [disableNext, setDisableNext] = useState(true);

  useEffect(() => {
    if (!username || !email || !password || !confirmPassword) {
      setDisableNext(true);
    } else {
      setDisableNext(false);
    }
  }, [email, username, password, confirmPassword]);

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
      {currentPhase === "1" ? (
        <Phase1
          onEmailChange={handleEmailChange}
          onPasswordChange={handlePasswordChange}
          onConfirmPasswordChange={handleConfirmPasswordChange}
          onUsernameChange={handleUsernameChange}
          onSwitchToLogin={switchToLogin}
          disableNextButton={disableNext}
          onNext={async () => {
            await handleRegister();
            setCurrentPhase(2);
          }}
        />
      ) : (
        <Phase2 username onNameChange={handleNameChange} />
      )}
      <p>Email: {email}</p>
      <p>Username: {username}</p>
      <p>password: {password}</p>
      <p>confirmPassword: {confirmPassword}</p>
    </>
    // <>
    //   <h1 className="text-gray-900 text-center text-xl md:text-3xl font-bold">
    //     Register
    //   </h1>
    //   <h2 className="text-md md:text-2xl text-center py-2 font-extralight text-slate-950">
    //     Use Whats Chat in Web
    //   </h2>

    //   {/* <Button label="Show Bar" onClick={handleOpenAlert} /> */}

    //   <MySnackbar
    //     openBar={showBar}
    //     closeBar={handleCloseAlert}
    //     message={messageBar}
    //     type={typeBar}
    //   />

    //   {isLoading ? (
    //     <div className="flex items-center justify-center py-8">
    //       <MySyncLoader />
    //     </div>
    //   ) : (
    //     <div className="flex flex-col justify-center gap-4">
    //       {/* email */}
    //       <h3 className="text-md font-medium text-slate-950">Email</h3>
    //       <Input onValueChange={onEmailChange} type="email" />
    //       {/* username */}
    //       <h3 className="text-md font-medium text-slate-950">Username</h3>
    //       <Input onValueChange={onUsernameChange} />
    //       {/* name */}
    //       <h3 className="text-md font-medium text-slate-950">Name</h3>
    //       <Input onValueChange={onNameChange} />
    //       {/* password */}
    //       <h3 className="text-md font-medium text-slate-950">Password</h3>
    //       <Input onValueChange={onPasswordChange} type="password" />
    //       {/* Confirm Password */}
    //       <h3 className="text-md font-medium text-slate-950">
    //         Confirm Password
    //       </h3>
    //       <Input onValueChange={onConfirmPasswordChange} type="password" />

    //       <input
    //         type="file"
    //         name=""
    //         id=""
    //         hidden
    //         accept="image/png, image/gif, image/jpeg, image/jpg"
    //         ref={hiddenFileInput}
    //         onChange={handleChangeFile}
    //       />

    //       {/* image selector */}
    //       <div className="flex items-center justify-center gap-4">
    //         <div className="rounded-full w-12 h-12">
    //           {inputImageUrl && (
    //             <img src={inputImageUrl} className="rounded-full" alt="" />
    //           )}
    //         </div>
    //         <div>
    //           <Button
    //             label={
    //               inputImageUrl
    //                 ? "Change Profile Picture"
    //                 : "Upload Profile Picture"
    //             }
    //             onClick={showFileInput}
    //             size="sm"
    //           />
    //         </div>
    //       </div>

    //       <Button onClick={() => handleRegister()} label="Register" />

    //       <p className="text-slate-950 font-light">
    //         Have an account?{" "}
    //         <span
    //           onClick={switchToLogin}
    //           className="font-bold text-teal-600 cursor-pointer">
    //           Login here!
    //         </span>
    //       </p>
    //     </div>
    //   )}
    // </>
  );
}
