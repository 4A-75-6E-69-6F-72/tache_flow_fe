"use client"

import { Task } from "@/types"
import { useState } from "react";
import { z } from "zod"

type Props = {
  task: z.infer<typeof Task>;
};

const TaskComponent: React.FC<Props> = ({ task }) => {
  return task.status == "pending" ?
    <div className="py-3 w-full flex justify-center cursor-pointer">
      <div className={"max-w-130 w-full flex flex-row items-center border-2 border-solid border-[#DDDDDD] p-5 rounded-xl gap-x-3 bg-[#FFFFFF] cursor-pointer"}>
        <div className="min-w-10 min-h-10 w-10 h-10 rounded-full border-2 border-solid border-[#DDDDDD] flex justify-center items-center">
          <div className="w-5 h-1 bg-[#DDDDDD]"></div>
        </div>
        <div className="flex flex-col">
          <p className={`font-bold text-[#0F172A] line-clamp-1 `}>{task.title}</p>
          <p className="text-[#888888] line-clamp-3">{task.description}</p>
        </div>
      </div>
    </div> :
    <div className="py-3 w-full flex justify-center">
      <div className={`max-w-130 w-full flex flex-row items-center border-2 border-solid border-[#284A9A]/90 p-5 rounded-xl gap-x-3 bg-[#EEF2FB] cursor-pointer`}>
        <div className="min-w-10 min-h-10 w-10 h-10 rounded-full border-2 border-solid border-[#284A9A] flex justify-center items-center overflow-hidden">
          <img className="min-w-12 min-h-12 text-red-500" src="/icons/done.svg" alt="" />
        </div>
        <div className="flex flex-col">
          <p className={`font-bold text-[#284A9A] line-clamp-1 `}>{task.title}</p>
          <p className="text-[#284A9A]/70 line-clamp-3">{task.description}</p>
        </div>
      </div>
    </div>

};

export default TaskComponent;