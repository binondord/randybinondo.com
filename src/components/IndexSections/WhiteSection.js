import CardSkillsTable from "@/components/Cards/CardSkillsTable.js";
import TabbedContent from "./TabbedContent";

const WhiteSection = () => {
    return (
      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <h3 className="font-semibold text-3xl">
                Articles
              </h3>
              <div className="flex flex-wrap mt-4">
                <div className="w-full mb-12 px-4">
                  <TabbedContent/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default WhiteSection;