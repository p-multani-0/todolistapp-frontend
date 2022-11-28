import React, { useState } from "react";
import moment from "moment";
import { TrashIcon, PencilIcon } from "@heroicons/react/outline";
import DeleteModal from "./DeleteModal";
import TodoModal from "./TodoModal";

const TodoCard = ({ data, fetchTodos }) => {
  const {
    _id,
    title = "TITLE",
    description = "DESCRIPTION",
    deadline = new Date(),
    status = false,
  } = data;

  const [openTodoModal, setOpenTodoModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  return (
    <>
      <div
        className={`flex flex-wrap flex-row sm:flex-col p-5 m-6 bg-white rounded-md shadow-xl border-l-4 border-[#0DE6AC]`}
      >
        <div className="justify-center items-center">
          <div className="flex justify-between w-full">
            <div className="flex justify-center items-center">
              <div className="p-2 font-bold text-3xl break-all text-ellipsis overflow-hidden">{title}</div>
            </div>
            <div className="flex">
              <button
                className="p-3"
                onClick={() => setOpenTodoModal(!openTodoModal)}
              >
                <PencilIcon className="text-black w-5" />
              </button>
              <button
                className="p-3"
                onClick={() => setOpenDeleteModal(!openDeleteModal)}
              >
                <TrashIcon className="text-black w-5" />
              </button>
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col text-sm ml-3 py-1 text-black rounded-md`}
        >
          <p className="font-light">Status: {status}</p>
          <p className="font-light">
            Deadline: {moment(deadline).format("DD/MM/YYYY")}
          </p>
        </div>
        <p className="font-normal p-3 break-all text-ellipsis overflow-hidden">{description}</p>
      </div>
      <TodoModal
        openModal={openTodoModal}
        setOpenModal={setOpenTodoModal}
        modalTitle="Modify todo"
        todoId={_id}
        todo={data}
        mode="UPDATE"
        fetchTodos={fetchTodos}
      />
      <DeleteModal
        openModal={openDeleteModal}
        setOpenModal={setOpenDeleteModal}
        todoId={_id}
        fetchTodos={fetchTodos}
      />
    </>
  );
};

export default TodoCard;
