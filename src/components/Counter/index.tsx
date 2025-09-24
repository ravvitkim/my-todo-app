import React from "react"
import { useState } from "react";

function Count(){
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>카운터</h1>
      <p>카운트 : {count}</p>
      <button onClick={() => setCount(count + 1)}>+1 증가</button>
    </>
  )
}

export default React.memo(Count);

