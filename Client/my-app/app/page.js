import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const Page = () => {
  return (
    <>
      <div id="home">
        <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <header className="mb-8 flex items-center justify-between py-4 md:mb-12 md:py-8 xl:mb-16">
              <a
                href="/"
                className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
                aria-label="logo"
              >
                <svg
                  width="95"
                  height="94"
                  viewBox="0 0 95 94"
                  className="h-auto w-6 text-indigo-500"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                </svg>
                EduEval
              </a>

              <nav className="hidden gap-12 lg:flex">
                <a href="#" className="text-lg font-semibold text-indigo-500">
                  Home
                </a>
                <a
                  href="#features"
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
                >
                  Features
                </a>
                <a
                  href="#about"
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
                >
                  About us
                </a>
                <a
                  href="#know"
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
                >
                  Know more
                </a>
              </nav>

              {/* <a
                href="#"
                className="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block"
              > */}
                 <UserButton />
              {/* </a> */}

              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                Menu
              </button>
            </header>

            <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
              <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
                <p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">
                  EduEval
                </p>

                <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
                  Revolutionizing the future of education.
                </h1>

                <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
                  Where technology meets education. We specialize in automating
                  the grading process of academic papers, using cutting-edge
                  technologies . Our mission is to provide educators with
                  efficient, accurate, and unbiased grading solutions. Explore
                  our services and join us.{" "}
                </p>

                <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                  <Link
                    href="/Dashboard"
                    className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
                  >
                    Start now
                  </Link>

                  {/* <a
                    href="#"
                    className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                  >
                    Take tour
                  </a> */}
                </div>
              </div>

              <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
                <img
                  src="/surface-DMVU0XqiT90-unsplash.jpg"
                  loading="lazy"
                  alt="Photo by Fakurian Design"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
      <div id="about">
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-xl px-4 md:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              <div>
                <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                  <img
                    src="/wr2.jpg"
                    loading="lazy"
                    alt="Photo by Martin Sanchez"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>

              <div className="md:pt-8">
                <p className="text-center font-bold text-indigo-500 md:text-left">
                  Who we are
                </p>

                <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                  What We Offer
                </h1>

                <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                  <span className="text-gray-700 text-lg">
                    {" "}
                    Automated Grading System:{" "}
                  </span>{" "}
                  Our automated grading system utilizes state-of-the-art NLP and
                  Google cloud vision API technologies to convert scanned answer
                  sheets into machine-readable text. Through sophisticated
                  algorithms, we compare student responses with model answers,
                  providing accurate and timely feedback.
                  <span className="text-gray-700 text-lg">
                    Objective Assessment:
                  </span>{" "}
                  By removing human biases and subjective judgments, our system
                  promotes fairness and objectivity in the grading process.
                  Every student receives an impartial evaluation based on the
                  merits of their responses.
                </p>

                <h2 className="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">
                  About us
                </h2>

                <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                  At Automated Grading Solutions, we are dedicated to
                  revolutionizing the way academic papers are evaluated. With a
                  focus on efficiency, objectivity, and fairness, we leverage
                  cutting-edge technologies such as Natural Language Processing
                  (NLP) and Google cloud vision API to automate the grading
                  process, liberating educators from the constraints of manual
                  evaluation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden bg-gray-900 pt-16 pb-32 space-y-24">
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
              <div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-white">
                    Google Cloud Vision API
                  </h2>
                  <p className="mt-4 text-lg text-gray-300">
                    The Cloud Vision API, offered by Google Cloud Platform,
                    allows developers to integrate advanced analysis features
                    into their applications. It enables tasks such as text
                    recognition, object detection, and facial recognition,
                    making processing easier and more powerful.
                  </p>
                  <div className="mt-6">
                    <a
                      className="inline-flex rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-900 hover:ring-in-700digo"
                      href="/login"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img
                  loading="lazy"
                  width="647"
                  height="486"
                  className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  style={{ color: "transparent" }}
                  src="/cloud.jpg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
              <div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-white">
                    SpaCy
                  </h2>
                  <p className="mt-4 text-lg text-gray-300">
                    spaCy is a fast and efficient Python library for Natural
                    Language Processing (NLP). It offers pre-trained models and
                    tools for tasks like tokenization, part-of-speech tagging,
                    and named entity recognition, making it popular for various
                    NLP applications.
                  </p>
                  <div className="mt-6">
                    <a
                      className="inline-flex rounded-lg  px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 bg-indigo-600 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                      href="/login"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img
                  alt="Inbox user interface"
                  loading="lazy"
                  width="647"
                  height="486"
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  style={{ color: "transparent" }}
                  src="/nlyk.jpg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
              <div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-white">
                    NLTK
                  </h2>
                  <p className="mt-4 text-lg text-gray-300">
                    NLTK, short for Natural Language Toolkit, is a Python
                    library for working with human language data. It offers
                    tools for tasks like classNameification, tokenization,
                    tagging, and parsing, making it popular for text analysis
                    and processing.
                  </p>
                  <div className="mt-6">
                    <a
                      className="inline-flex rounded-lg  px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 bg-indigo-600 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                      href="/login"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img
                  loading="lazy"
                  width="646"
                  height="485"
                  className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  style={{ color: "transparent" }}
                  src="/spacy.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white pb-6">
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
          <div className="container mx-auto px-6 p-6 bg-white">
            <div className="mb-16 text-center">
              <h4 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                Features
              </h4>
              <p
                id="features"
                className="mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900"
              >
                How we change the game
              </p>
            </div>

            <div className="flex flex-wrap my-12">
              <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
                <div className="flex items-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="h-6 w-6 text-indigo-500"
                  >
                    <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                  </svg>
                  <div className="ml-4 text-xl">Automated Grading</div>
                </div>
                <p className="leading-loose text-gray-500">
                  Utilize advanced NLP and OCR technologies to automatically
                  grade academic papers, reducing the time and effort required
                  for manual evaluation.
                </p>
              </div>

              <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8">
                <div className="flex items-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="h-6 w-6 text-indigo-500"
                  >
                    <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                  </svg>
                  <div className="ml-4 text-xl">Efficiency</div>
                </div>
                <p className="leading-loose text-gray-500">
                  Streamline the grading process with rapid turnaround times,
                  allowing educators to focus on teaching and other
                  responsibilities.
                </p>
              </div>

              <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8">
                <div className="flex items-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="h-6 w-6 text-indigo-500"
                  >
                    <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                  </svg>
                  <div className="ml-4 text-xl">Accuracy</div>
                </div>
                <p className="leading-loose text-gray-500">
                  Ensure precise evaluation of student responses with
                  sophisticated algorithms that analyze text similarity and
                  content relevance.
                </p>
              </div>

              <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8">
                <div className="flex items-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="h-6 w-6 text-indigo-500"
                  >
                    <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                  </svg>
                  <div className="ml-4 text-xl">Fairness</div>
                </div>
                <p className="leading-loose text-gray-500">
                  Provide all students with equal opportunities by delivering
                  impartial assessments based solely on the merits of their
                  responses.
                </p>
              </div>

              <div className="w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8">
                <div className="flex items-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="h-6 w-6 text-indigo-500"
                  >
                    <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                  </svg>
                  <div className="ml-4 text-xl">Timely Feedback</div>
                </div>
                <p className="leading-loose text-gray-500">
                  Offer students immediate feedback on their academic work,
                  enabling them to identify areas for improvement and track
                  their progress.
                </p>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 p-8">
                <div className="flex items-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="h-6 w-6 text-indigo-500"
                  >
                    <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                  </svg>
                  <div className="ml-4 text-xl">Scalability</div>
                </div>
                <p className="leading-loose text-gray-500">
                  Scale the grading system to accommodate varying volumes of
                  academic papers, from small classNameroom assignments to
                  large-scale assessments
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-700">
              How It Works
            </p>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Automate your grading process in 4 simple steps
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-normal text-gray-700 lg:text-xl lg:leading-8">
              Streamline your grading tasks with us and automate the process in
              just 4 easy steps
            </p>
          </div>
          <ul className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-5xl lg:grid-cols-4">
            <li className="flex-start group relative flex lg:flex-col">
              <span
                className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                aria-hidden="true"
              ></span>
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                <span className="text-gray-600 group-hover:text-white">1</span>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                  to Text Conversion
                </h3>
                <h4 className="mt-2 text-base text-gray-700">
                  {" "}
                  Scanned answer sheets are turned into machine-readable text
                  using OCR technology like Google Cloud Vision API, enabling
                  automated grading.
                </h4>
              </div>
            </li>
            <li className="flex-start group relative flex lg:flex-col">
              <span
                className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                aria-hidden="true"
              ></span>
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                <span className="text-gray-600 group-hover:text-white">2</span>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                  Text Comparison
                </h3>
                <h4 className="mt-2 text-base text-gray-700">
                  Student responses are compared with model answers using
                  advanced NLP techniques to analyze similarity based on
                  content, word choice, and structure.
                </h4>
              </div>
            </li>
            <li className="flex-start group relative flex lg:flex-col">
              <span
                className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                aria-hidden="true"
              ></span>
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                <span className="text-gray-600 group-hover:text-white">3</span>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                  Grading Algorithm
                </h3>
                <h4 className="mt-2 text-base text-gray-700">
                  Scores are assigned to responses based on comparison results
                  through automated grading algorithms, ensuring fairness and
                  consistency
                </h4>
              </div>
            </li>
            <li className="flex-start group relative flex lg:flex-col">
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                <span className="text-gray-600 group-hover:text-white">4</span>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                  Feedback Delivery
                </h3>
                <h4 className="mt-2 text-base text-gray-700">
                  Students promptly receive feedback on their work, including
                  scores and areas for improvement, empowering them to enhance
                  their learning and performance.
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <div className="py-24 px-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>
        <ul className="basis-1/2">
          <li>
            <button
              className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
              aria-expanded="false"
              onclick="toggleFAQ(this)"
            >
              <span className="flex-1 text-base-content">
                What is Automated Grading Solutions?
              </span>
              <svg
                className="flex-shrink-0 w-4 h-4 ml-auto fill-current"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className="transform origin-center transition duration-200 ease-out false"
                ></rect>
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className="transform origin-center rotate-90 transition duration-200 ease-out false"
                ></rect>
              </svg>
            </button>
            <div
              className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden"
              style={{ transition: "max-height 0.3s ease-in-out 0s" }}
            >
              <div className="pb-5 leading-relaxed">
                <div className="space-y-2 leading-relaxed">
                  Automated Grading Solutions is a technology-driven platform
                  that automates the grading process of academic papers using
                  advanced Natural Language Processing (NLP) and Google cloud
                  vision API technologies.
                </div>
              </div>
            </div>
          </li>
          <li>
            <button
              className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
              aria-expanded="false"
              onclick="toggleFAQ(this)"
            >
              <span className="flex-1 text-base-content">
                How does automated grading work?
              </span>
              <svg
                className="flex-shrink-0 w-4 h-4 ml-auto fill-current"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className="transform origin-center transition duration-200 ease-out false"
                ></rect>
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className="transform origin-center rotate-90 transition duration-200 ease-out false"
                ></rect>
              </svg>
            </button>
            <div
              className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden"
              style={{ transition: "max-height 0.3s ease-in-out 0s" }}
            >
              <div className="pb-5 leading-relaxed">
                <div className="space-y-2 leading-relaxed">
                  Automated grading works by converting scanned answer sheets
                  into machine-readable text, comparing them with model answers
                  using NLP techniques, grading them based on predefined
                  criteria, and providing instant feedback to students.
                </div>
              </div>
            </div>
          </li>
          <li>
            <button
              className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
              aria-expanded="false"
              onclick="toggleFAQ(this)"
            >
              <span className="flex-1 text-base-content">
                Is the grading system accurate?
              </span>
              <svg
                className="flex-shrink-0 w-4 h-4 ml-auto fill-current"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className="transform origin-center transition duration-200 ease-out false"
                ></rect>
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className="transform origin-center rotate-90 transition duration-200 ease-out false"
                ></rect>
              </svg>
            </button>
            <div
              className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden"
              style={{ transition: "max-height 0.3s ease-in-out 0s" }}
            >
              <div className="pb-5 leading-relaxed">
                <div className="space-y-2 leading-relaxed">
                  Yes, our grading system utilizes sophisticated algorithms to
                  ensure accurate evaluation of student responses. By analyzing
                  text similarity and content relevance, we provide reliable
                  grading results.
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      {/* <script>
  function toggleFAQ(button) {
      const content = button.nextElementSibling;
      button.setAttribute("aria-expanded", button.getAttribute("aria-expanded") === "false" ? "true" : "false");
      content.style.maxHeight = button.getAttribute("aria-expanded") === "true" ? content.scrollHeight + "px" : "0";
  }
</script> */}

      <div className="bg-gray-900">
        <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-16 grid grid-cols-2 gap-12 pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
            <div className="col-span-full lg:col-span-2">
              <div className="mb-4 lg:-mt-2">
                <a
                  href="/"
                  className="inline-flex items-center gap-2 text-xl font-bold text-gray-100 md:text-2xl"
                  aria-label="logo"
                >
                  <svg
                    width="95"
                    height="94"
                    viewBox="0 0 95 94"
                    className="h-auto w-5 text-indigo-500"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                  </svg>
                  EduEval
                </a>
              </div>

              <p className="mb-6 text-gray-400 sm:pr-8">
                Revolutionizing the future of education.
              </p>

              <div className="flex gap-4">
                <a
                  href="#"
                  target="_blank"
                  className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  <svg
                    className="h-5 w-5"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                <a
                  href="#"
                  target="_blank"
                  className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  <svg
                    className="h-5 w-5"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>

                <a
                  href="#"
                  target="_blank"
                  className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  <svg
                    className="h-5 w-5"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                <a
                  href="#"
                  target="_blank"
                  className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  <svg
                    className="h-5 w-5"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">
                Home
              </div>

              <nav className="flex flex-col gap-4">
                <div>
                  <a
                    href="#know"
                    className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Overview
                  </a>
                </div>

                <div>
                  <a
                    href="#home"
                    className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Solutions
                  </a>
                </div>
              </nav>
            </div>

            <div>
              <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">
                About us
              </div>

              <nav className="flex flex-col gap-4">
                <div>
                  <a
                    href="#about"
                    className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    About us
                  </a>
                </div>

                <div>
                  <a
                    href="#features"
                    className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Features
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Blog
                  </a>
                </div>
              </nav>
            </div>

            <div>
              <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">
                Support
              </div>

              <nav className="flex flex-col gap-4">
                <div>
                  <a
                    href="#home"
                    className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Contact
                  </a>
                </div>

                <div>
                  <a
                    href="#home"
                    className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Documentation
                  </a>
                </div>
              </nav>
            </div>

            <div>
              <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">
                Legal
              </div>

              <nav className="flex flex-col gap-4">
                <div>
                  <a
                    href="#home"
                    className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Terms of Service
                  </a>
                </div>

                <div>
                  <a
                    href="#home"
                    className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Privacy Policy
                  </a>
                </div>
              </nav>
            </div>
          </div>

          <div className="border-t border-gray-800 py-8 text-center text-sm text-gray-400">
            © 2024 - Edueval. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
};
export default Page;