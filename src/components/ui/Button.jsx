export default function Button({
  label = "Button",
  onClick = () => console.log("button clicked!"),
}) {
  return (
    <button
      className="px-3 py-2 rounded-full cursor-pointer hover:bg-teal-600 bg-teal-500 text-white"
      onClick={onClick}>
      {label}
    </button>
  );
}
