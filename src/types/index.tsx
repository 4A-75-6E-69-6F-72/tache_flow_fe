import { z } from "zod"

export const strSchema = z.string();
export const funcSchema = z.function();
export const Task = z.object(
  {
    id: z.uuidv4(),
    title: z.string().max(300).min(10),
    description: z.string().max(1000).min(100),
    status: z.enum(["pending", "done"]),
  }
);

export const PageState = z.enum(["list","create","edit"]);