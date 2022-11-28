import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import ERRORS from "../../lib/modalValidation";
import { createTodo, updateTodo } from "../../lib/api";

const TodoModal = ({
  openModal,
  setOpenModal,
  modalTitle,
  todoId,
  todo,
  mode,
  fetchTodos,
}) => {
  const { register, handleSubmit, reset } = useForm();

  const newTodo = async (data, id) => {
    await createTodo(data);
  };

  const modifyTodo = async (data, id) => {
    await updateTodo(data, id);
  };

  const setTodo = async () => {
    reset({
      title: todo.title,
      description: todo.description,
      status: todo.status,
      deadline: todo.deadline,
    });
  };

  useEffect(() => {
    setTodo();
  }, []);

  const onSubmit = async (data) => {
    if (mode === "CREATE") {
      newTodo(data);
    } else if (mode === "UPDATE") {
      modifyTodo(data, todoId);
    }
    setOpenModal(!openModal);
    fetchTodos();
    reset();
  };

  return (
    <>
      {openModal ? (
        <div className="fixed inset-0 backdrop-blur	flex justify-center h-screen items-center">
          <div className="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
            <div className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
              <p className="font-semibold text-black">{modalTitle}</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col px-6 py-5 bg-gray-50">
                <p className="mb-2 font-semibold text-black">Title</p>
                <input
                  type="text"
                  placeholder="Insert a title..."
                  className="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm"
                  {...register("title", { ...ERRORS.title })}
                />
                <p className="mb-2 font-semibold text-black">Description</p>
                <textarea
                  type="text"
                  placeholder="Type a description..."
                  className="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm h-36"
                  {...register("description", { ...ERRORS.description })}
                />
                <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
                  <div className="w-full sm:w-1/2">
                    <p className="mb-2 font-semibold text-black">Status</p>
                    <select
                      type="text"
                      className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                      {...register("status", { ...ERRORS.required })}
                    >
                      <option value="SCHEDULED">Scheduled</option>
                      <option value="DOING">Doing</option>
                      <option value="DONE">Done</option>
                    </select>
                  </div>
                  <div className="w-full sm:w-1/2">
                    <p className="mb-2 font-semibold text-black">Deadline</p>
                    <input
                      type="date"
                      className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                      {...register("deadline", { ...ERRORS.required })}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
                <button
                  className="px-4 py-2 text-white font-semibold bg-[#ca6666] rounded"
                  onClick={() => setOpenModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 text-white font-semibold bg-[#0DE6AC] rounded"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default TodoModal;
