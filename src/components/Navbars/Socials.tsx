import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router'

const Socials = () => {
  
  return (
    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
      <li className="flex items-center">
        <a
          className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
          href="https://www.linkedin.com/in/randy-binondo/"
        >
          <i className="text-blueGray-400 fab fa-linkedin text-lg leading-lg " />
          <span className="lg:hidden inline-block ml-2">Link</span>
        </a>
      </li>
      <li className="flex items-center">
        <a
          className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
          href="https://www.facebook.com/randybinondo.page"
        >
          <i className="text-blueGray-400 fab fa-facebook text-lg leading-lg " />
          <span className="lg:hidden inline-block ml-2">Follow</span>
        </a>
      </li>

      <li className="flex items-center">
        <a
          className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
          href="https://twitter.com/randybinondo"
        >
          <i className="text-blueGray-400 fab fa-twitter text-lg leading-lg " />
          <span className="lg:hidden inline-block ml-2">Tweet</span>
        </a>
      </li>

      <li className="flex items-center">
        <a
          className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
          href="https://github.com/binondord"
        >
          <i className="text-blueGray-400 fab fa-github text-lg leading-lg " />
          <span className="lg:hidden inline-block ml-2">Star</span>
        </a>
      </li>

      <li className="flex items-center">
        <a
          className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
          href="https://www.youtube.com/vhyeinouondz"
        >
          <i className="text-blueGray-400 fab fa-youtube text-lg leading-lg " />
          <span className="lg:hidden inline-block ml-2">Subscribe</span>
        </a>
      </li>
    </ul>
  );
}

export default Socials;