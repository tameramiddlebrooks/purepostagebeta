import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar'
import Waitlist from './Waitlist'
import Beta from './Beta'
import Home from './Home'
import Founder from './Founder'
import logo from './transparentLogo2.png'



function App() {
  return (
    <div className="branding">
      <header className="App-header" >
               <title>purepostage</title>
        <h1 className="topTitle">purepostage <img src={logo} alt="mylogo" className="logo" />

  </h1>
  


        <div className="tagline">
         help us build the future of sustainable shipping.
         {/* we ship better. for people and the planet. */}
          </div>


        {/* navbar */}

        <Navbar />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Waitlist" element={<Waitlist />} />
          <Route path="/Beta" element={<Beta />} />
          <Route path="/Founder" element={<Founder />} />


        </Routes>

      </header>



    </div>
  );
}

<div>

</div>

export default App;
