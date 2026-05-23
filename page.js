"use client";

import React from "react";
// import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col">
      <div className="bg-gray-100">
        <h1 className="flex justify-between bg-orange-800 pt-4 pb-2 px-4 text-center text-2xl text-white font-bold">
          SAIT Climbing Club
          <a
            href="/"
            className="pt-4 text-sm text-black"
            onClick={(e) => {
              e.preventDefault();
              router.push("/");
            }}
          >
            Home
          </a>
          <a
            href="/login"
            className="pt-4 text-sm"
            onClick={(e) => {
              e.preventDefault();
              router.push("/login");
            }}
          >
            Login
          </a>
          <a
            href="/admin"
            className="pt-4 text-sm"
            onClick={(e) => {
              e.preventDefault();
              router.push("/admin");
            }}
          >
            Admin
          </a>
          <a
            href="/communication"
            className="pt-4 text-sm"
            onClick={(e) => {
              e.preventDefault();
              router.push("/communication");
            }}
          >
            Communication
          </a>
          <a
            href="/login"
            className="pt-4 text-sm"
            onClick={(e) => {
              e.preventDefault();
              router.push("/login");
            }}
          >
            Events
          </a>
        </h1>
        <div className="flex flex-1 m-8">
          <div className="m-auto">
            <div className="py-10 px-80">
              <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
                <div className="bg-gray-100 bg-opacity-60 px-20 p-4">
                  <h2 className="mt-2 text-center text-3xl p-1 font-bold leading-9 tracking-tight text-black">
                    Welcome to Your New Addiction!
                  </h2>
                  <h3 className="text-center text-2xl mt-6">
                    "Best decision I've ever made!"
                  </h3>
                  <h3 className="text-center text-2xl">- John Doe</h3>
                </div>
              </div>

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-xl border border-orange-800 p-4">
                <div>
                  <h2 className="text-center text-2xl font-semibold">
                    Getting to Know Us..
                  </h2>
                  <p className="mt-10">
                    Welcome to the SAIT Climbing Club, where adventure meets
                    camaraderie! Our club is a tight-knit community of
                    passionate climbers, ranging from beginners eager to conquer
                    their first climb to seasoned enthusiasts seeking new
                    challenges. We believe in fostering a supportive environment
                    where everyone can share their love for climbing, exchange
                    tips and tricks, and forge lasting connections. Whether
                    you're a seasoned pro or just getting started, our club is
                    all about encouraging personal growth, conquering heights
                    together, and creating memories that last a lifetime. Join
                    us for thrilling climbs, exciting events, and a fantastic
                    community that shares your passion for reaching new
                    heights!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
