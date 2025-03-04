import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import useLoginStore from '../../store/mystore';
import { Button } from 'react-bootstrap';

const NavBar = () => {
    const user = useLoginStore(state=>state.user);
    const logout = useLoginStore(state=>state.logout);
    const changeLoading = useLoginStore(state=>state.changeLoading);
   
    
    const clickHandler=()=>{
        changeLoading();
        logout();
    }
    return (
        <div style={style.container}>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">{user.typeUser}</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Button variant="danger" title='Logout' onClick={clickHandler}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
                        <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
                        </svg> 
                            </Button> 
                        </Navbar.Text>
                        <Navbar.Text>
                       
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default NavBar;

const style={
    container:{
        width:"100%",
        padding:"0px",
        margin:"0px",
        boxShadow:"5px 5px 5px rgba(10,12,12,.4)"
    }
}