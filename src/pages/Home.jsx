import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PencilAltIcon, LogoutIcon } from "@heroicons/react/outline";
import TodoCard from "../components/Todo/TodoCard";
import BlankCard from "../components/Todo/BlankCard";
import CardContainer from "../components/Todo/CardContainer";
import PageHeader from "../components/Todo/PageHeader";
import PageTitle from "../components/Todo/PageTitle";
import TodoModal from "../components/Todo/TodoModal";
import { getTodos } from "../lib/api";
import { deleteToken } from "../lib/token";
const DEFAULT_TODO = {
  title: "",
  description: "",
  deadline: new Date(),
  status: "SCHEDULED",
};

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [openTodoModal, setOpenTodoModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const todoList = await getTodos();
    setTodos(todoList);
  };
  const signOut = () => {
    deleteToken(process.env.REACT_APP_AUTH_TOKEN_NAME);
    navigate("/sign-in");
  };
  return (
    <>
      <div className="bg-white">
        <PageHeader>
          <PageTitle>TODO LIST</PageTitle>
          <div className="content-end justify-end">
          <button
            className="w-[20%] h-[20%] mr-4"
            onClick={() => setOpenTodoModal(true)}
          >
            <PencilAltIcon />
          </button>
          <button className="w-[20%] h-[20%] ml-4" onClick={() => signOut()}>
            <LogoutIcon />
          </button>
          </div>
        </PageHeader>
        <CardContainer>
          {todos.length > 0 ? (
            todos.map((todo) => {
              return (
                <TodoCard key={todo._id} data={todo} fetchTodos={fetchTodos} />
              );
            })
          ) : (
            <BlankCard />
          )}
        </CardContainer>
      </div>
      <TodoModal
        openModal={openTodoModal}
        setOpenModal={setOpenTodoModal}
        modalTitle="Add new todo"
        mode="CREATE"
        todo={DEFAULT_TODO}
        fetchTodos={fetchTodos}
      />
    </>
  );
};

export default Home;
