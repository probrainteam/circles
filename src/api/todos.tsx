import axios from "axios";

export const getTodos = async () => {
  const response = await axios.get("http://localhost:4000/todos");
  return response.data;
};

export const getTodoById = async (id: number) => {
  const response = await axios.get(`http://localhost:4000/todos/${id}`);
  return response.data;
};
