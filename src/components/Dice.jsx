import React from 'react'

const Dice = (prop) => {
  return (
    <div className='h-[36px] w-[36px] rounded-[4px] dice flex items-center justify-center'>
        <p className='text-[#2b283a] text-[21px]'>{prop.value}</p>
    </div>
  )
}

export default Dice