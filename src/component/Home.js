import React from 'react'
import Count from 'react-countup'
import { connect } from 'react-redux'
// import { useSelector, useDispatch } from 'react-redux'
import {buyCake, sellCake} from '../Redux/Cakes/cakeAction'

const Home = (props) => {

  return (
    <>
      <div className="container my-2">
        <button className="btn btn-primary mx-2" onClick={props.sellCake}>-</button>
        <span className="text-center">Update the Balance {props.numberOfCake}</span>
        <button className="btn btn-primary mx-2" onClick={props.buyCake}>+</button>
      </div>
      <div className="container">
        <p className="container">Counter value <span><Count start={200} end={1000} duration={2} delay={0} prefix={"+"} /></span></p>
      </div>
      <div className="container">
        <p> Account Balance 1000</p>
      </div>
    </>
  )
}

const mapStateToProps = state =>{
  return {
    numberOfCake : state.numberOfCake
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => { dispatch(buyCake()) },
    sellCake: () => { dispatch(sellCake()) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
