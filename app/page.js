"use client";
import { useState } from "react";

import Main from "./main/page";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
        {" "}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"
          alt="Star Wars logo"
          width={700}
        />
        <p className=" text-7xl font-bold">May the force be with you</p>
        <Link
          href="/main"
          className="p-5 rounded-lg bg-yellow-400 text-black text-3xl font-bold"
          // onClick={handleClick}
        >
          Explore
        </Link>
      </main>
    </>
  );
}
