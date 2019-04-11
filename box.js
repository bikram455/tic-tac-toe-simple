import React from 'react';

const  Box = (props) => {
  return(
    <div className={props.class} onClick={()=> props.move(props.index)}>
      {
        (props.user) ? <img src={props.user.background}/>: null
      }
    </div>
  )
}

export default Box;