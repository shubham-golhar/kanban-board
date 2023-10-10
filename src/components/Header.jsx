import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const taskData = useSelector((store) => store.task);
  const doneCount = taskData.filter((task) => task.column === "Done").length;
  const pendingCount = taskData.filter(
    (task) => task.column === "Todo" || task.column === "Ongoing"
  ).length;
  const handleLogout = () => {
    navigate("/");
    localStorage.removeItem("registerData");
  };
  return (
    <nav className="bg-teal-500 p-2 md:p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex text-white text-center items-center ">
          <span className="font-semibold text-lg md:text-xl">
            Welcome To Kanban Board
          </span>
          <span className="pl-6">|</span>
          <div className="flex text-white text-center md:text-left ">
            <h5 className="text-sm font-bold md:ml-4 md:mr-4">
              Total: {taskData.length}
            </h5>
            <h5 className="text-sm font-bold md:ml-4 md:mr-4">
              Pending: {pendingCount}
            </h5>
            <h5 className="text-sm font-bold md:ml-4 md:mr-4">
              Completed: {doneCount}
            </h5>
          </div>
        </div>

        <div className="text-2xl flex font-bold p-4 ml-6 justify-center md:justify-end">
          <button className="text-white" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
