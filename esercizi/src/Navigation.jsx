import { Link } from "react-router-dom"

export const Navigation = () => {


  return (
    <nav>
       <Link to='home'>Home</Link>
       <Link to='aboutUs'>About Us</Link>
       <Link to='Conatct'>Contact</Link>
    </nav>
  )
}
