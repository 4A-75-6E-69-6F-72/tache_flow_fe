import useFormStore, { StoreState } from "@/stores";
import { z } from "zod";

const AddTaskButton = () => {
  const state = useFormStore((state) => state.currentState)
  const updateState = useFormStore((state) => state.updateState)

  const currentStateButtonText = () : string => {
    switch (state) {
      case "list":
        return "Ajouter"
      case "create":
        return "Enregistrer"
      case "edit":
        return "Modifier"
    }
  }

    const performCurrentStateAction = () => {
      switch (state) {
        case "list":
          updateState("create")
          break;
        case "create":
        case "edit":
          updateState("list")
          break;
      }
    };
    return <div className="absolute bottom-[2rem] w-full">
      <div className="flex justify-center">
        <button className="w-40 h-12 rounded-full bg-[#284A9A] text-[#FFFFFF] cursor-pointer" onClick={performCurrentStateAction}>
          {currentStateButtonText()}
        </button>
      </div>
    </div>
  }

  export default AddTaskButton;