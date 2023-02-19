import Image from 'next/image'

import bike from '@/assets/img/bike_cebu.jpg'

const WelcomeHero = () => {
    return (
        <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                Welcome.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                I live biking, motorcycling, freediving, coding, tinkering
              </p>
              {/*<div className="mt-12">
                <a
                  href="#"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                  target="_blank"
                >
                  Github Star
                </a>
    </div>*/}
            </div>
          </div>
        </div>
        <Image
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src={bike}
          alt="bike"
          width={250}
          height={250}
          />
      </section>
    );
}

export default WelcomeHero;