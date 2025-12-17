import React from "react";
import { Pointer } from "lucide-react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const ButtonTest = () => {
  const [showConfetti, setShowConfetti] = React.useState(false);
  const { width, height } = useWindowSize();

  return (
    <>
      {showConfetti && <Confetti width={width} height={height} recycle={false} />}

      <button
        className="mt-4 px-4 py-2 rounded-lg font-medium bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 transition-colors hover:bg-zinc-400 active:scale-95 shadow-sm ring-offset-2 flex gap-1 items-center justify-center"
        onClick={() => {
          console.log("Button clicked");
          setShowConfetti(true);
        }}
      >
        Click me
        <Pointer strokeWidth={1.5} size={20} />
      </button>
    </>
  );
};

export default ButtonTest;
