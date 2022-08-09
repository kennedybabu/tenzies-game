import Dice from "./components/Dice";



function App() {
  let num = 10
  
  return (
    <div className="h-full w-full flex items-center justify-center">
       <main className="w-[360px] h-[379px] bg-[#0B2434] my-auto flex items-center justify-center top-1/2 translate-y-1/2">
          <div className="w-[320px] h-[320px] bg-[#f5f5f5f5] rounded-[10px] flex items-center">
              <div className="w-full h-[100px] px-[34px] grid grid-cols-5">
                 <Dice />
                 <Dice />
                 <Dice />
                 <Dice />
                 <Dice />
                 <Dice />
                 <Dice />
                 <Dice />
                 <Dice />
                 <Dice />
              </div>
          </div>
      </main>
    </div>
   
  );
}

export default App;
