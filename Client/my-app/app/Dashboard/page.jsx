"use client";
import { useState } from "react";
import axios from "axios";

const Page = () => {
  const [question, setquestion] = useState("");
  const [answerkey, setanswerkey] = useState("");
  const [file, setfile] = useState(null);
  const [res, setres] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("question", question);
      formData.append("answerkey", answerkey);
      formData.append("file", file);

      const response = await axios.post(
        "https://edu-eval.vercel.app/paperdata",
        // "http://localhost:3001/paperdata",

        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log(response.data);
      setres(response.data.Text);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Upload student paper
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Upload the question, answer key, and student's paper to evaluate.
          </p>
        </div>

        <form className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="question"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Question
            </label>
            <textarea
              id="question"
              value={question}
              onChange={(e) => setquestion(e.target.value)}
              placeholder="Type the question here"
              name="question"
              className="h-20 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            ></textarea>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="answerKey"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Answer Key
            </label>
            <textarea
              id="answerKey"
              value={answerkey}
              onChange={(e) => setanswerkey(e.target.value)}
              placeholder="Type the answer key here"
              name="answerKey"
              className="h-20 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            ></textarea>
          </div>

          <div className="grid gap-1.5">
            <label className="text-sm" htmlFor="file">
              Student's Paper
            </label>
            <input
              onChange={(e) => setfile(e.target.files[0])}
              id="file"
              type="file"
              accept=".jpg, .jpeg, .png, .pdf"
            />
          </div>

          <div className="flex items-center justify-between sm:col-span-2">
            <button
              onClick={handleSubmit}
              type="submit"
              className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
            >
              Send
            </button>

            <h2>{res}</h2>
            <span className="text-sm text-gray-500">*Required</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
