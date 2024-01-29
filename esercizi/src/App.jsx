import { Link, Route, Routes } from "react-router-dom"
import { Card } from "./Card"
import { Navigation } from "./Navigation"
import { Login } from "./Login"

const App = () => {


  return (
    < >
      <Link to='/'>Traccia n. 1</Link>
      <Link to='/navigation'>Traccia n. 2</Link>
      <Link to='/login'>Traccia n. 3</Link>
      
      <Routes>
        <Route path="/" element={<Card />}/>
        <Route path="/navigation" element={<Navigation />}/>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Link to='/'>Back</Link>

    </ >
  )
}

export default App