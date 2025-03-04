import { useState } from "react";
import { Form, Button, Row, Col,Image } from "react-bootstrap";
import useLoginStore from "../../../store/mystore";

const Login = () => {
    const[username,setUsername]= useState("");
    const[password,setPassword]=useState("");
    const handler=(caller,value)=>{
        caller(value.target.value);
    }
    const login = useLoginStore((state)=>state.login);
   
    const changeLoading = useLoginStore((state)=>state.changeLoading);
    const loginHandler=(username,password)=>{
        changeLoading();
        login(username,password);
    }
    return (
        
        <div className="login">
            <div className="panel" style={style.panelSize}>
                <Row>
                    <Col xs={6} md={6} className="m-auto text-center" style={{textAlign:"center"}}>
                        <Image src="/images/logo.png" rounded fluid />
                    </Col>
                </Row>
                <Form className="p-5 pt-0">
                    <Row className="pb-3">
                        <Form.Control type="email" placeholder="Your email"
                            onChange={value=>handler(setUsername,value)}
                        />
                    </Row>
                    <Row className="pb-3">
                        <Form.Control type="password" placeholder="Your password"
                            onChange={value=>handler(setPassword,value)}
                        />
                    </Row>
                    <Row>
                        <Button onClick={()=>{loginHandler(username,password)}}  style={style.button}>Login</Button>
                    </Row>
                </Form>
            </div>
            
        </div>
    )
}
const style = {
    panelSize: {
        width: "400px",
        padding: "3px",
    },
    button:{
        backgroundColor:"#EB1244",
        border:"1px solid #EB1244",
        color:"white"
    }
}
export default Login;