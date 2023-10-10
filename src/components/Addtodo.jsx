import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../utils/taskSlice";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import Modal from "../modal/modal";

const Addtodo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const todoData = useSelector((store) => store.todo);
  const title = useRef();
  const priority = useRef();
  const date = useRef();

  const handleButtonClick = () => {
    const todoTitle = title.current.value;
    const todoPriority = priority.current.value;
    const todoDate = date.current.value;

    if (!todoTitle || !todoPriority || !todoDate) {
      toast.error("Invalid input");
      return;
    }

    const todoPayload = {
      id: uuidv4(),
      title: todoTitle,
      priority: todoPriority,
      date: todoDate,
      column: "Backlog",
      // column: 0,
      sortIndex:
        todoData[todoData.length + 1]?.sortIndex || todoData.length + 1,
    };
    toast.success("Added successfully");
    dispatch(addTask(todoPayload));
    setIsModalOpen(false);
    title.current.value = "";
    priority.current.value = null;
    date.current.value = null;
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="ml-6 mb-12 mt-8 ">
      <div className="flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          onClick={openModal}
        >
          Create Task
        </button>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-xl font-medium text-gray-900 dark:text-white text-lg md:text-xl font-semibold"
            >
              Task
            </label>
            <input
              ref={title}
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Add Task "
              required=""
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="priority"
              className="block mb-2 text-xl font-medium text-gray-900 dark:text-white text-lg md:text-xl font-semibold"
            >
              Priority
            </label>
            <select
              ref={priority}
              name="priority"
              id="priority"
              className="outline-blue-300 mr-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
              placeholder="Select Priority"
            >
              <option defaultValue value="">
                Select Priority
              </option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-xl font-medium text-gray-900 dark:text-white text-lg md:text-xl font-semibold"
            >
              Date
            </label>
            <input
              ref={date}
              type="date"
              name="date"
              id="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="2023-09-25"
              required=""
            />
          </div>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            onClick={handleButtonClick}
          >
            Add Task
          </button>
        </Modal>
      </div>
    </div>
  );
};

export default Addtodo;
