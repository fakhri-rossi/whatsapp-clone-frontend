import { useState } from "react";
import Input from "../../ui/Input";
import Login from "./Login";
import Register from "./Register";

export default function AuthForm() {
  const [form, setForm] = useState("login");

  const [email, setEmail] = useState("akuuu");

  function changeForm(value) {
    setForm(value);
  }

  return (
    <div className="min-h-screen">
      <div className="h-[250px] flex justify-center bg-teal-700"></div>

      {/* form container */}
      <div className="absolute top-0 flex justify-center items-center w-full">
        <div className="flex flex-col z-20 justify-center p-6 mx-3 mt-40 mb-20 md:w-[40%] bg-white border border-gray-200 shadow-2xl rounded-lg gap-4">
          {form === "login" ? (
            <Login onFormChange={changeForm} />
          ) : (
            <Register onFormChange={changeForm} />
          )}

          {/* <div>
            {form === "login" ? (
              <p className="text-slate-950 font-light">
                Don't have an account?{" "}
                <span
                  onClick={switchToRegister}
                  className="font-bold text-teal-600 cursor-pointer">
                  Register here!
                </span>
              </p>
            ) : (
              <p className="text-slate-950 font-light">
                Have an account?{" "}
                <span
                  onClick={switchToLogin}
                  className="font-bold text-teal-600 cursor-pointer">
                  Login here!
                </span>
              </p>
            )}
          </div> */}
        </div>
      </div>
      {/* <div className="sticky top-0 w-screen h-screen flex items-center justify-center"> */}
      {/* </div> */}
    </div>
  );
}