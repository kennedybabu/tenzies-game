import React, { useEffect , useState} from "react";
import Dice from "./components/Dice";


function App() {

  const [numbersArray, setNumbersArray] = useState(allNewDice())

  //function that will get random numbers between 1 and 6
  function allNewDice() {
    
    let arr = []
    
    for(let i = 1; i <= 10; i ++) {     

      arr.push(Math.ceil(Math.random() * 6))      
    }
    return arr
  }

  
  let rolledDice = numbersArray.map((num, index) => {
    return <Dice key={index} value={num}/>
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
              <button onClick={allNewDice} className="w-[92px] h-[35px] bg-[#5035ff] mt-[10px] rounded-[4px] text-[#f5f5f5]">Roll</button>
          </div>
      </main>
    </div>
   
  );
}

export default App;
