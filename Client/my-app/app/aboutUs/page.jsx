const page = () => {
  return (
    <>
      <div id="about">
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-xl px-4 md:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              <div>
                <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                  <img
                    src="/ai.jpg"
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
    </>
  );
};

export default page;
