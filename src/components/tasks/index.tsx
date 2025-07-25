import { Task } from "@/types";
import { z } from "zod";
import TaskComponent from "@/components/taskComponent";

type Props = {
  tasks: z.infer<typeof Task>[];
};

const Tasks: React.FC<Props> = ({ tasks }) => {
  return <div className="flex flex-col justify-center items-center">
    {tasks.map((task: z.infer<typeof Task>) => <TaskComponent key={task.id} task={task} />)}
  </div>
};

export default Tasks