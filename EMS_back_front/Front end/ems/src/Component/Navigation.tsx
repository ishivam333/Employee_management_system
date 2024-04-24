import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";




const Navigation: React.FC = () => {
    return(  <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/listemployee">Employee</Nav.Link>
                <Nav.Link href="/listdepartment">Department</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>



    );
}

export default Navigation;