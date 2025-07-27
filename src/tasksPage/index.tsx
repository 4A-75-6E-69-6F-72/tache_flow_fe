"use client"

import AddTaskButton from "@/components/bottomButtons";
import FullPageText from "@/components/fullPageText";
import TaskForm from "@/components/taskForm";
import Tasks from "@/components/tasks";
import Title from "@/components/title";
import taskQuery from "@/queries/taskQuery";
import useFormStore from "@/stores";
import { useEffect } from "react";

export default function TasksPage() {
  const state = useFormStore((state) => state.currentState)
  const { isPending, error, data, refetch } = taskQuery.getTasks()

  useEffect(() => {
    if (state == "list") {
      refetch()
    }
  }, [state])

  const title = () => {
    switch (state) {
      case "create":
        return "Créer une tâche";
      case "edit":
        return "Modifier la tâche"
      case "list":
        return "Liste des tâches"
    }
  }

  const mainContent = () => {
    switch (state) {
      case "create":
      case "edit":
        return <TaskForm />
      case "list":
        if (isPending) return <FullPageText text="Chargement..." />
        if (data && data.length > 0) return <Tasks tasks={data} refresh={() => { refetch() }} />
        if (data && data.length == 0) return <FullPageText text="Aucune tâche" />
        if (error) return <FullPageText text={error.message} />
    }
  }

  return (
    <div className="bg-[#FAFAFA] flex w-full h-[100vh] overflow-auto">
      <div className="flex flex-col flex-grow items-center justify-start p-5">
        <Title text={title()} />
        <div className="mt-22 mb-16 flex flex-grow w-full items-start justify-center">
          {mainContent()}
        </div>
        <AddTaskButton />
      </div>
    </div>
  );
}