import About from './Components/About'
import Contact from './Components/Contact'
import Feature from './Components/Feature'
import Header from './Components/Header'
import Presentation from './Components/Presentation'

import aboutImage1 from './images/about.png'
import aboutImage2 from './images/download.png'

function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <About
        image={aboutImage1}
        title="Comes With All You Need For Daily Life"
        button="Get The App"
        id="about1"
      />
      <Presentation />
      <About
        image={aboutImage2}
        title="Download And Get The App Now"
        button="Download"
        id="about2"
      />
      <Contact />
    </div>
  )
}

export default App
