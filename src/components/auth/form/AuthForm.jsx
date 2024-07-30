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
      <div className="h-[400px] flex justify-center bg-teal-700"></div>

      {/* form container */}
      <div className="absolute top-0 flex justify-center items-center w-full">
        <div className="flex flex-col justify-center p-8 py-12 mx-3 mt-40 mb-20 md:w-[40%] bg-white border border-gray-200 shadow-2xl rounded-lg gap-4">
          {form === "login" ? (
            <Login onFormChange={changeForm} />
          ) : (
            <Register onFormChange={changeForm} />
          )}
        </div>
      </div>
    </div>
  );
}
