import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { IoFilterSharp } from "react-icons/io5";
import { BsBriefcase } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { PiMoneyLight } from "react-icons/pi";
import { GoBookmark } from "react-icons/go";
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import Pagination from '@mui/material/Pagination';
// import PaginationItem from '@mui/material/PaginationItem';


function Findjobs() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="find-job">
            <div className="find-head">
                <h3>Home/Find</h3>
            </div>
            <Container>
                <Row>
                    <Col xs={12} lg={6} sm={6} md={6}>
                        <Button variant="primary" onClick={handleShow}
                            className="filter-btn">filter<IoFilterSharp />

                        </Button>
                        <Offcanvas show={show} onHide={handleClose} backdrop="static">
                            <Offcanvas.Header closeButton>

                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Offcanvas.Title style={{ paddingBottom: '15px' }}>Job Type</Offcanvas.Title>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="formSwitchDefault"></input>
                                    <label class="form-check-label" for="formSwitchDefault"> Freelancer</label>
                                </div>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="formSwitchDefault"></input>
                                    <label class="form-check-label" for="formSwitchDefault"> Full Time</label>
                                </div>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="formSwitchDefault"></input>
                                    <label class="form-check-label" for="formSwitchDefault"> Part Time</label>
                                </div>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="formSwitchDefault"></input>
                                    <label class="form-check-label" for="formSwitchDefault"> Temporary</label>
                                </div>
                                <Offcanvas.Title style={{ paddingBottom: '15px' }}>Date Posted</Offcanvas.Title>

                                <div class="custom-control custom-radio">
                                    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"></input>
                                    <label class="custom-control-label" for="customRadio1"> All</label>
                                </div>
                                <div class="custom-control custom-radio">
                                    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"></input>
                                    <label class="custom-control-label" for="customRadio1"> Last Hour</label>
                                </div>
                                <div class="custom-control custom-radio">
                                    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"></input>
                                    <label class="custom-control-label" for="customRadio1"> Last 24 Hour</label>
                                </div>
                                <div class="custom-control custom-radio">
                                    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"></input>
                                    <label class="custom-control-label" for="customRadio1"> Last 7 Days</label>
                                </div>
                                <div class="custom-control custom-radio">
                                    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"></input>
                                    <label class="custom-control-label" for="customRadio1"> Last 14 Days</label>
                                </div>
                                <div class="custom-control custom-radio">
                                    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"></input>
                                    <label class="custom-control-label" for="customRadio1"> Last 30 Days</label>
                                </div>
                                <Offcanvas.Title style={{ paddingBottom: '15px' }}>Experience Level</Offcanvas.Title>

                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="formSwitchDefault"></input>
                                    <label class="form-check-label" for="formSwitchDefault"> Fresh</label>
                                </div>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="formSwitchDefault"></input>
                                    <label class="form-check-label" for="formSwitchDefault"> 1 Year</label>
                                </div>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="formSwitchDefault"></input>
                                    <label class="form-check-label" for="formSwitchDefault"> 2 Year</label>
                                </div>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="formSwitchDefault"></input>
                                    <label class="form-check-label" for="formSwitchDefault"> 3 Year</label>
                                </div>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="formSwitchDefault"></input>
                                    <label class="form-check-label" for="formSwitchDefault">  4 Year</label>
                                </div>
                                <Offcanvas.Title style={{ paddingBottom: '15px' }}>Experience Level</Offcanvas.Title>
                                <Offcanvas.Title style={{ paddingBottom: '15px' }}>Tags</Offcanvas.Title>

                                <span class="inline-flex items-baselin">
                                            <ul className="tag-style-one">
                                                <li><a href="">App</a></li>
                                                <li><a href="">Administrative</a></li>
                                                <li className="active"><a href="">Andriod</a></li>
                                                <li><a href="">Wordpress</a></li>
                                                <li><a href="">Design</a></li>
                                                <li><a href="">React</a></li>

                                            </ul>
                                 </span>
                                 <Offcanvas.Title style={{backgroundColor:"#f3f7fb",paddingTop:"20px"}}>Recruiting?</Offcanvas.Title>
                                 <p>Advertise your jobs to millions of monthly users and search 15.8 million CVs in our database.</p>
                                        <Button>Start Recuriting Now</Button>
                            </Offcanvas.Body>
                        </Offcanvas>
                        <span>16 jobs</span>
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
                </Row>

                {/* <Pagination
                    count={10}
                    renderItem={(item) => (
                        <PaginationItem
                            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                            {...item}
                        />
                    )}
                /> */}
                <div class="card flex-row"><img class="card-img-right example-card-img-responsive" src="/postboot/assets/img/thumbnail.jpg" />
                    <div class="card-body">
                        <h4 class="card-title h5 h4-sm">Recruiting?
                        </h4>
                        <p class="card-text">Advertise your jobs to millions of monthly users and search 15.8 million
                            CVs in our database.</p>
                        <button type="button">start recuriting Now</button>
                    </div>
                </div>
            </Container >

        </div >
    )
}

export default Findjobs;