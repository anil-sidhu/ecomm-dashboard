import { Navbar, Nav,NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

function Header() {
    let history=useHistory();
    let user= JSON.parse(localStorage.getItem('user-info'));
    console.warn("user",user);
    function logout()
    {
        localStorage.clear();
        history.push('/login')
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto nav_bar_wrapper">
                    {
                        localStorage.getItem('user-info') ?
                            <>
                                <Link to="/" >Product List</Link>
                                <Link to="/add" >Add Product</Link>
                                <Link to="/update"  >Update Product</Link>
                            </>
                            :
                            <>
                                <Link to="/login"  >Login </Link>
                                <Link to="/register"  >Register </Link>
                            </>
                    }
                   


                </Nav>
                <Nav>
                        {
                            localStorage.getItem('user-info') ?
                            <NavDropdown title={user && user.name}>
                                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                                <NavDropdown.Item>Profile</NavDropdown.Item>

                            </NavDropdown>
                            :null
                        }
                    </Nav>
            </Navbar>
        </div>
    )
}

export default Header