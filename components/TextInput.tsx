import React from "react";

const TextInput = () => {
  const [text, setText] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Text submitted:", text);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
        <p className="mt-4">TextInput</p>
        <div className="mt-2 max-w-fit">
          <form onSubmit={handleSubmit} className="flex gap-4">
            <input
              type="text"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              className="border rounded-md p-1"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-lg font-medium bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 transition-colors hover:bg-zinc-400 active:scale-95 shadow-sm ring-offset-2 flex gap-1 items-center justify-center"
            >
              Submit
            </button>
          </form>
        </div>
        {text}
      </div>
    </>
  );
};

export default TextInput;
