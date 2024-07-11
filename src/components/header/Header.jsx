'use client'
import { decrement, increment } from "@/lib/features/counter/counterSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  let dispatch = useDispatch();
  let count = useSelector((state) => state.counter.value);
  return (
    <div>
      <div className="counter flex items-center gap-4">
        <button
          disabled={count <= 0}
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          -
        </button>
        <span className="text-2xl">{count}</span>
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Header;
