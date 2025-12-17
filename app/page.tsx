"use client";

import ButtonTest from "@/components/ButtonTest";
import Counter from "@/components/Counter";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div>Hello NextJS</div>
      <div>
        {/* <ButtonTest /> */}
        <Counter />
      </div>
    </div>
  );
}
