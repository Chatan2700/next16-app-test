import { Loader2 } from "lucide-react";
import React from "react";

//Goal: Prepare for async logic.

const timeout = 2000;

const Loader = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleRequest = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, timeout);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="mt-4">Loader</p>

        {isLoading ? (
          // <p>Loading...</p>
          <Loader2 className="animate-spin" />
        ) : (
          <button
            disabled={isLoading}
            onClick={handleRequest}
            className={`px-4 py-2 rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 transition-colors hover:bg-zinc-400 active:scale-95 shadow-sm ring-offset-2 flex gap-1 items-center justify-center ${
              isLoading && "opacity-50 cursor-not-allowed"
            }`}
          >
            SEND
          </button>
        )}
      </div>
    </div>
  );
};

export default Loader;
