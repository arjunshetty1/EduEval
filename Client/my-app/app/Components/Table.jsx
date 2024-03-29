const Table = ({ data }) => {
  const score = data?.FlaskServerResponse?.similarity_scores;
  const StudentUsn = data?.FlaskServerResponse?.usn;

  return (
    <>
      <div className="flex  items-center justify-center  from-purple-200 via-purple-300 to-purple-500 bg-gradient-to-br">
        <div className="flex items-center justify-center ">
          <div className="overflow-x-auto py-28 relative shadow-md sm:rounded-lg">
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
              <h1 className="font-semibold mb-10 ml-2 uppercase">
                Student USN: {StudentUsn}
              </h1>
              <table className="w-[70rem]  text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      Question Number
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Maximum Marks
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Scored Marks
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">1a</td>
                    <td className="py-4 px-6">9</td>
                    <td className="py-4 px-6">{score ? score?.["1"] : 0}</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">1b</td>
                    <td className="py-4 px-6">8</td>
                    <td className="py-4 px-6">{score ? score?.["2"] : 0}</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">2a</td>
                    <td className="py-4 px-6">9</td>
                    <td className="py-4 px-6">{score ? score?.["3"] : 0}</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">2b</td>
                    <td className="py-4 px-6">8</td>
                    <td className="py-4 px-6">{score ? score?.["4"] : 0}</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">3a</td>
                    <td className="py-4 px-6">8</td>
                    <td className="py-4 px-6">{score ? score?.["5"] : 0}</td>
                  </tr>

                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">3b</td>
                    <td className="py-4 px-6">8</td>
                    <td className="py-4 px-6">{score ? score?.["6"] : 0}</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">4a</td>
                    <td className="py-4 px-6">8</td>
                    <td className="py-4 px-6">{score ? score?.["7"] : 0}</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">4b</td>
                    <td className="py-4 px-6">8</td>
                    <td className="py-4 px-6">{score ? score?.["8"] : 0}</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">5a</td>
                    <td className="py-4 px-6">9</td>
                    <td className="py-4 px-6">{score ? score?.["9"] : 0}</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">5b</td>
                    <td className="py-4 px-6">8</td>
                    <td className="py-4 px-6">{score ? score?.["10"] : 0}</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">6a</td>
                    <td className="py-4 px-6">9</td>
                    <td className="py-4 px-6">{score ? score?.["11"] : 0}</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <td className="py-4 px-6">6b</td>
                    <td className="py-4 px-6">8</td>
                    <td className="py-4 px-6">{score ? score?.["12"] : 0}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
