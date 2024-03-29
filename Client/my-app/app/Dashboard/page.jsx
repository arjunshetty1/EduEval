"use client";
import { useState } from "react";
import axios from "axios";
import Table from "../Components/Table";

const Page = () => {
  const [data, setdata] = useState(0);
  const [usn, setusn] = useState("");
  const [answerkey1, setanswerkey1] = useState("");
  const [file1, setfile1] = useState(null);
  const [res, setres] = useState("");

  const [answerkey2, setanswerkey2] = useState("");
  const [file2, setfile2] = useState(null);

  const [answerkey3, setanswerkey3] = useState("");
  const [file3, setfile3] = useState(null);

  const [answerkey4, setanswerkey4] = useState("");
  const [file4, setfile4] = useState(null);

  const [answerkey5, setanswerkey5] = useState("");
  const [file5, setfile5] = useState(null);

  const [answerkey6, setanswerkey6] = useState("");
  const [file6, setfile6] = useState(null);

  const [answerkey7, setanswerkey7] = useState("");
  const [file7, setfile7] = useState(null);

  const [answerkey8, setanswerkey8] = useState("");
  const [file8, setfile8] = useState(null);

  const [answerkey9, setanswerkey9] = useState("");
  const [file9, setfile9] = useState(null);

  const [answerkey10, setanswerkey10] = useState("");
  const [file10, setfile10] = useState(null);

  const [answerkey11, setanswerkey11] = useState("");
  const [file11, setfile11] = useState(null);

  const [answerkey12, setanswerkey12] = useState("");
  const [file12, setfile12] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("usn", usn);
      formData.append("answerkey1", answerkey1);
      formData.append("file1", file1);

      formData.append("answerkey2", answerkey2);
      formData.append("file2", file2);

      formData.append("answerkey3", answerkey3);
      formData.append("file3", file3);

      formData.append("answerkey4", answerkey4);
      formData.append("file4", file4);

      formData.append("answerkey5", answerkey5);
      formData.append("file5", file5);

      formData.append("answerkey6", answerkey6);
      formData.append("file6", file6);

      formData.append("answerkey7", answerkey7);
      formData.append("file7", file7);

      formData.append("answerkey8", answerkey8);
      formData.append("file8", file8);

      formData.append("answerkey9", answerkey9);
      formData.append("file9", file9);

      formData.append("answerkey10", answerkey10);
      formData.append("file10", file10);

      formData.append("answerkey11", answerkey11);
      formData.append("file11", file11);

      formData.append("answerkey12", answerkey12);
      formData.append("file12", file12);

      const response = await axios.post(
        // "https://edu-eval.vercel.app/paperdata",
        "http://localhost:3001/paperdata",

        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      // console.log(response.data.similarity_scores["1"]);
      // setres(response.data.Text);
      console.log(response.data);
      setdata(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
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
                htmlFor="answerKey"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Student USN
              </label>
              <input
                id="usn"
                value={usn}
                onChange={(e) => setusn(e.target.value)}
                placeholder="Enter the USN here"
                name="answerKey"
                className=" uppercase h-8 ml-10 w-50 rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              ></input>
            </div>
            <div className="input">
              <div className="sm:col-span-2">
                <label
                  htmlFor="answerKey"
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  Answer Key 1a
                </label>
                <textarea
                  id="answerKey1"
                  value={answerkey1}
                  onChange={(e) => setanswerkey1(e.target.value)}
                  placeholder="Type the answer key here"
                  name="answerKey"
                  className="h-20 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                ></textarea>
              </div>

              <div className="grid gap-1.5">
                <label className="text-sm" htmlFor="file">
                  Student's Paper 1a
                </label>
                <input
                  onChange={(e) => setfile1(e.target.files[0])}
                  id="file"
                  type="file"
                  accept=".jpg, .jpeg, .png, .pdf"
                />
              </div>
            </div>
            <div className="input">
              <div className="sm:col-span-2">
                <label
                  htmlFor="answerKey"
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  Answer Key 1b
                </label>
                <textarea
                  id="answerKey"
                  value={answerkey2}
                  onChange={(e) => setanswerkey2(e.target.value)}
                  placeholder="Type the answer key here"
                  name="answerKey"
                  className="h-20 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                ></textarea>
              </div>

              <div className="grid gap-1.5">
                <label className="text-sm" htmlFor="file">
                  Student's Paper 1b
                </label>
                <input
                  onChange={(e) => setfile2(e.target.files[0])}
                  id="file"
                  type="file"
                  accept=".jpg, .jpeg, .png, .pdf"
                />
              </div>
            </div>

            <div className="input">
              <div className="sm:col-span-2">
                <label
                  htmlFor="answerKey"
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  Answer Key 2a
                </label>
                <textarea
                  id="answerKey"
                  value={answerkey3}
                  onChange={(e) => setanswerkey3(e.target.value)}
                  placeholder="Type the answer key here"
                  name="answerKey"
                  className="h-20 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                ></textarea>
              </div>

              <div className="grid gap-1.5">
                <label className="text-sm" htmlFor="file">
                  Student's Paper 2a
                </label>
                <input
                  onChange={(e) => setfile3(e.target.files[0])}
                  id="file"
                  type="file"
                  accept=".jpg, .jpeg, .png, .pdf"
                />
              </div>
            </div>
            <div className="input">
              <div className="sm:col-span-2">
                <label
                  htmlFor="answerKey"
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  Answer Key 2b
                </label>
                <textarea
                  id="answerKey"
                  value={answerkey4}
                  onChange={(e) => setanswerkey4(e.target.value)}
                  placeholder="Type the answer key here"
                  name="answerKey"
                  className="h-20 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                ></textarea>
              </div>

              <div className="grid gap-1.5">
                <label className="text-sm" htmlFor="file">
                  Student's Paper 2b
                </label>
                <input
                  onChange={(e) => setfile4(e.target.files[0])}
                  id="file"
                  type="file"
                  accept=".jpg, .jpeg, .png, .pdf"
                />
              </div>
            </div>
            <div className="input">
              <div className="sm:col-span-2">
                <label
                  htmlFor="answerKey"
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  Answer Key 3a
                </label>
                <textarea
                  id="answerKey"
                  value={answerkey5}
                  onChange={(e) => setanswerkey5(e.target.value)}
                  placeholder="Type the answer key here"
                  name="answerKey"
                  className="h-20 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                ></textarea>
              </div>

              <div className="grid gap-1.5">
                <label className="text-sm" htmlFor="file">
                  Student's Paper 3a
                </label>
                <input
                  onChange={(e) => setfile5(e.target.files[0])}
                  id="file"
                  type="file"
                  accept=".jpg, .jpeg, .png, .pdf"
                />
              </div>
            </div>
            <div className="input">
              <div className="sm:col-span-2">
                <label
                  htmlFor="answerKey"
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  Answer Key 3b
                </label>
                <textarea
                  id="answerKey"
                  value={answerkey6}
                  onChange={(e) => setanswerkey6(e.target.value)}
                  placeholder="Type the answer key here"
                  name="answerKey"
                  className="h-20 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                ></textarea>
              </div>

              <div className="grid gap-1.5">
                <label className="text-sm" htmlFor="file">
                  Student's Paper 3b
                </label>
                <input
                  onChange={(e) => setfile6(e.target.files[0])}
                  id="file"
                  type="file"
                  accept=".jpg, .jpeg, .png, .pdf"
                />
              </div>
            </div>
            <div className="input">
              <div className="sm:col-span-2">
                <label
                  htmlFor="answerKey"
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  Answer Key 4a
                </label>
                <textarea
                  id="answerKey"
                  value={answerkey7}
                  onChange={(e) => setanswerkey7(e.target.value)}
                  placeholder="Type the answer key here"
                  name="answerKey"
                  className="h-20 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                ></textarea>
              </div>

              <div className="grid gap-1.5">
                <label className="text-sm" htmlFor="file">
                  Student's Paper 4a
                </label>
                <input
                  onChange={(e) => setfile7(e.target.files[0])}
                  id="file"
                  type="file"
                  accept=".jpg, .jpeg, .png, .pdf"
                />
              </div>
            </div>
            <div className="input">
              <div className="sm:col-span-2">
                <label
                  htmlFor="answerKey"
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  Answer Key 4b
                </label>
                <textarea
                  id="answerKey"
                  value={answerkey8}
                  onChange={(e) => setanswerkey8(e.target.value)}
                  placeholder="Type the answer key here"
                  name="answerKey"
                  className="h-20 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                ></textarea>
              </div>

              <div className="grid gap-1.5">
                <label className="text-sm" htmlFor="file">
                  Student's Paper 4b
                </label>
                <input
                  onChange={(e) => setfile8(e.target.files[0])}
                  id="file"
                  type="file"
                  accept=".jpg, .jpeg, .png, .pdf"
                />
              </div>
            </div>
            <div className="input">
              <div className="sm:col-span-2">
                <label
                  htmlFor="answerKey"
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  Answer Key 5a
                </label>
                <textarea
                  id="answerKey"
                  value={answerkey9}
                  onChange={(e) => setanswerkey9(e.target.value)}
                  placeholder="Type the answer key here"
                  name="answerKey"
                  className="h-20 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                ></textarea>
              </div>

              <div className="grid gap-1.5">
                <label className="text-sm" htmlFor="file">
                  Student's Paper 5a
                </label>
                <input
                  onChange={(e) => setfile9(e.target.files[0])}
                  id="file"
                  type="file"
                  accept=".jpg, .jpeg, .png, .pdf"
                />
              </div>
            </div>
            <div className="input">
              <div className="sm:col-span-2">
                <label
                  htmlFor="answerKey"
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  Answer Key 5b
                </label>
                <textarea
                  id="answerKey"
                  value={answerkey10}
                  onChange={(e) => setanswerkey10(e.target.value)}
                  placeholder="Type the answer key here"
                  name="answerKey"
                  className="h-20 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                ></textarea>
              </div>

              <div className="grid gap-1.5">
                <label className="text-sm" htmlFor="file">
                  Student's Paper 5b
                </label>
                <input
                  onChange={(e) => setfile10(e.target.files[0])}
                  id="file"
                  type="file"
                  accept=".jpg, .jpeg, .png, .pdf"
                />
              </div>
            </div>
            <div className="input">
              <div className="sm:col-span-2">
                <label
                  htmlFor="answerKey"
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  Answer Key 6a
                </label>
                <textarea
                  id="answerKey"
                  value={answerkey11}
                  onChange={(e) => setanswerkey11(e.target.value)}
                  placeholder="Type the answer key here"
                  name="answerKey"
                  className="h-20 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                ></textarea>
              </div>

              <div className="grid gap-1.5">
                <label className="text-sm" htmlFor="file">
                  Student's Paper 6a
                </label>
                <input
                  onChange={(e) => setfile11(e.target.files[0])}
                  id="file"
                  type="file"
                  accept=".jpg, .jpeg, .png, .pdf"
                />
              </div>
            </div>
            <div className="input">
              <div className="sm:col-span-2">
                <label
                  htmlFor="answerKey"
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  Answer Key 6b
                </label>
                <textarea
                  id="answerKey"
                  value={answerkey12}
                  onChange={(e) => setanswerkey12(e.target.value)}
                  placeholder="Type the answer key here"
                  name="answerKey"
                  className="h-20 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                ></textarea>
              </div>

              <div className="grid gap-1.5">
                <label className="text-sm" htmlFor="file">
                  Student's Paper 6b
                </label>
                <input
                  onChange={(e) => setfile12(e.target.files[0])}
                  id="file"
                  type="file"
                  accept=".jpg, .jpeg, .png, .pdf"
                />
              </div>
            </div>

            <div className="flex items-center justify-between sm:col-span-2">
              <button
                onClick={handleSubmit}
                type="submit"
                className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
              >
                Send
              </button>

              {/* <h2>{res}</h2> */}
              <span className="text-sm text-gray-500">*Required</span>
            </div>
          </form>
        </div>
      </div>
      <Table data={data} />
    </>
  );
};

export default Page;
