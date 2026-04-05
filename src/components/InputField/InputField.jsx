import React from "react";

export default function InputField({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder = "",
  className = "",
}) {
  return (
    <div className="flex flex-col gap-2">

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-110 p-3 rounded-lg border border-white/[0.12] outline-none bg-gray-900 text-gray-400 ${className}`}
      />
    </div>
  );
}
