"use client";
import { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterReducer";

export default function CounterRedux() {
  const count = useSelector((state: RootState) => state.counterReducer.count);
  const dispatch = useDispatch();

  return (
    <div id="wd-counter-redux">
      <h2>Counter Redux</h2>
      <h3>{count}</h3>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
