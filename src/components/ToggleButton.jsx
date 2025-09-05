import { useState } from "react";

export default function ToggleButton({ active }) {
  const [enabled, setEnabled] = useState(active);

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`relative inline-flex h-5 w-10 mb-1 items-center rounded-full transition-colors duration-300 ${
        enabled
          ? "dark:bg-dark-red bg-light-red"
          : "dark:bg-dark-600 bg-light-300"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
          enabled ? "translate-x-5" : "translate-x-1"
        }`}
      />
    </button>
  );
}
