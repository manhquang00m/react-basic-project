import React, { useState } from 'react'
import data from './data'
import Profile from './profile'
function BirthdayReminder() {
  const [dataResponse, setDataResponse]=useState(data)
  return (
      <div className='h-[100vh] bg-[#f28ab2] text-xl flex justify-center items-center'>
          <div className='w-[450px] h-[653px] bg-slate-100 px-[32px] py-[24px] rounded-lg'>
            <h2 className='mb-[20px]'>5 birthdays today</h2>
              {dataResponse.map((item,index) => {
                return <Profile key={index} image={item.image} name={item.name} age={item.age}></Profile>
            })}
              <button onClick={()=>setDataResponse([])} className='h-[42px] w-[100%] text-white bg-[#f28ab2] rounded-lg'>Clear All</button>
        </div>
      </div>
  )
}

export default BirthdayReminder