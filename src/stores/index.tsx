import { create } from "zustand";
import { z } from "zod";
import { PageState, Task, TaskType } from "@/types/types";

export type StoreState = {
  currentState: z.infer<typeof PageState>;
  currentTask?: TaskType;
  currentFunction?: () => void;
  updateState: (currentState: z.infer<typeof PageState>) => void;
  updateCurrentTask: (currentTask: TaskType | undefined) => void;
  updateCurrentFunction: (currentFunction: () => void | undefined) => void;
}

const useFormStore = create<StoreState>((set) => ({
  currentState: "list",
  currentTask: undefined,
  currentFunciton: undefined,
  updateState: (newState: z.infer<typeof PageState>) => set(() => ({ currentState: newState })),
  updateCurrentTask: (newState: TaskType | undefined) => set(() => ({ currentTask: newState })),
  updateCurrentFunction: (newState: () => void | undefined) => set(() => ({ currentFunction: newState }))
}));

export default useFormStore;