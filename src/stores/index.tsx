import { create } from "zustand";
import { z } from "zod";
import { PageState, Task } from "@/types";

export type StoreState = {
  currentState: z.infer<typeof PageState>;
  currentTask?: z.infer<typeof Task>;
  updateState: (currentState: z.infer<typeof PageState>) => void;
  updateCurrentTask: (currentTask: z.infer<typeof Task> | undefined) => void;
}

const useFormStore = create<StoreState>((set) => ({
  currentState: "list",
  currentTask: undefined,
  updateState: (newState: z.infer<typeof PageState>) => set(() => ({ currentState: newState })),
  updateCurrentTask: (newState: z.infer<typeof Task> | undefined) => set(() => ({ currentTask: newState }))
}));

export default useFormStore;