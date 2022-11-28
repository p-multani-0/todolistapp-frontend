import axios from "axios";
import { getToken } from "../lib/token";
const token = getToken(process.env.REACT_APP_AUTH_TOKEN_NAME);

// TODO APIs
const createTodo = async (todo) => {
  const apiUrl = `${process.env.REACT_APP_SERVER_URL}/todos/create`;
  try {
    const { data } = await axios.post(
      apiUrl,
      { todo },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
};

const getTodos = async () => {
  const apiUrl = `${process.env.REACT_APP_SERVER_URL}/todos/list`;
  try {
    const { data } = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

const getTodoById = async (id) => {
  const apiUrl = `${process.env.REACT_APP_SERVER_URL}/todos/${id}`;
  try {
    const { data } = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

const updateTodo = async (todo, id) => {
  const apiUrl = `${process.env.REACT_APP_SERVER_URL}/todos/${id}`;
  try {
    const { data } = await axios.put(
      apiUrl,
      { todo },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
};

const deleteTodo = async (id) => {
  const apiUrl = `${process.env.REACT_APP_SERVER_URL}/todos/${id}`;
  try {
    const { data } = await axios.delete(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export { createTodo, getTodos, getTodoById, updateTodo, deleteTodo };
