"use client";

import React from "react";
import { PartyPopper } from "lucide-react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const Counter = () => {
  const [showConfetti, setShowConfetti] = React.useState(false);
  const { width, height } = useWindowSize();

  const [count, setCount] = React.useState(0);

  const nextCount = count + 1;

  return (
    <>
      {showConfetti && <Confetti width={width} height={height} recycle={false} />}

      <div className="mt-4 flex flex-col items-center justify-center gap-4">
        <p>Count: {count}</p>

        {count < 10 ? (
          <button
            className="px-4 py-2 rounded-lg font-medium bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 transition-colors hover:bg-zinc-400 active:scale-95 shadow-sm ring-offset-2 flex gap-1 items-center justify-center"
            onClick={() => {
              setCount((prev) => prev + 1);
              console.log("Counter incremented to", nextCount);
              if (nextCount >= 10) {
                setShowConfetti(true);
              }
            }}
          >
            Increment
          </button>
        ) : (
          <div className="flex items-center justify-center gap-2 animate-bounce">
            <p className="text-zinc-400 font-medium">Maximum count reached!</p>
            <PartyPopper className="mt-[-4]" size={18} />
          </div>
        )}
      </div>
    </>
  );
};

export default Counter;
