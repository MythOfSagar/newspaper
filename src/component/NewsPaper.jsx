import React from 'react'

const NewsPaper = ({thumbNail,paperURL,title}) => {
  return (
    <><a target="_blank" href={paperURL}><div
      style={{width:"99%",marginTop:"30px",border:"2px solid red",borderRadius:"50px"}}>
        <img style={{width:"300px"}} src={thumbNail} alt="" />
    </div></a></>
  )
}

export default NewsPaper