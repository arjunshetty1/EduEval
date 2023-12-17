"use client";
import Wrapper from "@/Components/Wrapper";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <Wrapper>
      <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
        <Image
          src="/heroImage.jpg"
          className="absolute inset-0 h-full w-full object-cover object-center"
          width={100}
          height={100}
          unoptimized
        />

        {/* <!-- overlay - start --> */}
        <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply"></div>
        {/* <!-- overlay - end --> */}

        {/* <!-- text start --> */}
        <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
          <p className="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8">
            Very proud to introduce
          </p>
          <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
            Revolutionary way to evaluate answer scripts
          </h1>

          <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
            <Link
              href={"/Dashboard"}
              className="inline-block rounded-lg cursor-pointer bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
            >
              Start Now
            </Link>

            <a
              href="#"
              className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
            >
              How it Works
            </a>
          </div>
        </div>
        {/* <!-- text end --> */}
      </section>
    </Wrapper>
  );
};

export default page;
