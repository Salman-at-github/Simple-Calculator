import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
    inputRef.current.focus();

  }; 
 
  function minus(e) { 
  	// Add the code for the minus function 
    e.preventDefault();
    setResult((result)=> result - Number(inputRef.current.value));
    inputRef.current.focus();

  };
 
  function times(e) { 
    // Add the code for the plus function 
    e.preventDefault();
    setResult((result)=> result * Number(inputRef.current.value));
    inputRef.current.focus();

  }; 
 
  function divide(e) { 
    // Add the code for the divide function 
    e.preventDefault();
    setResult((result)=> result / Number(inputRef.current.value));
    inputRef.current.focus();

  };
 
  function resetInput(e) { 
    // Add the code for the resetInput function
    e.preventDefault();
    inputRef.current.value = 0;

    //shift the cursor to input field
    inputRef.current.focus();
  };
 
  function resetResult(e) { 
  	// Add the code for the resetResult function 
    e.preventDefault();
    resultRef.current.textContent = "0";
    inputRef.current.focus();

  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <div className="appbox">
      <form> 
        <p ref={resultRef} className="result"> 
           = {result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <div className="funcButtons">
          
        <button onClick={plus}>+</button> 
        <button onClick={minus}>-</button> 
        <button onClick={times}>x</button> 
        <button onClick={divide}>÷</button> 
        </div>
        <div className="resetButtons">
        <button onClick={resetInput}>Reset Input</button>
        <button onClick={resetResult}>Reset Result</button> 
        </div>
         
      </form> 
      </div>
    </div> 
  ); 
} 
 
export default App; 
