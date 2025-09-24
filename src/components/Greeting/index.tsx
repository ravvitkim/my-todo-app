import type { GreetingProps } from "@/types/user";
import React from "react"

function Greeting({user, age}:GreetingProps){
  return (
    <div>
      <h1>안녕하세요,{user.name}</h1>
      {age && <p>나이는 {age}입니다.</p>}
    </div>
  )
}
//Greeting 컴포넌트 내보의 props가 바뀌어야 재랜더링 됨.
export default React.memo(Greeting); 