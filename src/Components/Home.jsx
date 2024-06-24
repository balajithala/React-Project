import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CiSearch } from "react-icons/ci";
import { BsBriefcase } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import { CiClock2 } from "react-icons/ci";
import { PiMoneyLight } from "react-icons/pi";
import { GoBookmark } from "react-icons/go";
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { Link, Outlet } from 'react-router-dom';
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { LiaCoinsSolid } from "react-icons/lia";
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';



function Home() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="Home">
            <div className="menu-section">
                <div className='nav-bar'>
                    <Navbar expand="lg" className="bg-body-tertiary=#">
                        <Container>
                            <img src="logo-2.svg" alt="myimage" className='home-logo' style={{ width: "10%", height: "100px" }} />
                            <Navbar.Brand href="#home"></Navbar.Brand>
                            <Navbar.Toggle img src="menu (1).png" alt="" onClick={handleShow} />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                <Link to="Home"><Nav.Link href="#home" id="basic-nav-dropdown">Home</Nav.Link></Link>
                                    <Link to="Findjobs"><Nav.Link href="#link" id="basic-nav-dropdown">Find jobs</Nav.Link></Link>
                                    <NavDropdown title="Employers" id="basic-nav-dropdown">
                                        <Link to="Employers"><NavDropdown.Item className='dropdown-hov' href="EmployersList"><li><a> Employers List</a></li></NavDropdown.Item></Link>
                                        <Link to="EmployersDashboard"><NavDropdown.Item className='dropdown-hov' href="#Employers Dashboard"> Employers Dashboard</NavDropdown.Item></Link>
                                    </NavDropdown>
                                    <NavDropdown title="Candiates" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">  Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Blog" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2"> Another action </NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Pages" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2"> Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <button className='login-btn'>Login / Register</button>
                                <button className='post-btn'>Job Post</button>{' '}
                            </Navbar.Collapse>

                            <Offcanvas show={show} onHide={handleClose}>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title><img src="logo-2.svg" alt="myimage" className='home-logo' style={{ width: "10%", height: "100px" }} /></Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                <Link to="Home"><Nav.Link href="#home" id="basic-nav-dropdown">Home</Nav.Link></Link>
                                    <Link to="Findjobs"><Nav.Link href="#link" id="basic-nav-dropdown">Find jobs</Nav.Link></Link>
                                    <NavDropdown title="Employers" id="basic-nav-dropdown">
                                        <Link to="Employers"><NavDropdown.Item className='dropdown-hov' href="EmployersList"><li><a> Employers List</a></li></NavDropdown.Item></Link>
                                        <Link to="EmployersDashboard"><NavDropdown.Item className='dropdown-hov' href="#Employers Dashboard"> Employers Dashboard</NavDropdown.Item></Link>
                                    </NavDropdown>
                                    <NavDropdown title="Candiates" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">  Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Blog" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2"> Another action </NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Pages" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2"> Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <button className='login-btn'>Login / Register</button>
                                <button className='post-btn'>Job Post</button>{' '}
                            </Navbar.Collapse>

                                </Offcanvas.Body>
                            </Offcanvas>
                        </Container>

                    </Navbar>
                </div>

                <p className='banner-head'>The Easiest Way to Get Your New Job</p>
                <Container>
                    <div className='search-sec'>
                        <Row>
                            <div className='oval-btn'>
                                <InputGroup className="input-box" >
                                    <Col xs={12} sm={12} md={12} lg={4}><Form.Control aria-label="First name" className='home-form' placeholder='Location' style={{
                                        height: "65px", borderBottomLeftRadius: "5rem", borderTopLeftRadius: "5rem"
                                    }} /></Col>
                                    <Col xs={12} sm={12} md={12} lg={3}><Form.Control aria-label="First name" className='home-form' placeholder='Location' style={{
                                        height: "65px"
                                    }} /></Col>
                                    <Col xs={12} sm={12} md={12} lg={3}><Form.Select aria-label="Default select example" className='home-form' style={{ height: "65px" }}>
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

                                <p text-align="center" style={{ paddingTop: "20px" }}>Popular Searches : Designer, Developer, Web, IOS, PHP, Senior, Engineer,</p>
                            </div>
                        </Row>
                    </div>
                </Container>
            </div>

            {/*  */}
            <div className="Home-job">
                <h2 className="title-sec">Most Popular Jobs</h2>
                <p className="title-secb">Know your worth and find the job that qualify your life</p>
                <Container>
                    <Row>
                        <ul className='tab-buttons'>

                            <button><li className='tab-btn'>All</li></button>
                            <button><li className='tab-btn'>Trending</li></button>
                            <button><li className='tab-btn'>Design</li></button>
                            <button><li className='tab-btn'>Marketing</li></button>
                            <button><li className='tab-btn'>Health</li></button>
                        </ul>
                    </Row>
                    <Row>
                        <Col xs={12} sm={6} md={10} lg={6}><div class="card flex-row">
                            <img class="card-img-left example-card-img-responsive" src="1-1.webp" />
                            <div class="card-body">
                                <h4 class="card-title h5 h4-lg">Software Engineer (Android), Librariese <GoBookmark /></h4>
                                <p class="card-text">
                                    <span className='brief-icon'><BsBriefcase /> Segment</span>
                                    <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                    <span className='clock-icon'><CiClock2 /> 11 hours ago</span>
                                    <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                <Stack direction="horizontal" gap={2}>
                                    <Badge pill="primary">
                                        Part-time
                                    </Badge>
                                    <Badge pill bg="primary">
                                        Private
                                    </Badge>
                                    <Badge pill bg="primary">
                                        Urgent
                                    </Badge>
                                </Stack>
                            </div>
                        </div></Col>
                        <Col xs={12} sm={6} md={10} lg={6}><div class="card flex-row">
                            <img class="card-img-left example-card-img-responsive" src="1-2.webp" />
                            <div class="card-body">
                                <h4 class="card-title h5 h4-sm">Recruiting Coordinator<GoBookmark /></h4>
                                <p class="card-text">
                                    <span className='brief-icon'><BsBriefcase /> Segment</span>
                                    <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                    <span className='clock-icon'><CiClock2 /> 11 hours ago</span>
                                    <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                <Stack direction="horizontal" gap={2}>
                                    <Badge pill="primary">
                                        Part-time
                                    </Badge>
                                    <Badge pill bg="primary">
                                        Private
                                    </Badge>
                                    <Badge pill bg="primary">
                                        Urgent
                                    </Badge>
                                </Stack>
                            </div>
                        </div></Col>
                        <Col xs={12} sm={6} md={10} lg={6}><div class="card flex-row">
                            <img class="card-img-left example-card-img-responsive" src="1-3.webp" />
                            <div class="card-body">
                                <h4 class="card-title h5 h4-sm">Recruiting Coordinator<GoBookmark /></h4>
                                <p class="card-text">
                                    <p class="card-text">
                                        <span className='brief-icon'><BsBriefcase /> Segment</span>
                                        <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                        <span className='clock-icon'><CiClock2 /> 11 hours ago</span>
                                        <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                    <Stack direction="horizontal" gap={2}>
                                        <Badge pill="primary">
                                            Part-time
                                        </Badge>
                                        <Badge pill bg="primary">
                                            Private
                                        </Badge>
                                        <Badge pill bg="primary">
                                            Urgent
                                        </Badge>
                                    </Stack></p>
                            </div>
                        </div></Col>
                        <Col xs={12} sm={6} md={10} lg={6}><div class="card flex-row">
                            <img class="card-img-left example-card-img-responsive" src="1-6.webp" />
                            <div class="card-body">
                                <h4 class="card-title h5 h4-sm">Recruiting Coordinator <GoBookmark /></h4>
                                <p class="card-text"> <p class="card-text">
                                    <span className='brief-icon'><BsBriefcase /> Segment</span>
                                    <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                    <span className='clock-icon'><CiClock2 /> 11 hours ago</span>
                                    <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                    <Stack direction="horizontal" gap={2}>
                                        <Badge pill="primary">
                                            Part-time
                                        </Badge>
                                        <Badge pill bg="primary">
                                            Private
                                        </Badge>
                                        <Badge pill bg="primary">
                                            Urgent
                                        </Badge>
                                    </Stack></p>
                            </div>
                        </div></Col>
                    </Row>
                </Container>
            </div>
            {/* HOME WORK SECTION */}
            <div className="Homework">
                <h1 className="work-head">How It Works?</h1>
                <p className="work-text">Job for anyone, anywhere</p>
                <div className='work-box'>
                    <Container>
                        <Row>

                            <Col xs={12} sm={6} lg={4} >
                                <img src="process-1.webp" alt="" srcset="" className='reg-img' />
                                <p className='reg-text'>Register an account to start</p>
                            </Col>
                            <Col xs={12} sm={6} lg={4}>
                                <img src="process-2.webp" alt="" srcset="" className='reg-img' />
                                <p className='reg-text'>Explore over thousands of resumes</p>
                            </Col>
                            <Col xs={12} sm={6} lg={4}>
                                <img src="process-3.webp" alt="" srcset="" className='reg-img' />
                                <p className='reg-text'>Find the most suitable candidate</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            {/*  TOP COMPANY REGISTERED SECTION*/}
            <div className="home-company">
                <h1 className="comp-head">Top Company Registered</h1>
                <p className="comp-text">Some of the companies we have helped recruit excellent applicants over the years.</p>
                <Container>
                    <Carousel className='carousel-box' data-bs-theme="">
                        <Carousel.Item>
                            {/* 1st Row 1st image */}
                            <Row>
                                <Col sm={12} xs={12} md={6} lg={3}>
                                    <Card text-align="center" >
                                        <Card.Img variant="top" src="company-1.webp"
                                            style={{ height: "90px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                                        <Card.Body>
                                            <Card.Title className='card-head'>Udemy</Card.Title>
                                            <Card.Text className='card-content'><p><IoLocationOutline /> London,UK </p></Card.Text>
                                            <Button variant="outline-primary rounded-pill">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                {/* 1st Row 2nd image */}
                                <Col sm={12} xs={12} md={6} lg={3}>
                                    <Card >
                                        <Card.Img variant="top" src="company-2.webp" style={{ height: "90px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                                        <Card.Body>
                                            <Card.Title className='card-head'>Udemy</Card.Title>
                                            <Card.Text className='card-content'><p><IoLocationOutline /> London,UK </p></Card.Text>
                                            <Button variant="outline-primary rounded-pill" className='' >Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                {/* 1st Row 3rd image */}
                                <Col sm={12} xs={12} md={6} lg={3}>
                                    <Card>
                                        <Card.Img variant="top" src="company-3.webp" style={{ height: "90px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                                        <Card.Body>
                                            <Card.Title className='card-head'>Udemy</Card.Title>
                                            <Card.Text className='card-content'><p><IoLocationOutline /> London,UK </p></Card.Text>
                                            <Button variant="outline-primary rounded-pill" className='' >Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                {/* 1st Row 4th image */}
                                <Col sm={12} xs={12} md={6} lg={3}>
                                    <Card >
                                        <Card.Img variant="top" src="company-4.webp" style={{ height: "90px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                                        <Card.Body>
                                            <Card.Title className='card-head'>Udemy</Card.Title>
                                            <Card.Text className='card-content'><p><IoLocationOutline /> London,UK </p></Card.Text>
                                            <Button variant="outline-primary rounded-pill" className='' >Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            {/* 2nd Row 1st image */}
                            <Row>
                                <Col sm={12} xs={12} md={6} lg={3}>
                                    <Card >
                                        <Card.Img variant="top" src="company-1.webp" style={{ height: "90px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                                        <Card.Body>
                                            <Card.Title className='card-head'>Udemy</Card.Title>
                                            <Card.Text className='card-content'><p><IoLocationOutline /> London,UK </p></Card.Text>
                                            <Button variant="outline-primary rounded-pill" className='' >Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                {/* 2nd Row 2nd image */}
                                <Col sm={12} xs={12} md={6} lg={3}>
                                    <Card >
                                        <Card.Img variant="top" src="company-2.webp" style={{ height: "90px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />

                                        <Card.Body>
                                            <Card.Title className='card-head'>Udemy</Card.Title>
                                            <Card.Text className='card-content'><p><IoLocationOutline /> London,UK </p></Card.Text>
                                            <Button variant="outline-primary rounded-pill" className='' >Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                {/* 2nd Row 3rd image */}
                                <Col sm={12} xs={12} md={6} lg={3}>
                                    <Card>
                                        <Card.Img variant="top" src="company-3.webp" style={{ height: "90px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                                        <Card.Body>
                                            <Card.Title className='card-head'>Udemy</Card.Title>
                                            <Card.Text className='card-content'><p><IoLocationOutline /> London,UK </p></Card.Text>
                                            <Button variant="outline-primary rounded-pill" className='' >Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                {/* 2nd Row 4th image */}
                                <Col sm={12} xs={12} md={6} lg={3}>
                                    <Card style={{ width: "18rem" }}>
                                        <Card.Img variant="top" src="company-4.webp" style={{ height: "90px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                                        <Card.Body>
                                            <Card.Title className='card-head'>Udemy</Card.Title>
                                            <Card.Text className='card-content'><p><IoLocationOutline /> London,UK </p></Card.Text>
                                            <Button variant="outline-primary rounded-pill" className='' >Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                {/* 3rd Row 1st image */}
                                <Col sm={12} xs={12} md={6} lg={3}>
                                    <Card >
                                        <Card.Img variant="top" src="company-1.webp" style={{ height: "90px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                                        <Card.Body>
                                            <Card.Title className='card-head'>Udemy</Card.Title>
                                            <Card.Text className='card-content'><p><IoLocationOutline /> London,UK </p></Card.Text>
                                            <Button variant="outline-primary rounded-pill" className='' >Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                {/* 3rd Row 2nd image */}
                                <Col sm={12} xs={12} md={6} lg={3}>
                                    <Card>
                                        <Card.Img variant="top" src="company-2.webp" style={{ height: "90px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                                        <Card.Body>
                                            <Card.Title className='card-head'>Udemy</Card.Title>
                                            <Card.Text className='card-content'><p><IoLocationOutline /> London,UK </p></Card.Text>
                                            <Button variant="outline-primary rounded-pill" className='rounded-pill' >Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                {/* 3rd Row 3rd image */}
                                <Col sm={12} xs={12} md={6} lg={3}>
                                    <Card>
                                        <Card.Img variant="top" src="company-3.webp" style={{ height: "90px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                                        <Card.Body>
                                            <Card.Title className='card-head'>Udemy</Card.Title>
                                            <Card.Text className='card-content'><p><IoLocationOutline /> London,UK </p></Card.Text>
                                            <Button variant="outline-primary rounded-pill" className='' >Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                {/* 3rd Row 4th image */}
                                <Col sm={12} xs={12} md={6} lg={3}>
                                    <Card >
                                        <Card.Img variant="top" src="company-4.webp" style={{ height: "90px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                                        <Card.Body>
                                            <Card.Title className='card-head'>Udemy</Card.Title>
                                            <Card.Text className='card-content'><p><IoLocationOutline /> London,UK </p></Card.Text>
                                            <Button variant="outline-primary rounded-pill" className='' >Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </div>

            {/* POPULAR JOB CATEGORY */}
            <div className='home-popular'>
                <h1 className='pop-head'>Popular Job Categories</h1>
                <p text align="center">2020 jobs live - 293 added today.</p>
                <Container>
                    <Row>
                        <Col xs={12} sm={6} md={10} lg={4}><div class="card flex-row">
                            <Button className='job-btn' variant="outline-primary" ><span className='job-logo'><LiaCoinsSolid /></span></Button>
                            <div class="card-body">
                                <h4 class="card-title h5 h4-lg"> Accounting/Finance</h4>
                                <p class="card-text">
                                    <span>(2 open position)</span></p>
                            </div>
                        </div></Col>
                        <Col xs={12} sm={6} md={10} lg={4}><div class="card flex-row">
                            <Button className='job-btn' variant="outline-primary" ><span className='job-logo'><HiOutlineSpeakerphone /></span></Button>
                            <div class="card-body">
                                <h4 class="card-title h5 h4-lg"> Accounting/Finance</h4>
                                <p class="card-text">
                                    <span>(2 open position)</span></p>
                            </div>
                        </div></Col>
                        <Col xs={12} sm={6} md={10} lg={4}><div class="card flex-row">
                            <img class="card-img-left example-card-img-responsive" src="and-logo.png" />
                            <div class="card-body">
                                <h4 class="card-title h5 h4-lg"> Accounting/Finance</h4>
                                <p class="card-text">
                                    <span>(2 open position)</span></p>
                            </div>
                        </div></Col>
                        <Col xs={12} sm={6} md={10} lg={4}><div class="card flex-row">
                            <img class="card-img-left example-card-img-responsive" src="and-logo.png" />
                            <div class="card-body">
                                <h4 class="card-title h5 h4-lg"> Accounting/Finance</h4>
                                <p class="card-text">
                                    <span>(2 open position)</span></p>
                            </div>
                        </div></Col>
                        <Col xs={12} sm={6} md={10} lg={4}><div class="card flex-row">
                            <img class="card-img-left example-card-img-responsive" src="and-logo.png" />
                            <div class="card-body">
                                <h4 class="card-title h5 h4-lg"> Accounting/Finance</h4>
                                <p class="card-text">
                                    <span>(2 open position)</span></p>
                            </div>
                        </div></Col>
                        <Col xs={12} sm={6} md={10} lg={4}><div class="card flex-row">
                            <img class="card-img-left example-card-img-responsive" src="and-logo.png" />
                            <div class="card-body">
                                <h4 class="card-title h5 h4-lg"> Accounting/Finance</h4>
                                <p class="card-text">
                                    <span>(2 open position)</span></p>
                            </div>
                        </div></Col>
                        <Col xs={12} sm={6} md={10} lg={4}><div class="card flex-row">
                            <img class="card-img-left example-card-img-responsive" src="and-logo.png" />
                            <div class="card-body">
                                <h4 class="card-title h5 h4-lg"> Accounting/Finance</h4>
                                <p class="card-text">
                                    <span>(2 open position)</span></p>
                            </div>
                        </div></Col>
                        <Col xs={12} sm={6} md={10} lg={4}><div class="card flex-row">
                            <img class="card-img-left example-card-img-responsive" src="and-logo.png" />
                            <div class="card-body">
                                <h4 class="card-title h5 h4-lg"> Accounting/Finance</h4>
                                <p class="card-text">
                                    <span>(2 open position)</span></p>
                            </div>
                        </div></Col>
                        <Col xs={12} sm={6} md={10} lg={4}><div class="card flex-row">
                            <img class="card-img-left example-card-img-responsive" src="and-logo.png" />
                            <div class="card-body">
                                <h4 class="card-title h5 h4-lg"> Accounting/Finance</h4>
                                <p class="card-text">
                                    <span>(2 open position)</span></p>
                            </div>
                        </div></Col>
                    </Row>
                </Container>
            </div>

            {/* RECENT NEWS ARTICLES */}

            <div className="home-news">
                <h1 className="artical-head">Recent News Articles</h1>
                <p className="artical-text">Fresh job related news content posted each day </p>
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={4}>
                            <Card.Img variant="top" src="1.webp" className='bg-image hover-zoom' style={{ height: "275px" }} />
                            <Card.Body>
                                <small className="text-muted">Last updated 3 mins ago</small>
                                <Card.Title className='box-head'>Attract Sales And Profits</Card.Title>
                                <Card.Text className='box-text'>
                                    A job ravenously while Far much that one rank beheld after outside....
                                </Card.Text>
                                <Card.Link className='card-link' href="#">Read More...</Card.Link>
                            </Card.Body>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4}>
                            <Card.Img variant="top" src="2.webp" className='bg-image hover-zoom' style={{ height: "275px" }} />
                            <Card.Body>
                                <small className="text-muted">Last updated 3 mins ago</small>
                                <Card.Title className='box-head'>Attract Sales And Profits</Card.Title>
                                <Card.Text className='box-text'>
                                    A job ravenously while Far much that one rank beheld after outside....
                                </Card.Text>
                                <Card.Link className='card-link' href="#">Read More...</Card.Link>
                            </Card.Body>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4}>
                            <Card.Img variant="top" src="3.webp" className='bg-image hover-zoom' style={{ height: "275px" }} />
                            <Card.Body>
                                <small className="text-muted">Last updated 3 mins ago</small>
                                <Card.Title className='box-head'>Attract Sales And Profits</Card.Title>
                                <Card.Text className='box-text'>
                                    A job ravenously while Far much that one rank beheld after outside....
                                </Card.Text>
                                <Card.Link className='card-link' href="#">Read More...</Card.Link>
                            </Card.Body>
                        </Col>
                    </Row>
                </Container>


                <div className='slider-logo'>
                    <div className='slider-track'>
                        <div className='slide'>
                            <Card body className='slider-body'>
                                <img src="1-1 (1).webp" alt="" className='slide-img' style={{ height: "35px" }} />
                                <img src="1-2 (1).webp" alt="" className='slide-img' style={{ height: "35px" }} />
                                <img src="1-6 (1).webp" alt="" className='slide-img' style={{ height: "35px" }} />
                                <img src="1-1 (1).webp" alt="" className='slide-img' style={{ height: "35px" }} />
                                <img src="1-2 (1).webp" alt="" className='slide-img' style={{ height: "35px" }} />
                                <img src="1-6 (1).webp" alt="" className='slide-img' style={{ height: "35px" }} />
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Home;