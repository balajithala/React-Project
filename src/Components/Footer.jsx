import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from 'react-bootstrap/Form';



function Footer() {
    return (
        <div className="Footer">
            <h1 className="footer-section">Subscribe Our Newsletter</h1>
            <p className="footer-text">We don’t send spam so don’t worry.</p>
            <Container>
                <Row textAlign="center">
                    <Col xs={12} sm={12} md={12} lg={5}><Form.Control aria-label="First name" className="form-footer" placeholder='Location' 
                    style={{ height: "65px",borderBottomLeftRadius: "5rem", borderTopLeftRadius: "5rem", 
                        borderBottomRightRadius: "5rem", borderTopRightRadius: "5rem"
                    }} /></Col>
                    <Col xs={12} sm={12} md={12} lg={5}>
                        <button className="input-btn" type="button">subscribe</button>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col lg={3} sm={12} md={6}>
                    <img src="logo-2.svg" alt="" className="footer-img" />
                      <p className="img-address">Call us<br></br>
                        123 456 7890<br></br>
                        329 Queensberry Street, North Melbourne VIC
                       3051, Australia.<br></br>
                      support@superio.com</p>

                    </Col>
                    <Col lg={3} sm={12} md={7}>
                        <p className="footer-head" style={{fontSize:"17px"}}>For Candidates
                        <ul>
                            <li><a href="">Browse Jobs</a></li>
                            <li><a href="">Browse Categories</a></li>
                            <li><a href="">Candidate Dashboard</a></li>
                            <li><a href="">Job Alerts</a></li>
                            <li><a href=""> My Bookmarks</a></li>
                        </ul></p>

                    </Col>
                    <Col lg={2} sm={12} md={5}>
                        <p className="footer-head" style={{fontSize:"17px"}}>For Employers
                        <ul>
                            <li><a href="">Browse Candiates</a></li>
                            <li><a href="">Employers Dashboard</a></li>
                            <li><a href="">Add Job</a></li>
                            <li><a href="">Job Packages</a></li>
                        </ul></p>

                    </Col>
                    <Col lg={2} sm={12} md={6}>
                    <p className="footer-head" style={{fontSize:"17px"}}>About As
                        <ul>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Job Page Invoice</a></li>
                            <li><a href="">Browse Jobs</a></li>
                            <li><a href="">Term Page</a></li>
                            <li><a href="">Contact</a></li>
                            </ul></p></Col>
                    <Col lg={2} sm={12} md={6}>
                    <p className="footer-head">Mobile Apps</p></Col>

                </Row>
            </Container>

        </div>
    )
}

export default Footer;