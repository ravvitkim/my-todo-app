
import './App.css'
import type { User } from './types/user'
import {Greeting, LoginForm, Counter} from './components'
import usePosts from './hooks/usePosts'

function App() {
  const {posts,loading} = usePosts()
  const jang: User = {
    id: 1,
    name: "장원영",
    email: "jang@ive.com",
    isActive: true,
  }
  //User를 값으로 갖는 배열을 선언
  const ive: User[] = [
    {
      id: 1,
      name: "장원영",
      email: "jang@ive.com",
      isActive: true,
    },
    {
      id: 2,
      name: "안유진",
      email: "ahn@ive.com",
      isActive: false,
    },
  ]
  return (
    <div>
      <h1>Posts ({posts.length})</h1>

      {/* 간단 목록 */}
      <ul style={{ lineHeight: 1.6 }}>
        {posts.slice(0, 10).map(p => (
          <li key={p.id}>
            <strong>#{p.id}</strong> {p.title}
          </li>
        ))}
      </ul>

      {/* 첫 글 상세 미리보기 */}
      {posts[0] && (
        <section style={{ marginTop: 24 }}>
          <h2>첫 글 상세</h2>
          <h3>{posts[0].title}</h3>
          <p>{posts[0].body}</p>
          <small>by user {posts[0].userId}</small>
        </section>
      )}
      <LoginForm />
      <h1>User 정보</h1>
      <ul>
        <li>{jang.id}</li>
        <li>{jang.name}</li>
        <li>{jang.email}</li>
        <li>{jang.isActive ? 'TRUE' : 'FALSE'}</li>
      </ul>
      <hr />
      <h1>Ive Member</h1>
      {
        ive.map((member, _) => {
          return (
            <ul key={member.id}>
              <li>{member.id}</li>
              <li>{member.name}</li>
              <li>{member.email}</li>
              <li>{member.isActive ? 'TRUE' : 'FALSE'}</li>
            </ul>
          )
        })
      }
      <hr />
      <h1>컴포넌트 추가</h1>
      <Greeting user={jang} age={20} />

      <h1>useState를 갖는 콤포넌트</h1>
      <Counter />
      
    </div>
  )

}

export default App
