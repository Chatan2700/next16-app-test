import React from "react";

interface MyComponentProps {
  message: string;
  variant?: "success" | "error";
}

const variants = {
  success: "text-green-500",
  error: "text-red-500",
};

const OptionalProp = ({ message, variant = "success" }: MyComponentProps) => {
  const textColor = variants[variant];

  return (
    <div className="flex flex-col items-center justify-center gap-2 mt-4 border-amber-300 border rounded-2xl p-4">
      <p>OptionalProp</p>
      <div>
        <p className={`${textColor}`}>Message: {message}</p>
      </div>
    </div>
  );
};

export default OptionalProp;
