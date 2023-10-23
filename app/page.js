"use client";
import React, { useState } from "react";

const page = () => {
  // useState
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  // submit & delete handlers
  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
  };
  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask); // Update the state with the modified array
  };
  

  // task renderer
  let renderTask = <span className="font-mono text-white flex justify-center items-center">No task available.</span>;

  // task
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-5 bg-gray-300 text-black p-4 rounded-lg">
          <div className="flex justify-between">
            <div>
              <span className="font-mono font-bold">{t.title}</span>
              <br />
              <span className="font-mono">{t.desc}</span>
            </div>

            {/* buttons */}
            <button
              id="delete-task-btn"
              className="px-3 py-1 bg-red-600 text-white rounded-md ml-4"
              onClick={() => {
                deleteHandler(i);
              }}
            >
              Delete
            </button>
          </div>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-gray-700 text-white text-center text-5xl py-5 font-mono font-bold">
        To-Do List
      </h1>
      <form
        onSubmit={submitHandler}
        className="flex justify-center items-center py-8"
      >
        <input
          type="text"
          placeholder="Enter Title Here"
          className="p-2 rounded-lg border-2 m-4 border-gray-700 font-mono"
          maxLength={100}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter description Here"
          className="p-2 rounded-lg border-2 m-4 border-gray-700 w-96 font-mono"
          maxLength={100}
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button
          id="add-task-btn"
          className="p-2 border-2 rounded-lg bg-gray-700 text-white font-mono m-4"
        >
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-gray-700">
        {/* <div className="flex justify-between">
          <h3 className="p-2 font-mono text-2xl font-bold">Title</h3>
          <h3 className="p-2 font-mono text-2xl font-bold">Description</h3>
          <h3 className="p-2 font-mono text-2xl font-bold">Delete/Done</h3>
        </div> */}
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
