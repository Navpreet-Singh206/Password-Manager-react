import { useState } from 'react'
import Navbar from "./components/Navbar.jsx"
import Manager from "./components/Manager.jsx"
import Footer from "./components/Footer.jsx"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div className="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
<Navbar/>
<Manager/>
<Footer/>



    </>
  )
}

export default App
