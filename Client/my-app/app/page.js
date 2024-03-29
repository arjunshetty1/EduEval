"use server";
const page = () => {
  return (
    <>
      <div id="home">
        <div class="bg-white pb-6 sm:pb-8 lg:pb-12">
          <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
            <header class="mb-8 flex items-center justify-between py-4 md:mb-12 md:py-8 xl:mb-16">
              <a
                href="/"
                class="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
                aria-label="logo"
              >
                <svg
                  width="95"
                  height="94"
                  viewBox="0 0 95 94"
                  class="h-auto w-6 text-indigo-500"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                </svg>
                EduEval
              </a>

              <nav class="hidden gap-12 lg:flex">
                <a href="#" class="text-lg font-semibold text-indigo-500">
                  Home
                </a>
                <a
                  href="#features"
                  class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
                >
                  Features
                </a>
                <a
                  href="#about"
                  class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
                >
                  About us
                </a>
                <a
                  href="#know"
                  class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
                >
                  Know more
                </a>
              </nav>

              <a
                href="#"
                class="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block"
              >
                Sign Up
              </a>

              <button
                type="button"
                class="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
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

            <section class="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
              <div class="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
                <p class="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">
                  EduEval
                </p>

                <h1 class="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
                  Revolutionizing the future of education.
                </h1>

                <p class="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
                  Where technology meets education. We specialize in automating
                  the grading process of academic papers, using cutting-edge
                  technologies . Our mission is to provide educators with
                  efficient, accurate, and unbiased grading solutions. Explore
                  our services and join us.{" "}
                </p>

                <div class="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                  <a
                    href="#"
                    class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
                  >
                    Start now
                  </a>

                  <a
                    href="#"
                    class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                  >
                    Take tour
                  </a>
                </div>
              </div>

              <div class="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
                <img
                  src="/surface-DMVU0XqiT90-unsplash.jpg"
                  loading="lazy"
                  alt="Photo by Fakurian Design"
                  class="h-full  w-full object-cover object-center"
                />
              </div>
            </section>
          </div>
        </div>
      </div>

      <div id="about">
        <div class="bg-white py-6 sm:py-8 lg:py-12">
          <div class="mx-auto max-w-screen-xl px-4 md:px-8">
            <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
              <div>
                <div class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                  <img
                    src="/wr2.jpg"
                    loading="lazy"
                    alt="Photo by Martin Sanchez"
                    class="h-full w-full object-cover object-center"
                  />
                </div>
              </div>

              <div class="md:pt-8">
                <p class="text-center font-bold text-indigo-500 md:text-left">
                  Who we are
                </p>

                <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                  What We Offer
                </h1>

                <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                  <span class="text-gray-700 text-lg">
                    {" "}
                    Automated Grading System:{" "}
                  </span>{" "}
                  Our automated grading system utilizes state-of-the-art NLP and
                  Google cloud vision API technologies to convert scanned answer
                  sheets into machine-readable text. Through sophisticated
                  algorithms, we compare student responses with model answers,
                  providing accurate and timely feedback.
                  <span class="text-gray-700 text-lg">
                    Objective Assessment:
                  </span>{" "}
                  By removing human biases and subjective judgments, our system
                  promotes fairness and objectivity in the grading process.
                  Every student receives an impartial evaluation based on the
                  merits of their responses.
                </p>

                <h2 class="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">
                  About us
                </h2>

                <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
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

      <div id="features">
        <div class="bg-white py-6 sm:py-8 lg:py-12">
          <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div class="mb-10 md:mb-16">
              <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                Features
              </h2>

              <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                "Our system efficiently evaluates academic papers with NLP and
                Google cloud vision API technologies, providing fair and
                accurate grading. Customizable for educators, it offers
                immediate feedback to students and is backed by comprehensive
                support."
              </p>
            </div>

            <div class="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
              <div class="flex divide-x rounded-lg border bg-gray-50">
                <div class="flex items-center p-2 text-indigo-500 md:p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 md:h-8 md:w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <div class="p-4 md:p-6">
                  <h3 class="mb-2 text-lg font-semibold md:text-xl">
                    Automated Grading
                  </h3>
                  <p class="text-gray-500">
                    Utilize advanced NLP and OCR technologies to automatically
                    grade academic papers, reducing the time and effort required
                    for manual evaluation.
                  </p>
                </div>
              </div>

              <div class="flex divide-x rounded-lg border bg-gray-50">
                <div class="flex items-center p-2 text-indigo-500 md:p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 md:h-8 md:w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <div class="p-4 md:p-6">
                  <h3 class="mb-2 text-lg font-semibold md:text-xl">
                    Efficiency
                  </h3>
                  <p class="text-gray-500">
                    Streamline the grading process with rapid turnaround times,
                    allowing educators to focus on teaching and other
                    responsibilities.
                  </p>
                </div>
              </div>

              <div class="flex divide-x rounded-lg border bg-gray-50">
                <div class="flex items-center p-2 text-indigo-500 md:p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 md:h-8 md:w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <div class="p-4 md:p-6">
                  <h3 class="mb-2 text-lg font-semibold md:text-xl">
                    Accuracy
                  </h3>
                  <p class="text-gray-500">
                    {" "}
                    Ensure precise evaluation of student responses with
                    sophisticated algorithms that analyze text similarity and
                    content relevance.
                  </p>
                </div>
              </div>

              <div class="flex divide-x rounded-lg border bg-gray-50">
                <div class="flex items-center p-2 text-indigo-500 md:p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 md:h-8 md:w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <div class="p-4 md:p-6">
                  <h3 class="mb-2 text-lg font-semibold md:text-xl">
                    Fairness
                  </h3>
                  <p class="text-gray-500">
                    Provide all students with equal opportunities by delivering
                    impartial assessments based solely on the merits of their
                    responses.
                  </p>
                </div>
              </div>

              <div class="flex divide-x rounded-lg border bg-gray-50">
                <div class="flex items-center p-2 text-indigo-500 md:p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 md:h-8 md:w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <div class="p-4 md:p-6">
                  <h3 class="mb-2 text-lg font-semibold md:text-xl">
                    Timely Feedback
                  </h3>
                  <p class="text-gray-500">
                    Offer students immediate feedback on their academic work,
                    enabling them to identify areas for improvement and track
                    their progress.
                  </p>
                </div>
              </div>

              <div class="flex divide-x rounded-lg border bg-gray-50">
                <div class="flex items-center p-2 text-indigo-500 md:p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 md:h-8 md:w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <div class="p-4 md:p-6">
                  <h3 class="mb-2 text-lg font-semibold md:text-xl">
                    Scalability
                  </h3>
                  <p class="text-gray-500">
                    Scale the grading system to accommodate varying volumes of
                    academic papers, from small classroom assignments to
                    large-scale assessments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="know">
        <div class="bg-white py-6 sm:py-8 lg:py-12">
          <div class="mx-auto max-w-screen-xl px-4 md:px-8">
            <div class="mb-10 md:mb-16">
              <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                How it works
              </h2>
              <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                ""Our system converts scanned answer sheets into text, compares
                them with model answers using NLP, grades them automatically,
                and provides instant feedback to students.""
              </p>
            </div>

            <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8">
              <div class="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
                <a
                  href="#"
                  class="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48"
                >
                  <img
                    src="/.jpg"
                    loading="lazy"
                    alt="Photo by Minh Pham"
                    class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                </a>

                <div class="flex flex-col gap-2 p-4 lg:p-6">
                  <h2 class="text-xl font-bold text-gray-800">
                    <a
                      href="#"
                      class="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      to Text Conversion:
                    </a>
                  </h2>

                  <p class="text-gray-500">
                    Scanned answer sheets are processed using Google Cloud
                    Vision API to extract text accurately from s.
                  </p>

                  <div></div>
                </div>
              </div>

              <div class="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
                <a
                  href="#"
                  class="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48"
                >
                  <img
                    src="/tex.jpg"
                    loading="lazy"
                    alt="Photo by Magicle"
                    class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                </a>

                <div class="flex flex-col gap-2 p-4 lg:p-6">
                  <h2 class="text-xl font-bold text-gray-800">
                    <a
                      href="#"
                      class="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Text Processing and Comparison:
                    </a>
                  </h2>

                  <p class="text-gray-500">
                    The extracted text is preprocessed and compared with model
                    answers using advanced NLP techniques such as cosine
                    similarity, Jaccard similarity, and synonym analysis.
                  </p>
                </div>
              </div>

              <div class="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
                <a
                  href="#"
                  class="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48"
                >
                  <img
                    src="/com.jpg"
                    loading="lazy"
                    alt="Photo by Magicle"
                    class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                </a>

                <div class="flex flex-col gap-2 p-4 lg:p-6">
                  <h2 class="text-xl font-bold text-gray-800">
                    <a
                      href="#"
                      class="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Grading Algorithm:
                    </a>
                  </h2>

                  <p class="text-gray-500">
                    Based on the similarity scores obtained from the comparison,
                    a grading algorithm determines the grade for each student
                    response. The algorithm may assign scores automatically
                    according to predefined criteria, ensuring consistency and
                    fairness in evaluation.
                  </p>
                </div>
              </div>

              <div class="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
                <a
                  href="#"
                  class="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48"
                >
                  <img
                    src="/marks.jpg"
                    loading="lazy"
                    alt="Photo by Martin Sanchez"
                    class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                </a>

                <div class="flex flex-col gap-2 p-4 lg:p-6">
                  <h2 class="text-xl font-bold text-gray-800">
                    <a
                      href="#"
                      class="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Feedback Delivery:{" "}
                    </a>
                  </h2>

                  <p class="text-gray-500">
                    Once grading is complete, students receive immediate
                    feedback on their academic work. This feedback is visible in
                    excel sheet which contains scores, empowering students to
                    enhance their learning and academic performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          <div class="mb-10 md:mb-16">
            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Frequently asked questions
            </h2>
          </div>

          <div class="grid gap-4 sm:grid-cols-2 md:gap-8">
            <div class="rounded-lg bg-gray-100 p-5">
              <div class="mb-4 flex items-center justify-between gap-4 border-b pb-4">
                <h3 class="font-semibold text-indigo-500 sm:text-lg md:text-xl">
                  What is Automated Grading Solutions?
                </h3>

                <span class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </div>

              <p class="text-gray-500">
                Automated Grading Solutions is a technology-driven platform that
                automates the grading process of academic papers using advanced
                Natural Language Processing (NLP) and Optical Character
                Recognition (OCR) technologies.
              </p>
            </div>

            <div class="rounded-lg bg-gray-100 p-5">
              <div class="mb-4 flex items-center justify-between gap-4 border-b pb-4">
                <h3 class="font-semibold text-indigo-500 sm:text-lg md:text-xl">
                  How does automated grading work?
                </h3>

                <span class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </div>

              <p class="text-gray-500">
                Automated grading works by converting scanned answer sheets into
                machine-readable text, comparing them with model answers using
                NLP techniques, grading them based on predefined criteria, and
                providing instant feedback to students.
              </p>
            </div>

            <div class="rounded-lg bg-gray-100 p-5">
              <div class="mb-4 flex items-center justify-between gap-4 border-b pb-4">
                <h3 class="font-semibold text-indigo-500 sm:text-lg md:text-xl">
                  How quickly can students receive feedback on their work?
                </h3>

                <span class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </div>

              <p class="text-gray-500">
                Students receive immediate feedback on their academic papers,
                enabling them to track their progress and identify areas for
                improvement in real-time.
              </p>
            </div>

            <div class="rounded-lg bg-gray-100 p-5">
              <div class="mb-4 flex items-center justify-between gap-4 border-b pb-4">
                <h3 class="font-semibold text-indigo-500 sm:text-lg md:text-xl">
                  How can I get started with Automated Grading Solutions?
                </h3>

                <span class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </div>

              <p class="text-gray-500">
                Getting started with Automated Grading Solutions is easy! Simply
                contact us to learn more about our services and how we can
                tailor them to meet your institution's needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div class="flex flex-col items-center rounded-lg bg-gray-100 p-4 sm:p-8">
            <div class="mb-4 sm:mb-8">
              <h2 class="text-center text-xl font-bold text-indigo-500 sm:text-2xl lg:text-3xl">
                Get the latest updates
              </h2>
              <p class="text-center text-gray-500">Sign up </p>
            </div>

            <form class="mb-3 flex w-full max-w-md gap-2 sm:mb-5">
              <input
                placeholder="Email"
                class="bg-gray-white w-full flex-1 rounded border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />

              <button class="inline-block rounded bg-indigo-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                Send
              </button>
            </form>

            <p class="text-center text-xs text-gray-400">
              By signing up you agree to our{" "}
              <a
                href="#"
                class="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                Term of Service
              </a>{" "}
              and{" "}
              <a
                href="#"
                class="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <div class="bg-gray-900">
        <footer class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div class="mb-16 grid grid-cols-2 gap-12 pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
            <div class="col-span-full lg:col-span-2">
              <div class="mb-4 lg:-mt-2">
                <a
                  href="/"
                  class="inline-flex items-center gap-2 text-xl font-bold text-gray-100 md:text-2xl"
                  aria-label="logo"
                >
                  <svg
                    width="95"
                    height="94"
                    viewBox="0 0 95 94"
                    class="h-auto w-5 text-indigo-500"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                  </svg>
                  EduEval
                </a>
              </div>

              <p class="mb-6 text-gray-400 sm:pr-8">
                Revolutionizing the future of education.
              </p>

              <div class="flex gap-4">
                <a
                  href="#"
                  target="_blank"
                  class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  <svg
                    class="h-5 w-5"
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
                  class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  <svg
                    class="h-5 w-5"
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
                  class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  <svg
                    class="h-5 w-5"
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
                  class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  <svg
                    class="h-5 w-5"
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
              <div class="mb-4 font-bold uppercase tracking-widest text-gray-100">
                Home
              </div>

              <nav class="flex flex-col gap-4">
                <div>
                  <a
                    href="#know"
                    class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Overview
                  </a>
                </div>

                <div>
                  <a
                    href="#home"
                    class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Solutions
                  </a>
                </div>
              </nav>
            </div>

            <div>
              <div class="mb-4 font-bold uppercase tracking-widest text-gray-100">
                About us
              </div>

              <nav class="flex flex-col gap-4">
                <div>
                  <a
                    href="#about"
                    class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    About us
                  </a>
                </div>

                <div>
                  <a
                    href="#features"
                    class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Features
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Blog
                  </a>
                </div>
              </nav>
            </div>

            <div>
              <div class="mb-4 font-bold uppercase tracking-widest text-gray-100">
                Support
              </div>

              <nav class="flex flex-col gap-4">
                <div>
                  <a
                    href="#home"
                    class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Contact
                  </a>
                </div>

                <div>
                  <a
                    href="#home"
                    class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Documentation
                  </a>
                </div>
              </nav>
            </div>

            <div>
              <div class="mb-4 font-bold uppercase tracking-widest text-gray-100">
                Legal
              </div>

              <nav class="flex flex-col gap-4">
                <div>
                  <a
                    href="#home"
                    class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Terms of Service
                  </a>
                </div>

                <div>
                  <a
                    href="#home"
                    class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Privacy Policy
                  </a>
                </div>
              </nav>
            </div>
          </div>

          <div class="border-t border-gray-800 py-8 text-center text-sm text-gray-400">
            © 2024 - Edueval. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
};

export default page;
