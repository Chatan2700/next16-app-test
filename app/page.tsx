"use client";

import ButtonTest from "@/components/ButtonTest";
import Counter from "@/components/Counter";
import ControlledInput from "@/components/ControlledInput";
import TextInput from "@/components/TextInput";
import Toggle from "@/components/Toggle";
import TypesPractice from "@/components/TypesPractice";
import OptionalProp from "@/components/OptionalProp";
import Loader from "@/components/Loader";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div>Hello NextJS</div>
      <div>
        {/* <ButtonTest /> */}
        {/* <Counter /> */}
        {/* <ControlledInput /> */}
        {/* <TextInput /> */}
        {/* <Toggle /> */}
        {/* <TypesPractice title="Hello Types" count={5} /> */}
        {/* <OptionalProp message="Hello" variant="success" /> */}
        <Loader />
      </div>
    </div>
  );
}
