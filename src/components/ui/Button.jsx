export default function Button({ label = "Button" }) {
  return (
    <button className="px-3 py-2 rounded-full bg-teal-500 text-white">
      {label}
    </button>
  );
}
