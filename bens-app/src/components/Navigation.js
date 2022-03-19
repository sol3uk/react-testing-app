import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect expand='sm' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav>
                            <Nav.Link><Link to='/' >Home</Link></Nav.Link>
                            <Nav.Link><Link to='/find-game' >Find Game</Link></Nav.Link>
                            <Nav.Link><Link to='/tic-tac-toe' >Tic Tac Toe</Link></Nav.Link>
                            <Nav.Link><Link to='/counter' >Counter</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;