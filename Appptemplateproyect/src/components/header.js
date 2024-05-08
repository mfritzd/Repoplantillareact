import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function AppHeader() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img width={200} src={require("./../assets/images/soprosoficons-removebg-preview.png")}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ullist me-auto" variant='underline'>
            <Nav.Link className='lista aa' href="#home">HOME</Nav.Link>
            <Nav.Link className='lista aa' href="#blog">EXPERIENCE</Nav.Link>
            <Nav.Link className='lista aa' href="#doit">WHAT WE DO</Nav.Link>
            <Nav.Link className='lista aa' href="#works">CLIENTS</Nav.Link>
            <Nav.Link className='lista aa' href="#footer">CONTACTS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}