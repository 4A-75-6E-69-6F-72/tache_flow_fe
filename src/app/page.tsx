"use client"

import AddTaskButton from "@/components/bottomButtons";
import TaskForm from "@/components/taskForm";
import Tasks from "@/components/tasks";
import Title from "@/components/title";
import useFormStore from "@/stores";

export default function Home() {
  const state = useFormStore((state) => state.currentState)
  const updateState = useFormStore((state) => state.updateState)
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
        return <Tasks tasks={[
          {
            id: "ac4798e1-af2f-47ee-98b2-7a85ade4ad39",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            title: "Lorem Ipsum",
            status: "pending"
          },
          {
            id: "ac4798e1-af2f-47ee-98b2-7a85ade4ad40",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            title: "Lorem Ipsum",
            status: "pending"
          },
          {
            id: "ac4798e1-af2f-47ee-98b2-7a85ade4ad41",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            title: "Lorem Ipsum",
            status: "pending"
          },
          {
            id: "ac4798e1-af2f-47ee-98b2-7a85ade4ad42",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            title: "Lorem Ipsum",
            status: "pending"
          },
          {
            id: "ac4798e1-af2f-47ee-98b2-7a85ade4ad43",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            title: "Lorem Ipsum",
            status: "pending"
          },
          {
            id: "ac4798e1-af2f-47ee-98b2-7a85ade4ad29",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut .",
            title: "Lorem Ipsum",
            status: "done"
          }
        ]} />
    }
  }
  return (
    <div className="bg-[#FAFAFA] w-full h-[100vh] overflow-auto">
      <div className="flex flex-col items-center justify-center p-5">
        <Title text={title()} />
        <div className="pt-12 pb-16 w-full">
          {mainContent()}
        </div>
        <AddTaskButton />
      </div>
    </div>
  );
}
