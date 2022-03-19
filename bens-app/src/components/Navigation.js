import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect expand='sm' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav>
                            <Nav.Link to='/'>Home</Nav.Link>
                            <Nav.Link to='/find-game'>Find Game</Nav.Link>
                            <Nav.Link to='/tic-tac-toe'>Tic Tac Toe</Nav.Link>
                            <Nav.Link to='/counter'>Counter</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;