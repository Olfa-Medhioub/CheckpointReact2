import { Navbar,Container,Nav } from 'react-bootstrap';
const NavOlfa=()=>{
    return(
        <div>
              <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="#home">About</Nav.Link>
                    <Nav.Link href="#features">Home</Nav.Link>
                    <Nav.Link href="#pricing">Contact</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
        </div>
    )
}

export default NavOlfa