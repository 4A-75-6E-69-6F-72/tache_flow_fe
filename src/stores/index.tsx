import { create } from "zustand";
import { z } from "zod";
import { PageState } from "@/types";

export type StoreState = {
  currentState: z.infer<typeof PageState>;
  updateState: (newState: z.infer<typeof PageState>) => void;
}

const useFormStore = create<StoreState>((set) => ({
  currentState: "list",
  updateState: (newState: z.infer<typeof PageState>) => set(() => ({ currentState: newState })),
}));

export default useFormStore;