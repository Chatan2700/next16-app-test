import { useState } from "react";
import { Loader2 } from "lucide-react";

const timeout = 1000;

const ErrorHandling = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<string | undefined>();
  const [error, setError] = useState(false);
  const [idle, setIdle] = useState(true);

  const handleRequest = () => {
    //1. Reset the UI to a Fresh 'Loading State'
    setIsLoading(true);
    setError(false);
    setData(undefined);
    setIdle(false);

    setTimeout(() => {
      // 2. Decide the outcome LOCALLY first
      const randomOutcome = Math.random() > 0.5;
      console.log("Random Outcome:", randomOutcome);

      //3. Update the state based on the outcome
      if (randomOutcome) {
        setData("Success");
        setError(false);
      } else {
        setData(undefined);
        setError(true);
      }
      //4. Finalize the loading state
      setIsLoading(false);
    }, timeout);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="mt-4">Error Handling</p>
        <button
          disabled={isLoading}
          onClick={handleRequest}
          className={`px-4 py-2 rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 transition-colors hover:bg-zinc-400 active:scale-95 shadow-sm  flex gap-1 items-center justify-center ${
            isLoading && "opacity-50 cursor-not-allowed"
          }`}
        >
          Fetch Data
        </button>
        {isLoading ? (
          // <p>Loading...</p>
          <Loader2 className="animate-spin mt-4" />
        ) : (
          !idle && (
            <div>
              {error ? (
                <p className="text-red-500">Error in fetching the Data</p>
              ) : (
                <p className="text-green-500">Success in fetching the Data</p>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ErrorHandling;
