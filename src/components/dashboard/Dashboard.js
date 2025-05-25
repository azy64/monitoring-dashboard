import { Col, Container, Row } from "react-bootstrap"
import Menu from "./Menu";
import Customer from "./customer/Customer";
import Company from "./company/Company";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import User from "./user/User";
import Around from "./site/Around";
import ControlPoint from "./control-point/ControlPoint";
import Agent from "./agent/Agent";
import NavBar from "./NavBar";
import AgentView from "./agent/AgentView";

const Dashboard = () => {
    return (
        <Container fluid style={{padding:"0px"}}>
            <Row style={style.container}>
            <Router>
                <Menu />
                <Col md={10} xs={8} style={style.container}>
                    <NavBar/>
                    <Routes>
                        <Route path="/" exact Component={Home} />
                        <Route path="/company" exact Component={Company} />
                        <Route path="/customer" exact Component={Customer} />
                        <Route path="/user" exact Component={User} />
                        <Route path="/around" exact Component={Around} />
                        <Route path="/agent" exact Component={Agent} />
                        <Route path="/control-point" exact Component={ControlPoint} />
                        <Route path="/agent-view" exact Component={AgentView} />
                    </Routes>
                </Col>
            </Router>
            </Row>
        </Container>
    )
}
const style={
    container:{
        margin:"0px",
        padding:"0px",
        Background:"yellow",
        height:"100vh",
        overflowY:"scroll"
    }
}
export default Dashboard;