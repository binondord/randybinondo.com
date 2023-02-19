const SectionFour = () => {
    return (
      <section className="py-20 bg-blueGray-600 overflow-hidden">
      <div className="container mx-auto pb-64">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <i className="fas fa-code-branch text-xl"></i>
            </div>
            <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
              Open Source
            </h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
              Since{" "}
              <a
                href="https://tailwindcss.com/?ref=creative"
                className="text-blueGray-300"
                target="_blank"
              >
                Tailwind CSS
              </a>{" "}
              is an open source project we wanted to continue this movement
              too. You can give this version a try to feel the design and also
              test the quality of the code!
            </p>
            <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400">
              Get it free on Github and please help us spread the news with a
              Star!
            </p>
            <a
              href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index"
              target="_blank"
              className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
            >
              Github Star
            </a>
          </div>

          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
            <i className="fab fa-github text-blueGray-700 absolute text-55 -top-150-px -right-100 left-auto opacity-80"></i>
          </div>
        </div>
      </div>
    </section>
    );
}

export default SectionFour;