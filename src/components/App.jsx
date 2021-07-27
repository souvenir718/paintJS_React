import React from "react";
import "./App.css";
import Canvas from "./Canvas";
import Sample from "./Sample";
const App = () => {
  return (
    <div className="h-screen w-full bg-blue-100">
      <div className=" h-screen container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <Canvas />
      </div>
    </div>
  );
  // return <Sample />;
};

export default App;
