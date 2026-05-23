"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });

    const userInfo = await response.json();
    console.log(userInfo);
    router.push("/login");
  };

  return (
    <main className="min-h-screen flex flex-col">
      <div className="bg-gray-100">
        <h1 className="flex justify-between bg-orange-800 pt-4 pb-2 px-4 text-center text-2xl text-white font-bold">
          SAIT Climbing Club
          <a
            href="/"
            className="pt-4 text-sm"
            onClick={(e) => {
              e.preventDefault();
              router.push("/");
            }}
          >
            Home
          </a>
          <a
            href="/login"
            className="pt-4 text-sm text-black"
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
            href="/events"
            className="pt-4 text-sm"
            onClick={(e) => {
              e.preventDefault();
              router.push("/events");
            }}
          >
            Events
          </a>
        </h1>
        <div className="flex flex-1 m-8">
          <div className="m-auto">
            <div className="bg-gray-300 py-10 px-80">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="bg-gray-100 bg-opacity-60 px-20">
                  <h2 className="mt-10 text-center text-3xl p-1 font-bold leading-9 tracking-tight text-black">
                    Register Today
                  </h2>
                </div>
              </div>

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                {/* FORM BEGINS HERE */}
                <form className="space-y-6" onSubmit={registerUser}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      {/* Name */}
                    </label>
                    <div className="mt-2">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder=" Name"
                        required
                        value={data.name}
                        onChange={(e) => {
                          setData({ ...data, name: e.target.value });
                        }}
                        className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      {/* Email address */}
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder=" Email Address"
                        required
                        value={data.email}
                        onChange={(e) => {
                          setData({ ...data, email: e.target.value });
                        }}
                        className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="username"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        {/* Username */}
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        id="username"
                        name="username"
                        type="username"
                        autoComplete="username"
                        placeholder=" Username"
                        required
                        value={data.password}
                        onChange={(e) => {
                          setData({ ...data, username: e.target.value });
                        }}
                        className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        {/* Password */}
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        placeholder=" Password"
                        required
                        value={data.password}
                        onChange={(e) => {
                          setData({ ...data, password: e.target.value });
                        }}
                        className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <p className="mt-10 text-center text-sm font-semibold text-black">
                    Please fill out the form to get started on your climbing journey!
                  </p>

                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="flex w-1/2 justify-center bg-gray-100 px-3 py-1.5 text-lg font-semibold leading-6 text-black shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      REGISTER
                    </button>
                  </div>

                  <p className="mt-10 text-center text-sm text-black">
                    Already have an account?
                  </p>

                  <div className="flex justify-center">
                  <a
                      href="/login"
                      className="flex w-1/2 justify-center bg-gray-100 px-3 py-1.5 text-lg font-semibold leading-6 text-black shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      onClick={(e) => {
                        e.preventDefault();
                        router.push("login");
                      }}
                    >
                      LOG IN
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
