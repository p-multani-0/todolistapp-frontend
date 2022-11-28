import React from "react";
import { deleteTodo } from "../../lib/api";

const DeleteModal = ({ openModal, setOpenModal, todoId, fetchTodos }) => {
  const removeTodo = async () => {
    try {
      await deleteTodo(todoId);
      setOpenModal(!openModal);
      fetchTodos();
    } catch (error) {
      console.log("Error while deleting todo: ", error);
    }
  };

  return (
    <>
      {openModal ? (
        <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
          <div className="bg-white px-16 py-14 rounded-md text-center">
            <h1 className="text-xl mb-4 font-bold text-slate-500">
              Do you Want Delete this todo
            </h1>
            <button
              className="bg-red-500 px-4 py-2 rounded-md text-md text-white"
              onClick={() => setOpenModal(!openModal)}
            >
              Cancel
            </button>
            <button
              className="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold"
              onClick={() => removeTodo()}
            >
              Yes
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DeleteModal;
