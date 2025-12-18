import React from "react";

const ControlledInput = () => {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [author, setAuthor] = React.useState("mario");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const blog = { title, body, author };
    console.log("New blog added:", blog);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="mt-6 max-w-fit flex flex-col items-center gap-4 border-2 border-white p-4 rounded-lg">
          <h2>Controlled Input</h2>
          <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <label>Blog title:</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border rounded-md p-1"
              />

              <label>Blog body:</label>
              <textarea
                required
                value={body}
                onChange={(e) => {
                  setBody(e.target.value);
                }}
                className="border rounded-md p-1"
              ></textarea>

              <label>Blog author:</label>
              <select
                className="bg-zinc-800 rounded-md p-2"
                value={author}
                onChange={(e) => {
                  setAuthor(e.target.value);
                }}
              >
                <option value="mario">mario</option>
                <option value="yoshi">yoshi</option>
                <option value="luigi">luigi</option>
              </select>
              <button className="mt-4 px-4 py-2 rounded-lg font-medium bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 transition-colors hover:bg-zinc-400 active:scale-95 shadow-sm ring-offset-2 flex gap-1 items-center justify-center">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="mt-2 w-full max-w-md [&_p]:wrap-break-word">
          <p>{title}</p>
          <p>{body}</p>
          <p>{author}</p>
        </div>
      </div>
    </>
  );
};

export default ControlledInput;
