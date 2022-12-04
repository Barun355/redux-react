import React from 'react'
import Count from 'react-countup'

const Home = () => {

  return (
    <>
      <div className="container my-2">
        <button className="btn btn-primary mx-2">-</button>
        <span className="text-center">Update the Balance 0</span>
        <button className="btn btn-primary mx-2">+</button>
      </div>
      <div class="container">
        <p className="container">Counter value <span><Count start={200} end={1000} duration={2} delay={0} prefix={"+"} /></span></p>
      </div>
      <div className="container">
        <p> Account Balance 1000</p>
      </div>
    </>
  )
}

export default Home
