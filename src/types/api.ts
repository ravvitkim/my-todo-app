// src/hooks/usePosts.ts
import { useState, useEffect } from "react";

export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
}


function usePosts(){
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data: Post[] = await res.json()
        setPosts(data)
      } catch (e) {
        setError('데이터를 가져오는데 실패했습니다.')
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  return { posts, loading, error }
}

export default usePosts