import React, { useEffect , useState} from "react";
import Dice from "./components/Dice";
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'


function App() {

  const [numbersArray, setNumbersArray] = useState(allNewDice())

  const [tenzies, setTenzies] = useState(false)


  useEffect(() => {
      const allHeld = numbersArray.every(num => num.isHeld)
      const firstValue = numbersArray[0].value
      const allSameValue = numbersArray.every(num => num.value === firstValue)
      
      if(allHeld && allSameValue) {
        setTenzies(true)
        console.log('You have won the game')
      }
  }, [numbersArray])

  function generateNewDice() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }

  //function that will get random numbers between 1 and 6
  function allNewDice() {
    
    let arr = []
    
    for(let i = 1; i <= 10; i ++) {     

      arr.push(generateNewDice())      
    }
    return arr
  }

  function rollDice() {
    if(!tenzies) {
      setNumbersArray(oldState => oldState.map(num => {
        return num.isHeld ? num : generateNewDice()
      }))
    } else {
      setTenzies(false)
      setNumbersArray(allNewDice())
    }
    
  }


  //function that holds a dice
  function holdDice(id) {   
    setNumbersArray(oldState => oldState.map((num) => {
      return num.id === id ? {...num, isHeld: !num.isHeld} : num
    })) 
   
  }
  
  //map through the array and render instances of the Dice component
  let rolledDice = numbersArray.map((num) => {
    return <Dice key={num.id} value={num.value} isHeld={num.isHeld} holdDice={holdDice} id={num.id}/>
  })
  
  
  return (
    <div className="h-full w-full flex items-center justify-center">
       <main className="w-[360px] h-[379px] bg-[#0B2434] my-auto flex items-center justify-center top-1/2 translate-y-1/2">
          <div className="w-[320px] h-[320px] bg-[#f5f5f5f5] rounded-[10px] flex flex-col text-center items-center pt-[32px]">
                <h1 className="text-[#2b283a] text-[25px] font-bold">Tenzies</h1>
                <p className="text-[#4a4e74] text-[13px] max-w-[232px]">Roll until all dice are the same. Click each dice to freeze it at its current Value between rolls.</p>
              <div className="w-full h-[100px] px-[34px] grid grid-cols-5 mt-[23px]">                
                  {rolledDice}
              </div>
              <button onClick={rollDice} className="w-[92px] h-[35px] bg-[#5035ff] mt-[10px] rounded-[4px] text-[#f5f5f5]">{tenzies ?  "New Game" : "Roll"}</button>
          </div>
          {tenzies ?  <Confetti className="w-[360px] h-[379px]"/> : null}
      </main>
    </div>
   
  );
}

export default App;
