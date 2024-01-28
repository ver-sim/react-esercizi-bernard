import { Link, Route, Routes } from "react-router-dom"
import { Card } from "./Card"
import { Navigation } from "./Navigation"

const App = () => {


  return (
    < >
      <Link to='/'>Traccia n. 1</Link>
      <Link to='/second'>Traccia n. 2</Link>
      
      <Routes>
        <Route path="/" element={<Card />}/>
        <Route path="/second" element={<Navigation />}/>

      </Routes>
      <Link to='/'>Back</Link>

    </ >
  )
}

export default App