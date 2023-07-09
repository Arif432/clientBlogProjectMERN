import React, { useState } from 'react'
import { useEffect } from 'react'
import Post from '../components/Post'

export default function HomePage() {
  const [allPosts ,setAllPosts] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/create').then(res => {
        res.json().then(posts=>{
            // console.log("post",posts);
            setAllPosts(posts)
            // console.log("sadsda",allPosts)
        })
    })
}, [])


  return (
    <>
      {allPosts.length > 0 && allPosts.map((eachPost)=>{
        eachPost.cover.replace(/\\/g, '/')
      return <Post {...eachPost} key={eachPost._id}/>
      })
      }
    </>
  )
}
