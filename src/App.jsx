import { useState } from "react"


function App() {
  const [color, setColor] = useState("black")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full  shadow-lg bg-[red]"
          >Red</button>
          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full  shadow-lg  bg-[green] "
          
          >Green</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full  shadow-lg bg-[blue] "
          
          >Blue</button>
          <button
          onClick={() => setColor("#CF244C")}
          className="outline-none px-4 py-1 rounded-full  shadow-lg bg-[#CF244C] "
          
          >Pink</button>
          <button
          onClick={() => setColor("#24CFC4")}
          className="outline-none px-4 py-1 rounded-full  shadow-lg bg-[#24CFC4] "
          
          >Skyblue</button>
          <button
          onClick={() => setColor("white")}
          className="outline-none px-4 py-1 rounded-full  shadow-lg bg-[white] "
          
          >White</button>
          <button
          onClick={() => setColor("purple")}
          className="outline-none px-4 py-1 rounded-full  shadow-lg bg-[purple] "
          
          >Purple</button>
          <button
          onClick={() => setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-[yellow] "
          
          >Yellow</button>
          <button
          onClick={() => setColor("#AFA2A2")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-[#AFA2A2] text-black"
          
          >Gray</button>
          <button
          onClick={() => setColor("#FE6E00")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-[#FE6E00] "
          
          >Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App