import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { TiArrowRightOutline } from "react-icons/ti";
import { BsFillBriefcaseFill } from "react-icons/bs";
import Card from 'react-bootstrap/Card';
import { IoLocationOutline } from "react-icons/io5";
import { PiMoneyLight } from "react-icons/pi";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { MdOutlineRemoveRedEye } from "react-icons/md";




function EmployersDashboard() {
    return (
        <div className="">
            <div>

                <div className="container-fluid">
                    <Row>
                        <Col lg={3}>
                            <div className="sidebar-inner">
                                <ul>
                                    <li><a href=""></a><span><IoHomeOutline /></span>Home</li>
                                    <li><a href=""></a><span><FaRegUser /></span>Company Profile</li>
                                    <li><a href=""></a><span><TiArrowRightOutline /></span>Post A New Job</li>
                                    <li><a href=""></a>Manage Jobs</li>
                                    <li><a href=""></a>All Applicants</li>
                                    <li><a href=""></a>Shortlisted Resumes</li>
                                    <li><a href=""></a>Packages</li>
                                    <li><a href=""></a>Messages</li>
                                    <li><a href=""></a>Resume Alerts</li>
                                    <li><a href=""></a>Change Password</li>
                                    <li><a href=""></a>Logout</li>
                                    <li><a href=""></a>Delete Profile</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={9}>
                            <div className="sidebar-home">

                            </div>
                            <Row>
                                <Col lg={3} md={12} sm={12}>
                                    <div class="card">
                                        <div class="card-content">
                                            <div class="card-body">
                                                <div class="media d-flex">
                                                    <div class="align-self-center">
                                                        <i class="icon-pencil primary font-large-2 float-left"></i>
                                                    </div>
                                                    <div class="media-body text-right">
                                                        <h3>278</h3>
                                                        <span>New Posts</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={3} md={12} sm={12}>
                                    <div class="card">
                                        <div class="card-content">
                                            <div class="card-body">
                                                <div class="media d-flex">
                                                    <div class="align-self-center">
                                                        <i class="icon-pencil primary font-large-2 float-left"></i>
                                                    </div>
                                                    <div class="media-body text-right">
                                                        <h3>278</h3>
                                                        <span>New Posts</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={3} md={12} sm={12}>
                                    <div class="card">
                                        <div class="card-content">
                                            <div class="card-body">
                                                <div class="media d-flex">
                                                    <div class="align-self-center">
                                                        <i class="icon-pencil primary font-large-2 float-left"></i>
                                                    </div>
                                                    <div class="media-body text-right">
                                                        <h3>278</h3>
                                                        <span>New Posts</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={3} md={12} sm={12}>
                                    <div class="card">
                                        <div class="card-content">
                                            <div class="card-body">
                                                <div class="media d-flex">
                                                    <div class="align-self-center">
                                                        <i class="icon-pencil primary font-large-2 float-left"></i>
                                                    </div>
                                                    <div class="media-body text-right">
                                                        <h3>278</h3>
                                                        <span>New Posts</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={7} xs={12} sm={12}>
                                    <Card className="home-chart">
                                        <p className="chart-text">Your Profile Views</p>
                                        <select class="form-select-sm" aria-label="select example">
                                            <option value="">All</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                        </select>
                                        <Card.Img variant="top" src="download.png" />

                                    </Card>
                                </Col>
                                <Col lg={5}>
                                    <Card className="home-chart">
                                        <Card.Body>
                                            <h5 className="chart-text">Notifications</h5>
                                            <Card.Text>
                                                <span><p className="chart-icon" style={{ paddingLeft: "30px", paddingBottom: "10px" }}><BsFillBriefcaseFill /> Henry Wilson applied for a job Product Designer</p></span>
                                                <span><p className="chart-icon" style={{ paddingLeft: "30px", paddingBottom: "10px" }}><BsFillBriefcaseFill /> Raul Costa applied for a job Product Manager, Risk</p></span>
                                                <span><p className="chart-icon" style={{ paddingLeft: "30px", paddingBottom: "10px" }}><BsFillBriefcaseFill /> Jack Milk applied for a job Technical Architect</p></span>
                                                <span><p className="chart-icon" style={{ paddingLeft: "30px", paddingBottom: "10px" }}><BsFillBriefcaseFill /> Michel Arianapplied for a job Software Engineer</p></span>
                                                <span><p className="chart-icon" style={{ paddingLeft: "30px", paddingBottom: "10px" }}><BsFillBriefcaseFill /> Wade Warren applied for a job Web Developer</p></span>
                                                <span><p className="chart-icon" style={{ paddingLeft: "30px", paddingBottom: "10px" }}><BsFillBriefcaseFill /> Michel Arianapplied for a job Software Engineer</p></span>

                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>

                            <Col lg={12} md={10} sm={8} >

                                <Card>
                                    <Card.Body>
                                        <Card.Text>
                                            <p className="chart-text">Your Profile Views</p>
                                            <Row>
                                                <Col lg={6} sm={12} md={12}>
                                                    <div class="card flex-row"><img class="card-img-left example-card-img-responsive" src="candidate-1.webp" />
                                                        <div class="card-body">
                                                            <h4 class="card-title h5 h4-sm">Udemy</h4>
                                                            <p class="card-text">
                                                                <span style={{ color: "blue" }}>Ui Designer</span>
                                                                <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                                                <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                                            <Button style={{ height: "33px", padding: "5px", width: "13%" }} variant="secondary rounded-pill ">App</Button>{' '}
                                                            <Button style={{ height: "33px", padding: "5px", width: "15%" }} variant="secondary rounded-pill">Design</Button>{' '}
                                                            <Button style={{ height: "33px", padding: "5px", width: "15%" }} variant="secondary rounded-pill">Digital</Button>{' '}
                                                            <p className="tool-tip">
                                                                <Button type="button" variant="outline-primary" data-toggle="tooltip"
                                                                    data-placement="top" title="Tooltip on top"> <MdOutlineRemoveRedEye />
                                                                </Button>
                                                                <Button type="button" variant="outline-primary" data-toggle="tooltip"
                                                                    data-placement="top" title="Tooltip on top"> <MdOutlineRemoveRedEye />
                                                                </Button>
                                                                <Button type="button" variant="outline-primary" data-toggle="tooltip"
                                                                    data-placement="top" title="Tooltip on top"> <MdOutlineRemoveRedEye />
                                                                </Button>
                                                                <Button type="button" variant="outline-primary" data-toggle="tooltip"
                                                                    data-placement="top" title="Tooltip on top"> <MdOutlineRemoveRedEye />
                                                                </Button>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={6} sm={12} md={12}>
                                                    <div class="card flex-row"><img class="card-img-left example-card-img-responsive" src="candidate-2.webp" />
                                                        <div class="card-body">
                                                            <h4 class="card-title h5 h4-sm">Udemy</h4>
                                                            <p class="card-text">
                                                                <span style={{ color: "blue" }}>Ui Designer</span>
                                                                <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                                                <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                                            <Button style={{ height: "33px", padding: "5px", width: "13%" }} variant="secondary rounded-pill ">App</Button>{' '}
                                                            <Button style={{ height: "33px", padding: "5px", width: "15%" }} variant="secondary rounded-pill">Design</Button>{' '}
                                                            <Button style={{ height: "33px", padding: "5px", width: "15%" }} variant="secondary rounded-pill">Digital</Button>{' '}
                                                            <p className="tool-tip">
                                                            <Button type="button" variant="outline-primary" data-toggle="tooltip"
                                                                    data-placement="top" title="Tooltip on top"> <MdOutlineRemoveRedEye />
                                                                </Button>
                                                                </p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={6} sm={12} md={12}>
                                                    <div class="card flex-row"><img class="card-img-left example-card-img-responsive" src="candidate-3.webp" />
                                                        <div class="card-body">
                                                            <h4 class="card-title h5 h4-sm">Udemy</h4>
                                                            <p class="card-text">
                                                                <span style={{ color: "blue" }}>Ui Designer</span>
                                                                <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                                                <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                                            <Button style={{ height: "33px", padding: "5px", width: "13%" }} variant="secondary rounded-pill ">App</Button>{' '}
                                                            <Button style={{ height: "33px", padding: "5px", width: "15%" }} variant="secondary rounded-pill">Design</Button>{' '}
                                                            <Button style={{ height: "33px", padding: "5px", width: "15%" }} variant="secondary rounded-pill">Digital</Button>{' '}
                                                            <p className="tool-tip">
                                                                {['top', 'top', 'top', 'top'].map((placement) => (
                                                                    <OverlayTrigger
                                                                        key={placement}
                                                                        placement={placement}
                                                                        overlay={
                                                                            <Tooltip id={`tooltip-${placement}`}>
                                                                                Tooltip on <strong>{placement}</strong>.
                                                                            </Tooltip>
                                                                        }
                                                                    >
                                                                        <Button className="tip-btn" variant="outline-primary"><p className="tip-logo"><MdOutlineRemoveRedEye /></p></Button>
                                                                    </OverlayTrigger>
                                                                ))}</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={6} sm={12} md={12}>
                                                    <div class="card flex-row"><img class="card-img-left example-card-img-responsive" src="candidate-4.webp" />
                                                        <div class="card-body">
                                                            <h4 class="card-title h5 h4-sm">Udemy</h4>
                                                            <p class="card-text">
                                                                <span style={{ color: "blue" }}>Ui Designer</span>
                                                                <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                                                <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                                            <Button style={{ height: "33px", padding: "5px", width: "13%" }} variant="secondary rounded-pill ">App</Button>{' '}
                                                            <Button style={{ height: "33px", padding: "5px", width: "15%" }} variant="secondary rounded-pill">Design</Button>{' '}
                                                            <Button style={{ height: "33px", padding: "5px", width: "15%" }} variant="secondary rounded-pill">Digital</Button>{' '}
                                                            <p className="tool-tip">
                                                                {['top', 'top', 'top', 'top'].map((placement) => (
                                                                    <OverlayTrigger
                                                                        key={placement}
                                                                        placement={placement}
                                                                        overlay={
                                                                            <Tooltip id={`tooltip-${placement}`}>
                                                                                Tooltip on <strong>{placement}</strong>.
                                                                            </Tooltip>
                                                                        }
                                                                    >
                                                                        <Button className="tip-btn" variant="outline-primary"><p className="tip-logo"><MdOutlineRemoveRedEye /></p></Button>
                                                                    </OverlayTrigger>
                                                                ))}</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={6} sm={12} md={12}>
                                                    <div class="card flex-row"><img class="card-img-left example-card-img-responsive" src="candidate-5.webp" />
                                                        <div class="card-body">
                                                            <h4 class="card-title h5 h4-sm">Udemy</h4>
                                                            <p class="card-text">
                                                                <span style={{ color: "blue" }}>Ui Designer</span>
                                                                <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                                                <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                                            <Button style={{ height: "33px", padding: "5px", width: "13%" }} variant="secondary rounded-pill ">App</Button>{' '}
                                                            <Button style={{ height: "33px", padding: "5px", width: "15%" }} variant="secondary rounded-pill">Design</Button>{' '}
                                                            <Button style={{ height: "33px", padding: "5px", width: "15%" }} variant="secondary rounded-pill">Digital</Button>{' '}
                                                            <p className="tool-tip">
                                                                {['top', 'top', 'top', 'top'].map((placement) => (
                                                                    <OverlayTrigger
                                                                        key={placement}
                                                                        placement={placement}
                                                                        overlay={
                                                                            <Tooltip id={`tooltip-${placement}`}>
                                                                                Tooltip on <strong>{placement}</strong>.
                                                                            </Tooltip>
                                                                        }
                                                                    >
                                                                        <Button className="tip-btn" variant="outline-primary"><p className="tip-logo"><MdOutlineRemoveRedEye /></p></Button>
                                                                    </OverlayTrigger>
                                                                ))}</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={6} sm={12} md={12}>
                                                    <div class="card flex-row"><img class="card-img-left example-card-img-responsive" src="candidate-6.webp" />
                                                        <div class="card-body">
                                                            <h4 class="card-title h5 h4-sm">Udemy</h4>
                                                            <p class="card-text">
                                                                <span style={{ color: "blue" }}>Ui Designer</span>
                                                                <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                                                <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                                            <Button style={{ height: "33px", padding: "5px", width: "13%" }} variant="secondary rounded-pill ">App</Button>{' '}
                                                            <Button style={{ height: "33px", padding: "5px", width: "15%" }} variant="secondary rounded-pill">Design</Button>{' '}
                                                            <Button style={{ height: "33px", padding: "5px", width: "15%" }} variant="secondary rounded-pill">Digital</Button>{' '}
                                                            <p className="tool-tip">
                                                                {['top', 'top', 'top', 'top'].map((placement) => (
                                                                    <OverlayTrigger
                                                                        key={placement}
                                                                        placement={placement}
                                                                        overlay={
                                                                            <Tooltip id={`tooltip-${placement}`}>
                                                                                Tooltip on <strong>{placement}</strong>.
                                                                            </Tooltip>
                                                                        }
                                                                    >
                                                                        <Button className="tip-btn" variant="outline-primary"><p className="tip-logo"><MdOutlineRemoveRedEye /></p></Button>
                                                                    </OverlayTrigger>
                                                                ))}</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Col>
                    </Row>

                </div>

            </div>
            <div>

            </div>
        </div>
    )
}

export default EmployersDashboard;