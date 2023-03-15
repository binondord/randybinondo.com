import CardSkillsCloud from "@/components/Cards/CardSkillsCloud.js";
import Profile from "@/components/Profile";

const RandyAndSkills = () => {
    return (
      <section className="pt-24 pb-40 relative bg-blueGray-100">
        <div className="container max-w-lg px-4 py-32 mx-auto mt-px text-left md:max-w-none md:text-center tails-relative">
          
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <Profile/>
            {/*<div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto">
              
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                <Image
                  className="w-full align-middle rounded-t-lg"
                  src={randy}
                  alt="Randy D. Binondo"
                  width={332}
                  height={332}
                  />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-blueGray-700 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Randy D. Binondo
                  </h4>
                  <p className="text-md font-light mt-2 mb-8 text-white">
                  coder. father. handyman.
                  </p>
                  <div className="block pb-6">
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Senior Software Engineer
                    </span>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Solutions Architect
                    </span>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Full Stack Developer
                    </span>
                  </div>
                </blockquote>
              </div>
    </div>*/}

            <div className="w-full md:w-6/12 px-4">
                <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl">
                  <span className="inline md:block">Welcome.</span>
              </h1>
              <div className="flex flex-wrap">
                <h1 className="text-4xl font-semibold leading-normal py-4">Tech stacks: </h1>
                <CardSkillsCloud/>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default RandyAndSkills;