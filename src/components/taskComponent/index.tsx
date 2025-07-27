"use client"

import useFormStore from "@/stores";
import { TaskType } from "@/types/types"
import { MouseEvent, useEffect, useState } from "react";
import { ToggleButton } from "../toggleButton";
import taskQuery from "@/queries/taskQuery";

type Props = {
  task: TaskType;
  refresh: () => void
};

const TaskComponent: React.FC<Props> = ({ task, refresh }) => {
  const updateState = useFormStore((state) => state.updateState);
  const updateCurrentTask = useFormStore((state) => state.updateCurrentTask);
  const updateTask = taskQuery.updateTask();
  // const { refetch } = taskQuery.getTasks();
  const [buttonOn, setButtonOn] = useState(task.status == 'done');
  const handleClick = () => {
    updateCurrentTask(task)
    updateState("edit")
  };

  const handleToggle = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    event.stopPropagation()
    const updatedTask: TaskType = {
      id: task.id,
      description: task.description,
      title: task.title,
      status: task.status == "pending" ? "done" : "pending"
    }
    updateTask.mutate({ task: updatedTask, id: updatedTask.id })
    refresh()
  };

  useEffect(() => {
    setButtonOn(task.status == 'done')
  }, [task])
  return task.status == "pending" ?
    <div className="py-3 w-full flex justify-center">
      <div onClick={() => { handleClick() }} className={"max-w-130 w-full flex flex-row items-center border-2 border-solid border-[#DDDDDD] p-5 rounded-xl gap-x-3 bg-[#FFFFFF] cursor-pointer hover:border-[#BBBBBB] transition-colors duration-200"}>
        {ToggleButton({
          isActive: buttonOn,
          handleToggle,
          activeLabel: "Enabled",
          inactiveLabel: "Disabled"
        })}
        <div className="flex flex-col">
          <p className={`font-bold text-[#0F172A] line-clamp-1 `}>{task.title}</p>
          <p className="text-[#888888] line-clamp-2">{task.description}</p>
        </div>
      </div>
    </div> :
    <div className="py-3 w-full flex justify-center" onClick={() => { handleClick() }}>
      <div className={`max-w-130 w-full flex flex-row items-center border-2 border-solid border-[#284A9A]/50 p-5 rounded-xl gap-x-3 bg-[#EEF2FB] cursor-pointer hover:border-[#284A9A] transition-colors duration-300`}>
        {ToggleButton({
          isActive: buttonOn,
          handleToggle,
          activeLabel: "Enabled",
          inactiveLabel: "Disabled"
        })}
        <div className="flex flex-col">
          <div className="flex gap-x-2 w-full">
            <p className={`font-bold text-[#284A9A] line-clamp-1 `}>{task.title}</p>
            <p className={`font text-[#284A9A] text-[1rem] line-clamp-1`}>{"✔️"}</p>
          </div>
          <p className="text-[#284A9A]/70 line-clamp-2">{task.description}</p>
        </div>
      </div>
    </div>
};

export default TaskComponent;