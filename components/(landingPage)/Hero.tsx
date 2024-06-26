"use client";
import { useRouter } from "next/navigation";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

export function Hero() {
  const router = useRouter();

  const words = [
    {
      text: "Build",
    },
    {
      text: "your",
    },
    {
      text: "resume",
    },
    {
      text: "in",
    },
    {
      text: "just",
    },
    {
      text: "5 minutes",
      className: "text-violet-600 ",
    },
  ];
  return (

    <div className="flex flex-row items-center justify-start h-full py-20 lg:py-40 border-2 max-w-7xl mx-auto mt-8 mb-4 rounded-2xl relative shadow-xl overflow-hidden">
    <div className="flex flex-col mx-8 z-10">
      <p className="text-neutral-700 dark:text-neutral-200 text-4xl md:text-5xl lg:text-6xl font-bold text-start">
        The ultimate CV builder is here
      </p>
      <TypewriterEffectSmooth words={words} />
      <button className="w-40 h-10 rounded-md bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xl  hover:from-violet-700 hover:to-indigo-700 hover:scale-110 shadow-2xl" onClick={() => router.push("/auth/register")}>
        Sign Up Now!
      </button>
    </div>
    <div className="hidden lg:flex m-4 absolute top-4 right-4 bottom-4 mask rounded-2xl">
      <img src="/linear.webp" className="rounded-md shadow-xl"></img>
    </div>
  </div>
    
  );
}
