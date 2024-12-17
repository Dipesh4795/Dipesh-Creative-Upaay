import { useDroppable } from "@dnd-kit/core";
import { TaskCard } from "./Taskcard";
import { IoIosAdd } from "react-icons/io";
// console.log("Home");
export function Column({
  column,
  tasks,
  addsubsection,
  setConfirmationModal,
  editdetails,
  handleAdd,
  deletesubsection,
  Filter,
}) {
  const { setNodeRef } = useDroppable({
    id: column.id,
  });

  return (
    <div className="flex  w-full md:w-[33%] mb-6 flex-col rounded-lg bg-[#F5F5F5] gap-3 p-4">
      <div
        className={`flex items-center w-full  ${
          column.id === "TODO" ? "justify-between" : "justify-start"
        }`}
      >
        <div className="flex justify-center items-center gap-3">
          <div
            className={`w-1 h-1 rounded-full ${`bg-${column.color}`} `}
          ></div>
          <p>{column.title}</p>
          <div className=" flex justify-center bg- items-center text-xs p-1 w-[20px] h-[20px] rounded-3xl bg-[#c0bfc3] ">
            {tasks.length}
          </div>
        </div>
        {column.id === "TODO" ? (
          <div>
            <IoIosAdd
              size={30}
              className="bg-blue-600 p-1 rounded-md cursor-pointer"
              onClick={() =>
                setConfirmationModal({
                  text1: "Add TO-DO Task",
                  name: null,
                  description: null,
                  priority: null,
                  onSumbit: handleAdd,
                })
              }
            />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className={`w-[96%] h-[2px] ${`bg-${column.color}`}`}></div>

      <div ref={setNodeRef} className="flex flex-1 flex-col gap-4">
        {Filter !== null
          ? tasks
              ?.filter((task) => task.priority === Filter)
              .map((task) => {
                return (
                  <TaskCard
                    key={task.id}
                    task={task}
                    addsubsection={addsubsection}
                    setConfirmationModal={setConfirmationModal}
                    editdetails={editdetails}
                    deletesubsection={deletesubsection}
                  />
                );
              })
          : tasks.map((task) => {
              return (
                <TaskCard
                  key={task.id}
                  task={task}
                  addsubsection={addsubsection}
                  setConfirmationModal={setConfirmationModal}
                  editdetails={editdetails}
                  deletesubsection={deletesubsection}
                />
              );
            })}
      </div>
    </div>
  );
}
