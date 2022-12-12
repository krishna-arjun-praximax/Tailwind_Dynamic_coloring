import React, { useState } from "react";

const App = () => {
  const [color, setColor] = useState(null);

  return (
    <div
      className={`flex w-full h-screen overflow-hidden ${
        "bg-" + color + "-300"
      }`}
    >
      <div className="flex flex-col w-full">
        <div className="hidden bg-red-300"></div>
        <div className="hidden bg-cyan-300"></div>
        <div className="hidden bg-violet-300"></div>
        <div className="flex w-full mt-5 ml-10 space-x-3 justify-between font-semibold">
          <div className="flex space-x-3">
            <h1>ARTICLES</h1>
            <h1>CONTRIBUTORS</h1>
            <h1>LOGIN</h1>
            <h1>SIGN UP</h1>
          </div>
          <div className="flex pr-16 space-x-3">
            <button
              onClick={() => setColor("red")}
              className="w-8 h-8 rounded-full outline outline-2 bg-red-300"
            ></button>
            <button
              onClick={() => setColor("cyan")}
              className="w-8 h-8 rounded-full outline outline-2 bg-cyan-300"
            ></button>
            <button
              onClick={() => setColor("violet")}
              className="w-8 h-8 rounded-full outline outline-2 bg-violet-400"
            ></button>
          </div>
        </div>

        <div className="flex flex-col h-full items-center justify-center">
          <p className="mb-5 font-semibold text-lg opacity-80">
            You can get all type of article from one source.
          </p>
          <div className="flex w-96 h-24 items-center justify-center border rounded-lg">
            <div className="flex space-x-3">
              <input
                type="text"
                className="border outline-none rounded lg px-3 py-2"
                placeholder="Enter article name"
              />
              <button className=" border px-2 rounded-lg bg-blue-600 text-white">
                Search
              </button>
            </div>
          </div>
          <div className="flex mt-24 space-x-10">
            <img
              className="w-52 h-52"
              src={require("./Images/book1.jpg")}
              alt=""
            />
            <img
              className="w-52 h-52"
              src={require("./Images/cycle.jpg")}
              alt=""
            />
            <img
              className="w-52 h-52"
              src={require("./Images/science.jpg")}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
