import React from 'react'

const NewsPaper = ({thumbNail,paperURL,title}) => {
  return (
    <div
    onClick={()=>window.location.href=paperURL}
      style={{width:"99%",marginTop:"30px",border:"2px solid red",borderRadius:"50px"}}>
        <img style={{width:"300px"}} src={thumbNail} alt="" />
    </div>
  )
}

export default NewsPaper