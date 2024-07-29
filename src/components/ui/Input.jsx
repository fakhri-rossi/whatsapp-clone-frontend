import { useState } from "react";

export default function Input({ type = "text", value = "", onValueChange }) {
  const [inputValue, setInputValue] = useState(value);
  function changeValue(event) {
    setInputValue(event.target.value);
    onValueChange(event.target.value);
  }
  return (
    <input
      value={inputValue}
      onChange={changeValue}
      className="py-2 px-4 border border-gray-600 rounded-full text-md ring-green-500 focus:ring-green-500"
      type={type}
    />
  );
}
