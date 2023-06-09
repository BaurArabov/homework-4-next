"use client";
import { useState } from "react";
import Characters from "./characters/page";
import Planet from "./planets/page";
import Link from "next/link";

export default function Main() {
  return (
    <>
      {/* {chosen ? ( */}
      <div className="flex items-center justify-center gap-x-10 h-screen">
        <Link
          href="/main/planets"
          className="p-10 bg-yellow-400 rounded-lg text-black text-5xl"
        >
          Planets
        </Link>
        <Link
          href="/main/characters"
          className="p-10 bg-yellow-400 rounded-lg text-black text-5xl"
        >
          Characters
        </Link>
      </div>
    </>
  );
}
