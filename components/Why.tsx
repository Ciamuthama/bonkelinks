import Image from "next/image";
import React from "react";

export default function WCU() {
  return (
    <div className="bg-custom-600 lg:-top-10 relative w-[90%] mx-auto rounded shadow-xl text-white">
      <section>
        {/* <h2 className="font-semibold text-2xl text-center">Why Choose Us</h2> */}

        <ul className="flex lg:flex-row flex-col mx-auto justify-center gap-5 p-10 lg:divide-x-[2px] md:divide-x-0 max-sm:divide-y-[2px] divide-neutral-100">
          <li className="p-5">
            <Image
              src="./reliable.svg"
              width={25}
              height={50}
              alt=""
              className="mx-1"
            />
            <div>
              <h3 className="font-semibold text-[18px]">Reliability</h3>
              <p>Consistent, high-speed connections with zero downtime</p>
            </div>
          </li>
          <li className="p-5">
            <Image
              src="./innovation.svg"
              width={25}
              height={50}
              alt=""
              className="mx-1"
            />
            <div>
              <h3 className="font-semibold text-[18px]">Innovation</h3>
              <p>
                Embracing the latest technology to stay ahead of your evolving
                needs.
              </p>
            </div>
          </li>
          <li className="p-5">
            <Image
              src="./secure.svg"
              width={25}
              height={50}
              alt=""
              className="mx-1"
            />
            <div>
              {" "}
              <h3 className="font-semibold text-[18px]">Secure</h3>
              <p>Advanced protocols keep your data safe at all times.</p>
            </div>
          </li>
          <li className="p-5">
            <Image
              src="./customer.svg"
              width={25}
              height={50}
              alt=""
              className="mx-1"
            />
            <div>
              {" "}
              <h3 className="font-semibold text-[18px]">Customer Focus</h3>
              <p>
                Personalized, 24/7 support ensures you’re never left offline.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
