import { useState } from "react";
import "./App.css";

function App() {
  
  const[pratik, setCount]=useState(2);
  
  function decreaseHandler(){
        setCount(pratik-1);
  }

  function increaseHandler()
  {
        setCount(pratik+1);
  }

  function resetHandler()
  {
    setCount(0);
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-slate-500  gap-10 flex-col" >
      <div className="text-[lightblue] text-2xl font-medium ">Increment & Decrement</div>
      <div className="bg-white flex justify-center items-baseline text-[25px] rounded-sm gap-12 py-3 " >
        <button onClick={decreaseHandler} className="text-center w-20 text-5xl border-r-2  ">-</button>
        <div className="font-bold text-4xl">
            {pratik}
        </div>
        <button  onClick={increaseHandler} className="text-center w-20 text-5xl border-l-2">+</button>
      </div>

      <button onClick={resetHandler} className=" text-white font-bold bg-[#3dc2ff] h-10 w-40 rounded-md hover:bg-[#2ab7eadc] hover:drop-shadow-md transition-all duration-200"> reset</button>
    </div>
  );
}

export default App;
