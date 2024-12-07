'use client'
import React from "react";

const QuizAttemptsPage: React.FC = () => {
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/your-endpoint");
        if (!response.ok) throw new Error("Network response was not ok");
        const result = await response.json();
      } catch (err) {
        // setError(err.message);
      } finally {
        // setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full p-8 drop-shadow h-fit min-h-full bg-white rounded-2xl flex flex-col gap-6">
      <h3 className="font-semibold text-lg">My Quiz Attempts</h3>
      <table className="table w-full table-auto rounded-md overflow-clip">
        <thead className="table-header-group bg-dodger-blue-300/40">
          <tr className="table-row font-bold">
            <th className="table-cell text-left px-3 py-2">Quiz</th>
            <th className="table-cell text-left px-3 py-2">Ques</th>
            <th className="table-cell text-left px-3 py-2">TM</th>
            <th className="table-cell text-left px-3 py-2">CA</th>
            <th className="table-cell text-left px-3 py-2">Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="table-cell text-left px-3 py-2">
              <div className="flex flex-col">
                <span className="text-[#5D5E62]">January 11, 2024</span>
              </div>
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </td>
            <td className="table-cell text-left px-3 py-2">4</td>
            <td className="table-cell text-left px-3 py-2">8</td>
            <td className="table-cell text-left px-3 py-2">4</td>
            <td className="table-cell px-3 py-2">
              <span className="text-center p-2 text-xs font-normal bg-green-400/10 text-green-500 rounded-md">
                Pass
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default QuizAttemptsPage;
