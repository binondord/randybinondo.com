import React from "react";

import Link from "next/link";
import Image from "next/image";
import randy from '/public/randybinondo.png'

const Logo = ({setNavbarOpen: Object}) => {
    return (
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/#home" className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 whitespace-nowrap flex flex-row items-center"
              ><div className={`relative group w-12 h-12 rounded-full overflow-hidden sm:h-32 sm:w-32`}>
              <Image
                  src={randy}
                  alt="Randy D. Binondo"
                  width={50}
                  height={50}
                  />
              </div>
              <div className="text-black px-2 text-normal">
                <span className="test text-2xl">Randy D. Binondo</span>
                <br/>
                <sub className="text-sm text-blueGray-700">coder. father. handyman.</sub>
              </div>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
    );
};

export default Logo;