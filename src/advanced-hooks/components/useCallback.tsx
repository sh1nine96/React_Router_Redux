import React, { memo, useCallback, useEffect, useState } from "react";

const box = {
  padding: "2em",
  border: "1px solid black",
};

export const UseCallbackParent = () => {
  const [count, setCount] = useState<number>(0);
  const incrCount = useCallback(() => setCount((x: number) => x + 1), []);

  const [dummyState, setDummyState] = useState<string>("dummy state");

  console.log("rendering UseCallbackParent", dummyState);

  useEffect(() => {
    setTimeout(() => {
      setDummyState("dummy state update");
    }, 5000);
  }, []);

  return (
    <div style={box}>
      state: {dummyState}
      <UseCallbackChild count={count} incrCount={incrCount} />
    </div>
  );
};

type Props = {
  count: number;
  incrCount: () => void;
};

export const UseCallbackChild = memo(({ count, incrCount }: Props) => {
  console.log("rendering UseCallbackChild");

  return (
    <>
      <div style={box}>
        {count}
        <button onClick={incrCount}>+</button>
      </div>
    </>
  );
});
