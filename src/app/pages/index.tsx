import { NextPage } from "next";
import Image from "next/image";

const HomePage: NextPage = () => {
  return (
    <div>
      <section
        id="herosection"
        className="text-center bg-[url(/connect.jpg)] lg:h-[40rem] md:h-[30rem] h-[20rem] bg-cover bg-center bg-no-repeat"
      >
        <div className="bg-custom-600/60 flex flex-col gap-10 justify-center lg:h-[40rem] md:h-[30rem] h-[20rem]  ">
          <div className="max-sm:mb-6">

          <h2 className="font-bold lg:text-6xl md:text-3xl text-2xl text-white ">Bonkelinks Internet Solutions</h2>
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
        <div className="bg-custom-500 hover:bg-custom-400 mt-3 mx-auto text-center flex justify-center items-center rounded-lg w-[30%]">
          <button type="button" className="text-white font-semibold px-3 py-2 lg:text-lg md:text-base text-sm">
            Connect Now
          </button>
        </div>
        </div>
      </div>
      </section>

      <section id="packages" className="mx-auto mt-5">
        <h2 className="font-bold text-2xl text-center">Our Packages</h2>
        <h3 className="font-semibold text-base text-center">Home Packages</h3>
        <div className="flex flex-row mx-auto justify-center flex-wrap gap-10 lg:mt-18 mt-10">
          <div
            id="basic pack"
            className="px-10 py-5 rounded-[16px] border shadow-xl border-neutral-100 bg-white text-black flex justify-between flex-col flex-wrap"
          >
            <div className="mb-5">
              <h2 className="text-center font-semibold">Basic Pack</h2>
              <h3 className="text-center font-medium">Kes 1,500/mo</h3>
              <ul className="flex flex-col justify-center gap-4 my-2">
                <li>
                  <p>5 Mpbs</p>
                </li>
                <li>
                  <p>Streaming upto SD</p>
                </li>
                <li>
                  <p>Smooth Browsing</p>
                </li>
                <li>
                  <p>Support multiple devices</p>
                </li>
                <li>
                  <p>24/7 customer support</p>
                </li>
                <li>
                  <p>KES 2,000 installation fee </p>
                </li>
              </ul>
            </div>
            <div className="bg-custom-600 hover:bg-custom-500  text-center flex justify-center items-center rounded-lg">
              <button
                type="button"
                className="text-white font-semibold px-3 py-2"
              >
                Get Connected
              </button>
            </div>
          </div>

          <div
            id="Standard Pack"
            className="px-10 py-5 rounded-[16px] border shadow-xl border-neutral-100 bg-white text-black flex justify-between flex-col"
          >
            <div>
              <h2 className="text-center font-semibold">Standard Pack</h2>
              <h3 className="text-center font-medium">Kes 2,000/mo</h3>
              <ul className="flex flex-col justify-center gap-4 my-2">
                <li>
                  <p>7 Mbps</p>
                </li>
                <li>
                  <p>Streaming upto SD</p>
                </li>
                <li>
                  <p>Fast Browsing</p>
                </li>
                <li>
                  <p>Fast Download</p>
                </li>
                <li>
                  <p>Support multiple devices</p>
                </li>
                <li>
                  <p>24/7 Customer support</p>
                </li>
                <li>
                  <p>KES 2,000 installation fee </p>
                </li>
              </ul>
            </div>
            <div className="bg-custom-600 hover:bg-custom-500  text-center flex justify-center items-center rounded-lg">
              <button
                type="button"
                className="text-white font-semibold px-3 py-2"
              >
                Get Connected
              </button>
            </div>
          </div>

          <div
            id="Preferred Pack"
            className="relative px-10 py-5 lg:mt-auto mt-8 rounded-[16px] border shadow-xl border-neutral-100 bg-white text-black flex justify-between flex-col"
          >
            <div>
              <h2 className="text-center font-semibold">Preferred Pack</h2>
              <h3 className="text-center font-medium">Kes 1,500/mo</h3>
              <ul className="flex flex-col justify-center gap-4 my-2">
                <li>
                  <p>15 Mbps</p>
                </li>
                <li>
                  <p>Streaming upto HD</p>
                </li>
                <li>
                  <p>Faster Browsing</p>
                </li>
                <li>
                  <p>Faster Downloads</p>
                </li>
                <li>
                  <p>Online Gaming</p>
                </li>
                <li>
                  <p>Support multiple devices</p>
                </li>
                <li>
                  <p>24/7 customer support</p>
                </li>
                <li>
                  <p>KES 2,000 installation fee </p>
                </li>
              </ul>
            </div>
            <div className="bg-custom-600 hover:bg-custom-500  text-center flex justify-center items-center rounded-lg">
              <button
                type="button"
                className="text-white font-semibold px-3 py-2"
              >
                Get Connected
              </button>
            </div>
            <div className="bg-custom-600 text-white px-1 pb-1 shadow-xl rounded-[20px] border border-neutral-100 w-[108%] h-[110%] absolute -z-1 -top-9 -left-2.5">
              <h2 className="text-center font-semibold text-sm py-2">
                🔥 Most Popular 🔥
              </h2>
            </div>
          </div>
          <div
            id="Ultra Pack"
            className="px-10 py-5 rounded-[16px] border shadow-xl border-neutral-100 bg-white text-black flex justify-between flex-col"
          >
            <div>
              <h2 className="text-center font-semibold">Ultra Pack</h2>
              <h3 className="text-center font-medium">Kes 1,500/mo</h3>

              <ul className="flex flex-col justify-center gap-4 my-2">
                <li>
                  <p>15 Mbps</p>
                </li>
                <li>
                  <p>Streaming upto 4k</p>
                </li>
                <li>
                  <p>Ultra Browsing</p>
                </li>
                <li>
                  <p>Multi threads Downloads</p>
                </li>
                <li>
                  <p>Online Gaming</p>
                </li>

                <li>
                  <p>Support multiple devices</p>
                </li>
                <li>
                  <p>24/7 customer support</p>
                </li>
                <li>
                  <p>KES 2,000 installation fee </p>
                </li>
              </ul>
            </div>
            <div className="bg-custom-600 hover:bg-custom-500  text-center flex justify-center items-center rounded-lg">
              <button
                type="button"
                className="text-white font-semibold px-3 py-2"
              >
                Get Connected
              </button>
            </div>
          </div>
        </div>

        <div id="Street Hotspot" className="mt-10">
          <h2 className="text-center font-bold text-xl">Street Hotspot </h2>
          <h3 className="text-center font-medium lg:text-base md:text-sm text-sm">
            Stay online wherever you are—quick, accessible internet bundles at
            street hotspots.
          </h3>
          <p className="text-center !italic text-sm">
            Fast activation, flexible bundles tailored to usage needs, and the
            same reliable support.
          </p>
          <img
            src={"/11180.jpg"}
            alt=""
            className="mx-auto rounded-[16px] lg:w-[900px] w-[350px] mt-3"
          />
        </div>
      </section>

      <section
        id="installation section"
        className="mx-auto flex flex-col flex-wrap place-content-center mt-5 mb-10"
      >
        <h2 className="text-center font-bold text-xl">Installation Process</h2>
        <h3 className="text-center font-medium !italic text-sm">
          Simple, Swift, Secure Installation
        </h3>

        <div className="flex flex-col justify-center mt-5">
          <h3 className="text-center font-bold mb-2">3 Easy steps</h3>
          <ul className="text-center flex flex-row flex-wrap gap-10">
            <li className="relative flex mx-auto rounded-[16px] shadow">
              <Image
                src="/step1.jpg"
                alt="step3"
                width={300}
                height={300}
                className="relative rounded-[16px] shadow"
              />
              <div className="flex flex-col justify-between rounded-b-[16px]">
                <h4 className="text-white py-2 bottom-0 absolute left-0 right-0 bg-custom-600/70 rounded-b-[16px]">
                  1. Quick Booking <br />
                  Book in 60 seconds call or via WhatsApp.
                </h4>
              </div>
            </li>
            <li className="relative flex mx-auto rounded-[16px] shadow">
              <Image
                src="/step2.jpg"
                alt="step3"
                width={300}
                height={300}
                className="relative rounded-[16px] shadow"
              />
              <div className="flex flex-col justify-between rounded-b-[16px]">
                <h4 className="text-white py-2 bottom-0 absolute left-0 right-0 bg-custom-600/70 rounded-b-[16px]">
                  2. Swift Setup <br />
                  Installation within 24 hours of booking.
                </h4>
              </div>
            </li>
            <li className="relative flex mx-auto rounded-[16px] shadow-md">
              <Image
                src="/step3.jpg"
                alt="step3"
                width={300}
                height={300}
                className="relative rounded-[16px] shadow"
              />
              <div className="flex flex-col justify-between rounded-b-[16px]">
                <h4 className="text-white py-2 bottom-0 absolute left-0 right-0 bg-custom-600/70 rounded-b-[16px]">
                  3. Start browsing <br />
                  Enjoy fast browsing
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
