import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../assets/logo.jpg'
import { Image } from 'react-bootstrap';


const Navigations = [
    {
        id: 'head1',
        name: 'Home',
        link: "/"
    },
    {
        id: 'head2',
        name: 'Dashboard',
        link: "/dashboard"
    },    
    {
        id: 'head3',
        name: 'Course',
        link: "/course"
    },
    {
        id: 'head4',
        name: 'Pricing',
        link: "/pricing"
    },
    {
        id: 'head5',
        name: 'Contact',
        link: "/contact"
    },
    {
        id: 'head6',
        name: 'Dropdown',
        dropDowns: [
            {
                id: "d1",
                name: "drop1",
                link: "/"
            },
            {
                id: "d2",
                name: "drop2",
                link: "/"
            }
        ]
    }
];

function Header() {
  return (
    <header className='header'> 
    <Container>
        <Navbar bg="dark" data-bs-theme="dark" key='lg' expand='lg' className=" mb-3" id='navbar'>
          <Container fluid>
            <Navbar.Brand href="#" className='logo-text'>
            <Image src={logo} width={50} className='me-2'/>
                Code Guide
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                {Navigations.map(nav => {
                if('dropDowns' in nav)
                {
                    return(
                        <>
                        <NavDropdown
                        title="Dropdown"
                         id={`offcanvasNavbarDropdown-expand-lg`}>
                        {nav.dropDowns.map(dropItem => {    
                            return(
                                <>
                                <NavDropdown.Item href={dropItem.link}>Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                    {dropItem.name}
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                </>
                            )
                        })}   
                        </NavDropdown>
                        </>
                    )
                }

                else{
                    return(
                      <Nav.Link href={`${nav.link}`}>{nav.name}</Nav.Link>
                    )
                }
                
            })}
            <Button className='nav_button'>Free Course</Button>
            </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </Container>
    </header>
  );
}

export default Header;