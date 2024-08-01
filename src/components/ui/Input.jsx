import { useState } from "react";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { GoMention } from "react-icons/go";

export default function Input({
  type = "text",
  value = "",
  onValueChange,
  isUsername = false,
}) {
  const [inputValue, setInputValue] = useState(value);
  const [showPassword, setShowPassword] = useState(false);
  const [dynamicType, setDynamicType] = useState(type);

  function changeValue(event) {
    setInputValue(event.target.value);
    onValueChange(event.target.value);
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
    showPassword ? setDynamicType("password") : setDynamicType("text");
  };

  return (
    <div className="flex items-center justify-center py-2 px-4 border border-gray-600 rounded-full ">
      {isUsername && (
        <div className="pr-3">
          <GoMention className="text-gray-500" />
        </div>
      )}

      <input
        value={inputValue}
        onChange={changeValue}
        className="w-full text-md ring-green-500 focus:ring-green-500"
        type={dynamicType}
      />

      {type === "password" && (
        <span onClick={toggleShowPassword}>
          {showPassword ? (
            <FaEyeSlash className="cursor-pointer" />
          ) : (
            <FaRegEye className="cursor-pointer" />
          )}
        </span>
      )}
    </div>
  );
}
