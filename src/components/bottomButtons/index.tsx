import taskQuery from "@/queries/taskQuery";
import useFormStore from "@/stores";

const AddTaskButton = () => {
  const state = useFormStore((state) => state.currentState)
  const task = useFormStore((state) => state.currentTask)
  const updateState = useFormStore((state) => state.updateState)
  const updateCurrentTask = useFormStore((state) => state.updateCurrentTask)
  const currentFunction = useFormStore((state) => state.currentFunction)
  const deleteTask = taskQuery.deleteTask()
  const cancelForm = () => {
    updateState("list")
    updateCurrentTask(undefined)
  }
  const deleteForm = () => {
    deleteTask.mutate({ id: task?.id })
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
  const deleteButton = () => {
    return <div className="flex justify-center col-span-2">
      <button className="w-40 h-12 rounded-full border-solid border-2 border-[#FF0000] text-[#FF0000] cursor-pointer" onClick={deleteForm}>
        <p className="text-[#FF0000]">{"Supprimer"}</p>
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
  return <div className="absolute bottom-[2rem] gap-x-4 gap-y-4 grid grid-cols-2 justify-items-center">
    <div className={`flex justify-center ${state == "list" ? "col-span-2" : ""}`}>
      <button className="w-40 h-12 rounded-full bg-[#284A9A] text-[#FFFFFF] cursor-pointer" onClick={performCurrentStateAction}>
        {currentStateButtonText()}
      </button>
    </div>
    {state != "list" ? cancelButton() : <></>}
    {state == "edit" ? deleteButton() : <></>}
  </div>
}

export default AddTaskButton;