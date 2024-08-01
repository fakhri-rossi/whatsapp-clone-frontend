import { useEffect } from "react";
import { useState } from "react";

export default function Button({
  label = "Button",
  onClick = () => console.log("button clicked!"),
  size = "md",
  disableBtn = false,
}) {
  const [buttonSize, setButtonSize] = useState();

  useEffect(() => {
    switch (size) {
      case "md":
        setButtonSize("px-3 py-2");
        break;

      case "sm":
        setButtonSize("px-2 py-1 text-xs");
        break;

      default:
        setButtonSize("px-3 py-2");
        break;
    }
  });

  return (
    <button
      className={`${buttonSize} rounded-full cursor-pointer hover:bg-teal-400 hover:scale-105 bg-teal-500 text-white disabled:hover:scale-100 disabled:hover:bg-teal-200 disabled:bg-teal-200 disabled:cursor-not-allowed`}
      onClick={onClick}
      disabled={disableBtn}>
      {label}
    </button>
  );
}
