import { useDraggable } from "@dnd-kit/core";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosAdd } from "react-icons/io";
import { useState } from "react";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { LiaCommentSolid } from "react-icons/lia";
import { AiTwotoneDelete } from "react-icons/ai";
import { GrEdit } from "react-icons/gr";
import { LuFiles } from "react-icons/lu";
import image from "../assets/image.png";
export function TaskCard({
  task,
  addsubsection,
  setConfirmationModal,
  editdetails,
  deletesubsection,
}) {
  const [subsection, setSubsection] = useState("");
  const [isInputFocused, setInputFocused] = useState(false);

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
    disabled: isInputFocused,
    // disabled: (event) => {
    //   return event.target.closest("[data-drag-disabled]");
    // },
  });

  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;

  function handleClick(event) {
    event.stopPropagation();
    const id = task.id;
    console.log("here ", task.id, subsection);
    const data = { id: id, subsection: subsection };
    addsubsection(data);
    setSubsection("");
  }

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="cursor-grab rounded-lg bg-slate-50 hover:border-[2px] border-black p-4 flex flex-col   gap-2 justify-center items-start  shadow-sm hover:shadow-md "
      style={style}
    >
      <div className="flex w-full justify-between items-center">
        <div
          className={`rounded-md px-4 py-1 ${
            task.priority === "Low"
              ? "text-yellow-500 bg-yellow-200"
              : task.priority === "High"
              ? "text-red-500 bg-red-300"
              : "text-green-500 bg-green-300"
          }`}
        >
          {task.priority}
        </div>
        <BsThreeDotsVertical size={20} />
      </div>
      <div className="font-bold flex justify-start gap-2 items-center">
        <p>{task.title}</p>
        <div
          onPointerDown={(e) => e.stopPropagation()}
          onClick={() =>
            setConfirmationModal({
              text1: "Edit Your Task",
              id: task.id,
              name: task.title,
              description: task.description,
              priority: task.priority,
              onSumbit: editdetails,
            })
          }
        >
          <GrEdit
            size={20}
            className="hover:scale-95 cursor-pointer"
            onPointerDown={(e) => e.stopPropagation()}
          />
        </div>
      </div>
      <div className="font-light">{task.description}</div>
      <div className="flex  w-full justify-between items-center">
        <input
          type="text"
          placeholder="Add a Subtask"
          name="subsection"
          value={subsection}
          onChange={(event) => setSubsection(event.target.value)}
          onPointerDown={(e) => e.stopPropagation()}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
          // onKeyDown={(e) => {
          //   if (e.key === " ") e.stopPropagation();
          // }}
          className="bg-slate-300 placeholder:pl-2 p-1 pl-2 active:border-[2px] border-black placeholder:font-light placeholder:text-black w-[80%]  rounded-md"
        />

        <div
          onPointerDown={(e) => e.stopPropagation()}
          onClick={handleClick}
          className="hover:scale-90"
        >
          <IoIosAdd
            size={30}
            className="bg-blue-600 p-1 rounded-md cursor-pointer"
          />
        </div>
      </div>
      {task?.subtask?.length > 0 ? (
        <div className="flex flex-col justify-start items-start gap-2">
          {task.subtask?.map((item, index) => {
            return (
              <div
                key={index}
                className=" flex justify-center items-center gap-2"
              >
                <IoMdArrowDroprightCircle size={15} />
                <p className="text-sm font-light ">{item}</p>
                <AiTwotoneDelete
                  size={20}
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={() => deletesubsection({ id: task.id, index })}
                  className="hover:scale-90 cursor-pointer"
                />
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
      <div className="flex relative  w-full mt-3 justify-between items-center">
        <div className="flex   justify-center items-center ">
          <img
            src={image}
            alt="logo"
            className="w-[25px] absolute left-0 h-[25px] rounded-full"
          />
          <img
            src={image}
            alt="logo"
            className="w-[25px] absolute left-4 h-[25px] rounded-full"
          />
          <img
            src={image}
            alt="logo"
            className="w-[25px]  absolute left-8 h-[25px] rounded-full"
          />
        </div>
        <div className="flex w-full  gap-2 justify-end items-center">
          <div className="flex justify-center text-sm font-light items-center gap-1">
            <LiaCommentSolid size={15} />
            <p>10 Comments</p>
          </div>
          <div className="flex justify-center text-sm font-light  items-center gap-1">
            <LuFiles size={15} />
            <p>3 Files</p>
          </div>
        </div>
      </div>
    </div>
  );
}
