import { useState } from "react";

const Key = () => {
  const [key] = useState([9, 8, 7, 6, 5, 4, 3, 2, 1, '+', '-', '*', '/']);
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(oldvalue => oldvalue + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleEvaluate = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <>
      <style>
        {`
          .calculator {
            max-width: 200px;
            margin: 50px auto;
            padding: 20px;
            border-radius: 10px;
            background-color: #f4f4f4;
            box-shadow: 0 0 10px #ffffff ;
            text-align: center;
          }
          input[type="text"] {
            width: 80%;
            color : #fff;
            background-color: rgb(2, 18, 36);
            padding: 10px;
            margin-bottom: 15px;
            font-size: 1.2em;
            border: 1px solid #ccc;
            border-radius: 5px;
            text-align: right;
          }
          button {
            margin: 5px;
            padding: 8px 20px;
            font-size: 1em;
            border: none;
            border-radius: 5px;
            background-color:rgb(2, 18, 36);
            color: white;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }
          button:hover {
            background-color: #0056b3;
          }
        `}
      </style>

      <div className="calculator">
        <input type="text" value={input} readOnly />

        <div>
          {key.map((item, index) => (
            <button onClick={() => handleClick(item)} key={index}>{item}</button>
          ))}
          <button onClick={handleEvaluate}>=</button>
          <button onClick={handleClear}>C</button>
        </div>
      </div>
    </>
  );
};

export default Key;
