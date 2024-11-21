

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import Logo from '../../assets/Logo.png';
function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src={Logo} alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              
            </NavDropdown>

            <NavDropdown title="Resources" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link href="#link">Pricing</Nav.Link>

        </Nav>

           <img
              src="https://s3-alpha-sig.figma.com/img/6c1f/e88a/3b9e8dfddf4a065581b04df49638ca9c?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N-Rvo9KTT9peDF34ZjXAFsCmViEPt6~ShOTlYZ2aVIlOzuaUQUjatnqmAomM2wTrCV6Q-~9AROnL25BQTq4oBgfpq7lVckGxk1Pmh7Urp3FZ2i9f5HAJ8mbhk~VTC~hj~EQd8pN~9fLaTnjLQWQEUjA0BbC0soI2aP5e0sSquvyVYsdTMdKtCuxYiPT7q3ofDmLNy2t1NpGonxllTQiOvrzTUkidzzbJyYV6Zh6HsgesUl~63jNabEb6sVJK5299p5hbkmo0PRBctmVQrq3cyQLH1HbniWfP55TiraL3KqIYf5P~fnTqF-CPQpdvTcmTdMFDuXXjQqkEScX3HXqHHg__"
              alt="Profile"
              style={{ width: '40px', height: '40px', objectFit: 'cover' }}
              
              className="ms-auto profile-img"
            />

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;