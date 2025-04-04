import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black bg-[url('/sky.jpg')] bg-cover bg-center">
      <div className="flex flex-col justify-center items-center h-screen w-screen bg-black/[0.4]">
      <Image
      src={"/bonkelinks.svg"}
      alt=""
      width={150}
      height={150}
      />
        <p className="text-3xl text-white text-center">
          Our site is Under Construction
        </p>
        <p className="text-sm text-white font-medium">We will be live soon. Stay tuned</p>
      </div>
    </div>
  );
}
