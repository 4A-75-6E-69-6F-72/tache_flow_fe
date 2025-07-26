import { Task, TaskType } from "@/types/types";
import { z } from "zod";
import TaskComponent from "@/components/taskComponent";

type Props = {
  tasks: TaskType[];
};

const Tasks: React.FC<Props> = ({ tasks }) => {
  return <div className="flex flex-col justify-center items-center">
    {tasks.map((task: TaskType) => <TaskComponent key={task.id} task={task} />)}
  </div>
};

export default Tasks