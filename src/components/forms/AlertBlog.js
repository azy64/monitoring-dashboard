import { Button, Col, Row } from "react-bootstrap";

const AlertBlog = ({ title, content, onClose, buttons }) => {
    return (
        <div className="box">
            <main className="alert">
                <div className="lateral-close">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" onClick={onClose}
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round" className="tunaweza-close lucide lucide-x h-4 w-4">
                        <path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                </div>
                <div className="title">
                    <h4>{title}</h4>
                    <hr />
                </div>
                <div className="content">
                    {content}
                </div>
                <footer>
                    <hr />
                    <Row>
                        <Col>
                            <Button variant="outline-secondary" onClick={buttons[0].callBack}>{buttons[0].title} </Button>
                        </Col>
                        <Col>
                            <Button onClick={buttons[1].callBack} variant="danger">{buttons[1].title} </Button>
                        </Col>
                    </Row>
                </footer>
            </main>
        </div>
    )
}
export default AlertBlog;