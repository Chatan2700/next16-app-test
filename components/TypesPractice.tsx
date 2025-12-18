import React from "react";

// Component Contract Type Example
interface MyComponentProps {
  title: string;
  count: number;
}

const TypesPractice = ({ title, count }: MyComponentProps) => {
  return (
    <div className="mt-4 gap-2 flex flex-col items-center justify-center border-amber-300 border rounded-2xl p-4">
      <p>TypesPractice</p>

      <div>
        <h1>{title}</h1>
        <p>{count}</p>
      </div>
    </div>
  );
};

export default TypesPractice;
