import React from "react";

const Toggle = () => {
  const [isOn, setIsOn] = React.useState(true);

  const handleClick = () => {
    setIsOn((prev) => !prev);
  };

  const colorClass = isOn
    ? "bg-emerald-950 text-emerald-50 hover:bg-emerald-900 border-emerald-800/50 shadow-emerald-500/20"
    : "bg-red-950 text-red-50 hover:bg-red-900 border-red-800/50 shadow-red-500/20";

  return (
    <div className="mt-4 flex flex-col items-center justify-center gap-2">
      <p>Toggle state</p>

      <button
        onClick={handleClick}
        className={`px-8 py-3  ${colorClass} rounded-full font-semibold shadow-lg  transition-all active:scale-95 border `}
      >
        {isOn ? "On" : "Off"}
      </button>
    </div>
  );
};

export default Toggle;
