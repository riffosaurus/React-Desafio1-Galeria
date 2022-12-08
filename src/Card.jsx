import React from 'react'


const Card = (props) => {
  return (
    <div>
        <img 
       className='image'
        src={props.imgurl}>
        </img>

<h2>{props.title}</h2>

<p>{props.descr}</p>

    </div>
  )
}

export default Card