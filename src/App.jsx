import Header from '../src/component/header/Header'
import Contect from './component/contect/Contect'
import About from './component/About/About'
import Services from './component/Services/Services'
// import Port from './component/port/port'
// import Intreact from './component/intract/Intreact'
import { ContactUs } from './component/intract/Intreact'
import Footer from './component/footer/Footer'
function App() {


  return (
    <>
     <Header/>
     <Contect/>
     <About/>
     <Services/>
     {/* <Port/> */}
     {/* <Intreact/> */}
     <ContactUs/>
     <Footer/>
    </>
  )
}

export default App
