import useFormStore, { StoreState } from "@/stores";
import { z } from "zod";

const AddTaskButton = () => {
  const state = useFormStore((state) => state.currentState)
  const updateState = useFormStore((state) => state.updateState)
  const updateCurrentTask = useFormStore((state) => state.updateCurrentTask)
  const currentFunction = useFormStore((state) => state.currentFunction)
  const cancelForm = () => {
    updateState("list")
    updateCurrentTask(undefined)
  }
  const cancelButton = () => {
    return <div className="flex justify-center">
      <button className="w-40 h-12 rounded-full border-solid border-2 border-[#284A9A] text-[#FFFFFF] cursor-pointer" onClick={cancelForm}>
        <p className="text-[#284A9A]">{"Annuler"}</p>
      </button>
    </div>
  }

  const currentStateButtonText = (): string => {
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
        if (currentFunction != undefined) {
          currentFunction()
        }
        break;
    }
  };
  return <div className="absolute bottom-[2rem] w-full flex flex-row items-center justify-center gap-x-4">
    <div className="flex justify-center">
      <button className="w-40 h-12 rounded-full bg-[#284A9A] text-[#FFFFFF] cursor-pointer" onClick={performCurrentStateAction}>
        {currentStateButtonText()}
      </button>
    </div>
    {state != "list" ? cancelButton() : <></>}
  </div>
}

export default AddTaskButton;