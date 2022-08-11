import React from 'react'

const Dice = (props) => {
  const styles = {
    backgroundColor : props.isHeld ? "#59e391" : '#f5f5f5'
  }
  return (
    <div className='h-[36px] w-[36px] rounded-[4px] dice flex items-center justify-center cursor-pointer' style={styles} onClick={() => props.holdDice(props.id)}>
        <p className='text-[#2b283a] text-[21px]'>{props.value}</p>
    </div>
  )
}

export default Dice