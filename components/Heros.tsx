import React from "react";

export default function Hero() {
  return (
    <div>
      <section
        id="herosection"
        className="text-center bg-[url(/connect.jpg)] lg:h-[40rem] md:h-[30rem] h-[20rem] bg-cover bg-center bg-no-repeat bg-fixed"
      >
        <div className="bg-custom-600/60 flex flex-col gap-10 justify-center lg:h-[40rem] md:h-[30rem] h-[20rem] bg-clip-padding backdrop-filter backdrop-blur-[2px] bg-opacity-20">
          <div className="max-sm:mb-6">
            <h2 className="font-bold lg:text-6xl md:text-3xl text-2xl text-white ">
              Bonkelinks Internet Solutions
            </h2>
            <h3 className="!italic font-medium lg:text-xl md:text-lg text-base text-white">
              “Seamless Internet, Infinite Possibilities.”
            </h3>
          </div>
          <div className="mx-auto gap-2 ">
            <p className="lg:text-xl md:text-lg text-sm text-wrap text-white lg:w-full md:w-full w-[70%] mx-auto">
              High-speed, secure internet solutions for your home and on-the-go
              connectivity. <br /> Experience a service designed to keep you
              connected in a modern world.
            </p>
            <div className="bg-custom-600 hover:bg-custom-400 mt-10 mx-auto text-center flex justify-center items-center rounded-lg w-[30%] shadow">
              <button
                type="button"
                className="text-white font-semibold px-3 py-2 lg:text-lg md:text-base text-sm"
              >
                Connect Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
