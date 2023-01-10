import React from "react";

export default function Footer() {
  return (
    <footer className="bottom-0 left-0 p-4 w-full bg-black border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 ">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a className="text-white text-2xl font-bold " href="#" rel="noreferrer">
          SECRET HUB
        </a>
      </div>
      <hr className="my-6 border-white sm:mx-auto lg:my-8" />
      <span className="block text-sm text-white sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a href="#" className="hover:underline">
          SodoTeo™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}
