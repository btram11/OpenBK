"use client";
import * as React from "react";
import { useQuestions } from "@/hooks/useCourses";
import { QuestionEntity } from "@/domain/question.entity";
import { IoMdReturnLeft } from "react-icons/io";
import Link from "next/link";

export default function Page({ params }: { params: Promise<{ unitID: string }> }) {
  const [unitID, setUnitId] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchUnitId = async () => {
      const { unitID } = await params;
      setUnitId(unitID);
    };

    fetchUnitId();
  }, [params]);

  const { data: questionContents } = useQuestions(unitID as string);

  return (
    <main className="flex flex-col">
      <div className="pl-20 w-full h-[100vs] bg-blue-200 p-5">
        <div className="w-1/12">
          <Link href="/learner/dashboard" className="flex gap-3">
            <IoMdReturnLeft size={30} />
            Return
          </Link>
        </div>
      </div>
      <div className="flex gap-10">
        <div className="flex flex-col mt-10 pt-10 ml-20 gap-10 h-screen rounded-xl border border-solid border-black border-opacity-30 bg-white w-9/12 max-md:w-full">
          <div className="flex justify-center items-center">
            <h1 className="text-5xl font-bold">Unit Test</h1>
          </div>
          <div className="ml-20 mr-20">
            {questionContents?.map((questionContent: QuestionEntity) => (
              <div key={questionContent.questionID} className="flex flex-col gap-2 mt-5">
                <div>
                  <h1 className="font-bold">Question {questionContent.numericalOrder}: {questionContent.content} </h1>
                </div>

                <div className="flex gap-5 ml-10 items-center">
                  <div className="flex justify-center items-center rounded-full w-8 h-8 border border-solid border-black">
                    A
                  </div>
                  {questionContent.answerA}
                </div>
                <div className="flex gap-5 ml-10 items-center">
                  <div className="flex justify-center items-center rounded-full w-8 h-8 border border-solid border-black">
                    B
                  </div>
                  {questionContent.answerB}
                </div>
                <div className="flex gap-5 ml-10 items-center">
                  <div className="flex justify-center items-center rounded-full w-8 h-8 border border-solid border-black">
                    C
                  </div>
                  {questionContent.answerC}
                </div>
                <div className="flex gap-5 ml-10 items-center">
                  <div className="flex justify-center items-center rounded-full w-8 h-8 border border-solid border-black">
                    D
                  </div>
                  {questionContent.answerD}
                </div>
                <div>
                  <h1 className="font-bold text-sky-600">Correct Answer: <span className="text-black max-md:max-w-full">{questionContent.correctAnswer}</span></h1>
                  <h1 className="font-bold text-green-600">Explain: <span className="font-normal text-black max-md:max-w-full">{questionContent.explanation}</span></h1>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col p-10 gap-10 h-screen bg-white w-3/12 max-md:w-full">
          {questionContents?.map((questionContent: QuestionEntity) => (
            <div key={questionContent.numericalOrder} className="flex justify-center items-center rounded w-10 h-10 border border-solid border-black">
              <div>
                <h1 className="font-bold">{questionContent.numericalOrder}</h1>
              </div>
          </div>
          ))}
        </div>
      </div>
      
    </main>
  );
}
