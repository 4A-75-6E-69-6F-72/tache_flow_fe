import AddTaskButton from "@/components/addTaskButton";
import Header from "@/components/header"
import Tasks from "@/components/tasks";
import Title from "@/components/title";

export default function Home() {
  return (
    <div className="bg-[#FAFAFA] w-full h-[100vh]">
      <div className="flex flex-col items-center justify-center p-5">
        <Header text="Logo" />
        <Title text="Liste des tâches" />
        <Tasks tasks={[
          {
            id: "ac4798e1-af2f-47ee-98b2-7a85ade4ad39",
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
        <AddTaskButton/>
      </div>
    </div>
  );
}
