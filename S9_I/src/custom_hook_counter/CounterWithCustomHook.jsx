import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, increment, decremement, reset } = useCounter(100);

  return (
    <>
      <h1>Counter with custom hook : {counter}</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={() => {
          increment();
        }}
      >
        +1
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          decremement();
        }}
      >
        -1
      </button>
    </>
  );
};
