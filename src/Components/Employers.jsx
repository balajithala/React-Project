import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Pagination from 'react-bootstrap/Pagination';
import { IoLocationOutline } from "react-icons/io5";
import { BsBriefcase } from "react-icons/bs";
import Badge from 'react-bootstrap/Badge';

function Employers() {
    return(
    <div className="Employers-section">

        <div>
            
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.44173061785!2d76.88483257251707!3d11.014126297388282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2ssg!4v1718952536723!5m2!1sen!2ssg"
                width="1518" height="800" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='wrapper-input'>
            <InputGroup className="input-box" >
            
                <Col xs={12} sm={12} md={12} lg={4}><Form.Control aria-label="First name" className='form-control' placeholder='Location' style={{
                    height: "65px", borderBottomLeftRadius: "5rem", borderTopLeftRadius: "5rem"
                }} /></Col>
                <Col xs={12} sm={12} md={12} lg={3}><Form.Control aria-label="First name" className='form-control' placeholder='Location' style={{
                    height: "65px"
                }} /></Col>
                <Col xs={12} sm={12} md={12} lg={3}><Form.Select aria-label="Default select example" className='form-control' style={{ height: "65px" }}>  <button className='home-btn'>find jobs</button>
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>

                </Col>
                <Col xs={12} sm={12} md={12} lg={2}>
                    <button className='home-btn'>find jobs</button>
                </Col>
            </InputGroup>
        </div>
        <Container>
            <Row>
                <Col xs={12} lg={6} sm={6} md={6}>
                    <select class="form-select-sm" aria-label="select example">
                        <option value="">Founded date</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </select>
                </Col>
                <Col lg={3} xs={12} sm={12} md={4}>

                    <select class="form-select-sm" aria-label="select example">
                        <option value="">Sort by (default)</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </select>
                </Col>
                <Col lg={3} xs={12} sm={12} md={4}>
                    <select class="form-select-sm" aria-label="select example">
                        <option value="">All</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </select>
                </Col>

            </Row>
        </Container>
        <Container>
            <Row>
                <Col lg={6} sm={12} md={12}>
                    <div class="card flex-row"><img class="card-img-left example-card-img-responsive" src="company-1.webp" />
                        <div class="card-body">
                            <h4 class="card-title h5 h4-sm">Udemy</h4>
                            <p class="card-text">
                                <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                <span className='brief-icon'><BsBriefcase /> Accounting / Finance</span>
                                <Badge pill bg="primary">Open Jobs – 15</Badge></p>
                        </div>
                    </div>
                </Col>
                <Col lg={6} sm={12} md={12}>
                    <div class="card flex-row"><img class="card-img-left example-card-img-responsive" src="company-2.webp" />
                        <div class="card-body">
                            <h4 class="card-title h5 h4-sm">Udemy</h4>
                            <p class="card-text">
                                <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                <span className='brief-icon'><BsBriefcase /> Accounting / Finance</span>
                                <Badge pill bg="primary">Open Jobs – 15</Badge></p>
                        </div>
                    </div>
                </Col>
                <Col lg={6} sm={12} md={12}>
                    <div class="card flex-row"><img class="card-img-left example-card-img-responsive" src="company-3.webp" />
                        <div class="card-body">
                            <h4 class="card-title h5 h4-sm">Udemy</h4>
                            <p class="card-text">
                                <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                <span className='brief-icon'><BsBriefcase /> Accounting / Finance</span>
                                <Badge pill bg="primary">Open Jobs – 15</Badge></p>
                        </div>
                    </div>
                </Col>
                <Col lg={6} sm={12} md={12}>
                    <div class="card flex-row"><img class="card-img-left example-card-img-responsive" src="company-4.webp" />
                        <div class="card-body">
                            <h4 class="card-title h5 h4-sm">Udemy</h4>
                            <p class="card-text">
                                <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                <span className='brief-icon'><BsBriefcase /> Accounting / Finance</span>
                                <Badge pill bg="primary">Open Jobs – 15</Badge></p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        <div className='emloyer-footer'>
            Footer
        </div>

    </div>
)}

export default Employers;