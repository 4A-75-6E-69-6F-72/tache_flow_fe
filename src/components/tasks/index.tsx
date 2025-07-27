import { Task, TaskType } from "@/types/types";
import { z } from "zod";
import TaskComponent from "@/components/taskComponent";

type Props = {
  tasks: TaskType[];
  refresh: () => void
};

const Tasks: React.FC<Props> = ({ tasks, refresh }) => {
  return <div className="flex flex-col justify-center items-center">
    {tasks.map((task: TaskType) => <TaskComponent key={task.id} task={task} refresh={refresh} />)}
  </div>
};

export default Tasks