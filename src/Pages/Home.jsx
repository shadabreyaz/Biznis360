import React from 'react'
import Hero from "../Components/Hero"
import Blogs from '../Components/Blogs'
import ScrollTop from '../Components/ScrollTop'

export default function Home() {
  return (
    <div>
      <Hero />
      <ScrollTop/>
      <Blogs/>
    </div>
  )
}

// style={{ background: "linear-gradient(to left, #FFFFFF, #F1F1F1)" }}