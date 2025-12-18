import React from "react";

const Toggle = () => {
  const [isOn, setIsOn] = React.useState(true);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="mt-4 flex flex-col items-center justify-center gap-2">
      <p>Toggle</p>

      {isOn ? (
        <button
          onClick={handleClick}
          className="px-8 py-3 bg-emerald-950 text-emerald-50 rounded-full font-semibold shadow-lg hover:bg-emerald-900 transition-all active:scale-95 border border-emerald-800/50"
        >
          {isOn ? "On" : "Off"}
        </button>
      ) : (
        <button
          onClick={handleClick}
          className="px-8 py-3 bg-red-950 text-red-50 rounded-full font-semibold shadow-lg hover:bg-red-900 transition-all active:scale-95 border border-red-800/50"
        >
          {isOn ? "On" : "Off"}
        </button>
      )}
    </div>
  );
};

export default Toggle;
