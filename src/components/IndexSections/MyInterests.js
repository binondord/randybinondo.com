import Image from 'next/image'
import wejustdevelop from '@/assets/img/wejustdevelop.png'
import wejustdevelopteam from '@/assets/img/wejustdevelop.jpeg'
export default function MyInterests() {
    return (
        <section className="relative py-20">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <h3 className="text-3xl font-semibold">We just develop</h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Community driven, developers paying it forward.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                          <i className="text-blueGray-400 fab fa-facebook text-lg leading-lg "></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          https://www.facebook.com/wejustdevelop
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                          <i className="text-blueGray-400 fab fa-github text-lg leading-lg "></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          https://github.com/wejustdevelop
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              <Image
                  className="w-full align-middle rounded-t-lg"
                  src={wejustdevelop}
                  alt="We just develop"
                  width={332}
                  height={332}
                  />
            </div>
          </div>
        </div>

        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">NodeSchool.io Mandaue</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
              https://nodeschool.io/mandaue/
            </p>
            <Image
              className="w-full align-middle rounded-t-lg"
              src={wejustdevelopteam}
              alt="We just develop"
              width={332}
              height={332}
              />
          </div>
        </div>
      </section>
    );
}