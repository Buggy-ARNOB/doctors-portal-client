import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'
function Header() {
    return (
        <Navbar bg="light" expand="lg">

            <Navbar.Brand>
                <h2 className='ms-2 px-3 py-2 bg-info  rounded-pill'>Doctor's Portal</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Link className='text-decoration-none px-2 text-dark fw-semibold' to='/'><h5>Home</h5></Link>
                    <Link className='text-decoration-none px-2 text-dark fw-semibold' to='/doctor'><h5>Doctor</h5></Link>
                    <Link className='text-decoration-none px-2 text-dark fw-semibold' to='/banner'><h5>Banner</h5></Link>
                    <Link className='text-decoration-none px-2 text-dark fw-semibold' to='/contact'><h5>Contact</h5></Link>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    );
}

export default Header;