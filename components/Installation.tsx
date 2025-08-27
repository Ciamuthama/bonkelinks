import Image from "next/image";


export default function Installation() {
  return (
    <div>
        <section
        id="installation section"
        className="mx-auto flex flex-col flex-wrap place-content-center mt-5 mb-10"
      >
        <h2 className="text-center font-bold text-[25px]">Installation Process</h2>
        <h3 className="text-center font-medium !italic text-sm">
          Simple, Swift, Secure Installation
        </h3>
        <div className="flex flex-col justify-center mt-2">
          <h3 className="text-center text-lg font-bold mb-2">3 Easy steps</h3>
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
                <h4 className="text-white py-2 bottom-0 absolute left-0 right-0 bg-custom-600/70 rounded-b-[16px] bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
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
                <h4 className="text-white py-2 bottom-0 absolute left-0 right-0 bg-custom-600/70 rounded-b-[16px] bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
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
                <h4 className="text-white py-2 bottom-0 absolute left-0 right-0 bg-custom-600/70 rounded-b-[16px] bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
                  3. Start browsing <br />
                  Enjoy fast browsing
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
