import React, { useState, type ChangeEvent, type FormEvent } from "react"
type LoginFormValues = {
  email: string;
  password: string
}

function LoginForm(){
  //email, password를 저장하는 state 선언
  const [form, setForm] = useState<LoginFormValues>(
    { email: '', password: ''}
  );


  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    if(name != 'email' && name != 'password')return
    setForm((prev) => ({
      ...prev, [name] : value
    } as LoginFormValues))
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('로그인 : ', form)
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email"
          name="email"
          value={form.email}
          placeholder="이메일"
          onChange={(e)=> handleChange(e)}
          />
          <input type="password"
          name="password"
          value={form.password}
          placeholder="비밀번호"
          onChange={(e)=> handleChange(e)}
          />
          <button type="submit">로그인</button>
      </form>
    </div>
  )
}
export default React.memo(LoginForm)