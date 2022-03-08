import "./styles.css";
import { Navbar, Container, Nav, NavDropdown, Form, Button, FormControl } from "react-bootstrap";
const Header = () => {

    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container fluid className="container">
                    <Navbar.Brand href="#">SPORTSHOP</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/" className="nav-text-color">Home</Nav.Link>
                            <NavDropdown title="Clothing" id="navbarScrollingDropdown" className="nav-text-color">
                                <NavDropdown.Item href="/men-clothing" className="dropdown-text-color">Men</NavDropdown.Item>
                                <NavDropdown.Item href="/women-clothing" className="dropdown-text-color">Women</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Shoes" id="navbarScrollingDropdown" className="nav-text-color">
                                <NavDropdown.Item href="/men-shoes" className="dropdown-text-color">Men</NavDropdown.Item>
                                <NavDropdown.Item href="/women-shoes" className="dropdown-text-color">Women</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/contact" className="nav-text-color">Contact</Nav.Link>
                        </Nav>
                  
                    </Navbar.Collapse>
                </Container>
            </Navbar>




 
        </div>
    )
}

export default Header;
