import { z } from "zod"

export const strSchema = z.string();
export const uuidv4Schema = z.uuidv4();
export const funcSchema = z.function();
export const TaskStatus = z.enum(["pending", "done"]);
export const RequestType = z.enum(["GET", "POST", "PATCH", "DELETE"]);
export const Task = z.object(
  {
    id: z.uuidv4(),
    title: z.string().max(300).min(10),
    description: z.string().max(1000).min(100),
    status: TaskStatus,
  }
);

export type TaskType = z.infer<typeof Task>;

export type ResponseType = {
  id?: string
  task?: TaskType
}

export const PageState = z.enum(["list", "create", "edit"]);