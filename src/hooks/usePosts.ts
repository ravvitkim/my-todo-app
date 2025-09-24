// hook : useState, useMemo, useEffect
import type { Post } from "@/types/api";
import { useEffect, useState } from "react";

function usePosts(){
  const [posts, setPosts] = useState<Post[]>([])
  // 처음 로딩될 때만 useEffect를 실행(fetch로...)
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    const fetchPosts = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data:Post[] = await res.json();
        setPosts(data);
      } catch (error) {
        console.log(error)
      }finally {
        setLoading(false)
      }
    }
    fetchPosts();
  },[])
  return {posts, loading}
}
export default usePosts;