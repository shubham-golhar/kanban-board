import React, { useState, useEffect } from "react";
import { ChatAlt2Icon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { editTask, moveTaskToColumn } from "../utils/taskSlice";
const Cards = (taskData) => {
  const columns = {
    0: "Backlog",
    1: "Todo",
    2: "Ongoing ",
    3: "Done",
  };

  let currentRightKey;
  let currentLeftKey;
  useEffect(() => {
    for (const key in columns) {
      if (columns[key] === todo.column) {
        currentRightKey = key;
      }
    }
    columns[currentRightKey++];
  }, [currentRightKey]);

  useEffect(() => {
    for (const key in columns) {
      if (columns[key] === todo.column) {
        currentLeftKey = key;
      }
    }
    columns[currentLeftKey--];
  }, [currentLeftKey]);

  const dispatch = useDispatch();
  const { title, priority, id, date, handleDeleteCard, todo } = taskData;

  //  const todoData = useSelector((store) => store.todo);
  const priorityLabelStyle = {
    color:
      priority === "low" ? "blue" : priority === "medium" ? "orange" : "red",
  };

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDate, setEditedDate] = useState(date);

  const todoPayload = {
    id: id,
    title: editedTitle,
    priority: priority,
    date: editedDate,
  };

  const handleEditCard = () => {
    setIsEditing(true);
  };

  const handleSaveCard = () => {
    dispatch(editTask(todoPayload));
    setIsEditing(false);
  };

  const handleMoveLeft = () => {
    console.log("currentLeftKey", currentLeftKey);
    if (currentLeftKey >= 0) {
      dispatch(
        moveTaskToColumn({ taskId: id, newColumn: columns[currentLeftKey++] })
      );
    } else {
      alert("You Are At First Board ");
    }
  };
  const handleMoveRight = (e) => {
    if (currentRightKey <= 3) {
      dispatch(
        moveTaskToColumn({ taskId: id, newColumn: columns[currentRightKey++] })
      );
    } else {
      alert("You Are At Last Board ");
    }
  };
  3;

  return (
    <div className="bg-white rounded-md p-3 m-3 mt-0 last:mb-0">
      <label
        className={`bg-gradient-to-r
        px-2 py-1 rounded text-white text-sm
        ${
          priority === "low"
            ? "from-blue-600 to-blue-400"
            : priority === "medium"
            ? "from-yellow-600 to-yellow-400"
            : "from-red-600 to-red-400"
        }
        `}
        style={priorityLabelStyle}
      >
        {priority === "low"
          ? "Low Priority"
          : priority === "medium"
          ? "Medium Priority"
          : "High Priority"}
      </label>
      {isEditing ? (
        <>
          <input
            type="date"
            name="editedDate"
            value={editedDate}
            onChange={(e) => setEditedDate(e.target.value)}
            className="text-md my-3 text-lg leading-6 w-full"
          />

          <input
            type="text"
            name="editedTitle"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="text-md my-3 text-lg leading-6 w-full"
          />
        </>
      ) : (
        <>
          <div className="flex justify-between items-center">
            <div className="flex space-x-2 items-center">
              <span className="flex space-x-1 items-center">
                <ChatAlt2Icon className="w-4 h-4 text-gray-500" />
                <div className="flex">
                  <span className="mr-4 text-gray-400 text-sm">
                    Due Date: {date}
                  </span>
                </div>
              </span>
            </div>
          </div>
          <h5 className="text-md my-3 text-lg leading-6">{title}</h5>
        </>
      )}

      <div className="flex items-center justify-between">
        {isEditing ? (
          <button
            onClick={handleSaveCard}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          >
            Save
          </button>
        ) : (
          <span className="cursor-pointer" onClick={handleEditCard}>
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/color/48/edit--v1.png"
              alt="edit--v1"
            />
          </span>
        )}

        <span className="cursor-pointer" onClick={handleDeleteCard}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
      </div>

      <div className="flex items-center justify-between">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            onClick={handleMoveLeft}
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
        </span>

        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
            onClick={handleMoveRight}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Cards;
