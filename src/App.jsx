import {BrowserRouter} from "react-router-dom";

import {Navbar, Hero, About,
        Experience, Tech, Works,
        Feedbacks, Contact, StarsCanvas}
from "./components";
import { Toaster } from "react-hot-toast";



const App = () => {
  return(
    <BrowserRouter>
    <Toaster/>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-no-repeat bg-center bg-cover">
        <Navbar/>
         <Hero/>
     </div>
      <About/>
      <Experience/>
      <Tech/>
      <Works/>
      <Feedbacks/>
      <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
      </div> 
    </div>
    </BrowserRouter>
  )
}

export default App;