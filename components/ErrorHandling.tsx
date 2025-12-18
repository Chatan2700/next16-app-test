import { useState } from "react";
import { Loader2 } from "lucide-react";

const timeout = 1000;

const ErrorHandling = () => {
  type Status = "idle" | "Loading" | "Success" | "Error";
  const [status, setStatus] = useState<Status>("idle");

  const handleRequest = () => {
    //1. Reset the UI to a Fresh 'Loading State'
    setStatus("Loading");

    setTimeout(() => {
      // 2. Decide the outcome LOCALLY first
      const randomOutcome = Math.random() > 0.5;
      console.log("Random Outcome:", randomOutcome);

      //3. Update the state based on the outcome
      if (randomOutcome) {
        setStatus("Success");
      } else {
        setStatus("Error");
      }
    }, timeout);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="mt-4">Error Handling</p>
        <button
          disabled={status === "Loading"}
          onClick={handleRequest}
          className={`px-4 py-2 rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 transition-colors hover:bg-zinc-400 active:scale-95 shadow-sm  flex gap-1 items-center justify-center ${
            status === "Loading" && "opacity-50 cursor-not-allowed"
          }`}
        >
          Fetch Data
        </button>

        {status === "Loading" && <Loader2 className="animate-spin mt-4" />}
        {status === "Success" && <p className="text-green-500">Success in fetching the Data</p>}
        {status === "Error" && <p className="text-red-500">Error in fetching the Data</p>}
      </div>
    </div>
  );
};

export default ErrorHandling;
