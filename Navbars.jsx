import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navbars () {

    return(
   
        <Navbar expand="lg" bg="light" variant="light" className="mb-4 shadow-sm">
            <Container>
                <Navbar.Brand href="#home">Siva shop</Navbar.Brand>
                    <Nav className="justify-content-center">
                        
                        <Nav.Link href="#home">Home</Nav.Link>
                      
                    </Nav>
            </Container>
        </Navbar>
      
  

    );
}

export default Navbars