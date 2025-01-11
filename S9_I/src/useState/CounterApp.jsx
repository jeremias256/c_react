import { useState } from "react";

export const CounterApp = () => {
  // const [ counter1, setCounter1] = useState(10);
  // const [ counter2, setCounter2] = useState(20);
  // const [ counter3, setCounter3] = useState(30);

  const [state, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = state;

  return (
    <>
      <h1> Counter : {counter1} </h1>
      <h1> Counter : {counter2} </h1>
      <h1> Counter : {counter3} </h1>

      <hr />
      <button
        className="btn btn-primary"
        onClick={
          () =>
            setCounter({
              ...state,
              counter1: counter1 + 1,
            })
          // ()=> setCounter( {
          // counter1: counter1 + 1,
          // counter2,
          // counter3,
          // } )
        }
      >
        +1
      </button>
    </>
  );
};
