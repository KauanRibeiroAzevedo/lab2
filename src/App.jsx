// Importing the components
import Content from './components/Content'; 
import Header from './components/Header'; 
import Footer from './components/Footer'; 

// Importing bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; 

// Importing bootstrap components
import Container from 'react-bootstrap/Container'; 
import Nav from 'react-bootstrap/Nav'; 
import Navbar from 'react-bootstrap/Navbar'; 
 
// Importing react router
import { BrowserRouter,Routes,Route} from 'react-router-dom' 
 
function App() { 
  
 
  return ( 
    <div> 
      {/* Used for navigating between pages */}
      <BrowserRouter> 
 
     {/* Navigation bar */}
     <Navbar bg="primary" data-bs-theme="dark"> 
          <Container> 
            {/* Website name */}
            <Navbar.Brand href="/">Navbar</Navbar.Brand> 

            {/* Navigation links */}
            <Nav className="me-auto"> 
              {/* Home link */}
              <Nav.Link href="/">Home</Nav.Link> 

              {/* Header link */}
              <Nav.Link href="/Header">Header</Nav.Link> 

              {/* Footer link */}
              <Nav.Link href="/Footer">Footer</Nav.Link> 
            </Nav> 
          </Container> 
        </Navbar> 
 
        {/* Different routes for the pages */}
        <Routes> 

          {/* Home page */}
          <Route path='/' element={<Content></Content>}></Route> 

          {/* Header page */}
          <Route path='/header' element={<Header></Header>}></Route> 

          {/* Footer page */}
          <Route path='/footer' element={<Footer></Footer>}></Route> 

          </Routes> 
          {/* <Header></Header> 
          <Content></Content> 
          <Footer></Footer> */} 
 
        </BrowserRouter> 
 
      </div> 
       
  ) 
} 
 
// Exporting the App component
export default App