import React from "react";
import { useState,useEffect } from "react";
import Api from './Api';
function Buttons() {
  const [count, setCount] = useState(0);

  const increment = () => {
 
    setCount(count+1);
   
  };

  const reset = () => {
    setCount(0);
  };

  const random = () => {
    setCount(Math.floor(Math.random() * (1000 - 1 + 1)) + 1);
  };

  useEffect(() => {
    random(); 
   
  },[]);


  return (
    <>
   <div className='flex justify-center'>
  <button
    className="Button font-title p-2 bg-teal-500 hover:bg-teal-700 text-white m-4"
    onClick={increment}
  >
    Incrementar
  </button>
  <button
    className="Button font-title p-2 bg-teal-500 hover:bg-teal-700 text-white m-4"
    onClick={random}
  >
    Aleatorio
  </button>
  <button
    className="Button font-title p-2 bg-teal-500 hover:bg-teal-700 text-white m-4"
    onClick={reset}
  >
    Resetear
  </button>
</div>
<p className="text-7xl text-gray-300 font-title text-center">{count}</p>


<Api count={count}/>
    </>
  );
}

export default Buttons;
