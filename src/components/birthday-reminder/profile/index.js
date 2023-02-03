import React from 'react'
function Profile(props) {
  return (
    <div className='h-[75px] flex mb-[24px]'>
        <img className='h-[75px] w-[75px] rounded-full' alt='' src={props.image}></img>
          <div className='ml-[16px] flex items-center'>
            <h3>{props.name}</h3>
        </div>
    </div>
  )
}

export default Profile