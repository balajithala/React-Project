import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import { IoLocationOutline } from "react-icons/io5";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Candidateslist() {
    return (
        <div className="">
            <div className='candidate-form'>
                <Container>
                    <div className='search-sec'>
                        <Row>
                            <div className='candiadate-oval'>
                                <InputGroup className="candidate-box" >
                                    <Col xs={12} sm={12} md={12} lg={4}><Form.Control aria-label="First name" className='form-control' placeholder='Location' style={{
                                        height: "65px", borderBottomLeftRadius: "5rem", borderTopLeftRadius: "5rem"
                                    }} /></Col>
                                    <Col xs={12} sm={12} md={12} lg={3}><Form.Control aria-label="First name" className='form-control' placeholder='Location' style={{
                                        height: "65px"
                                    }} /></Col>
                                    <Col xs={12} sm={12} md={12} lg={3}><Form.Select aria-label="Default select example" className='form-control' style={{ height: "65px" }}>
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
                        </Row>
                    </div>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col xs={12} sm={10} lg={6}>
                        <Col xs={12} sm={12} md={12} lg={3}>
                            <Form.Select aria-label="Default select example" className='dropdown-control'
                                style={{ height: "40px", justifyContent: "flex-end" }}>
                                <option>Sort by menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Col>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={8} lg={4}>
                        <Card>
                            <Card.Img variant="top" src="candidate-1.webp"
                                style={{ height: "120px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                            <Card.Body>
                                <Card.Title className='card-head'><p>Darlene Robertson</p></Card.Title>
                                <Card.Text><p style={{ color: "blue", textAlign: "center" }}>UI Designer</p></Card.Text>
                                <Card.Text className='candidate-card'><p style={{ textAlign: "center" }}><IoLocationOutline /> London,UK  <LiaMoneyBillWaveAltSolid />  $99 / hour </p></Card.Text>
                                <p style={{textAlign:"center"}}>
                                <Button style={{ height: "35px", padding: "5px", width: "15%" }} className='candidate-btn' variant="secondary rounded-pill ">App</Button>{' '}
                                 <Button style={{ height: "35px", padding: "5px", width: "18%"}} className='candidate-btn' variant="secondary rounded-pill ">Design</Button>{' '}
                                 <Button style={{ height: "35px", padding: "5px", width: "18%" }} className='candidate-btn' variant="secondary rounded-pill ">Detail</Button>{' '}</p>
                                <Button className='card-button' variant="outline-primary">View Profile</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* 2 CARD 2 IMAGE */}
                    <Col xs={12} sm={12} md={8} lg={4}>
                        <Card>
                            <Card.Img variant="top" src="candidate-2.webp"
                                style={{ height: "120px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                            <Card.Body>
                                <Card.Title className='card-head'><p>Darlene Robertson</p></Card.Title>
                                <Card.Text><p style={{ color: "blue", textAlign: "center" }}>UI Designer</p></Card.Text>
                                <Card.Text className='candidate-card'><p style={{ textAlign: "center" }}><IoLocationOutline /> London,UK  <LiaMoneyBillWaveAltSolid />  $99 / hour </p></Card.Text>
                                <p style={{textAlign:"center"}}>
                                <Button style={{ height: "35px", padding: "5px", width: "15%" }} className='candidate-btn' variant="secondary rounded-pill ">App</Button>{' '}
                                 <Button style={{ height: "35px", padding: "5px", width: "18%"}} className='candidate-btn' variant="secondary rounded-pill ">Design</Button>{' '}
                                 <Button style={{ height: "35px", padding: "5px", width: "18%" }} className='candidate-btn' variant="secondary rounded-pill ">Detail</Button>{' '}</p>
                                <Button className='card-button' variant="outline-primary">View Profile</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                      {/* 3 CARD 3 IMAGE */}
                      <Col xs={12} sm={12} md={8} lg={4}>
                        <Card>
                            <Card.Img variant="top" src="candidate-3.webp"
                                style={{ height: "120px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                            <Card.Body>
                                <Card.Title className='card-head'><p>Darlene Robertson</p></Card.Title>
                                <Card.Text><p style={{ color: "blue", textAlign: "center" }}>UI Designer</p></Card.Text>
                                <Card.Text className='candidate-card'><p style={{ textAlign: "center" }}><IoLocationOutline /> London,UK  <LiaMoneyBillWaveAltSolid />  $99 / hour </p></Card.Text>
                                <p style={{textAlign:"center"}}>
                                <Button style={{ height: "35px", padding: "5px", width: "15%" }} className='candidate-btn' variant="secondary rounded-pill ">App</Button>{' '}
                                 <Button style={{ height: "35px", padding: "5px", width: "18%"}} className='candidate-btn' variant="secondary rounded-pill ">Design</Button>{' '}
                                 <Button style={{ height: "35px", padding: "5px", width: "18%" }} className='candidate-btn' variant="secondary rounded-pill ">Detail</Button>{' '}</p>
                                <Button className='card-button' variant="outline-primary">View Profile</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* 4 CARD 4 IMAGE */}
                    <Col xs={12} sm={10} md={8} lg={4}>
                        <Card style={{marginTop:"30px"}}>
                            <Card.Img variant="top" src="candidate-4.webp"
                                style={{ height: "120px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                            <Card.Body>
                                <Card.Title className='card-head'><p>Darlene Robertson</p></Card.Title>
                                <Card.Text><p style={{ color: "blue", textAlign: "center" }}>UI Designer</p></Card.Text>
                                <Card.Text className='candidate-card'><p style={{ textAlign: "center" }}><IoLocationOutline /> London,UK  <LiaMoneyBillWaveAltSolid />  $99 / hour </p></Card.Text>
                                <p style={{textAlign:"center"}}>
                                <Button style={{ height: "35px", padding: "5px", width: "15%" }} className='candidate-btn' variant="secondary rounded-pill ">App</Button>{' '}
                                 <Button style={{ height: "35px", padding: "5px", width: "18%"}} className='candidate-btn' variant="secondary rounded-pill ">Design</Button>{' '}
                                 <Button style={{ height: "35px", padding: "5px", width: "18%" }} className='candidate-btn' variant="secondary rounded-pill ">Detail</Button>{' '}</p>
                                <Button className='card-button' variant="outline-primary">View Profile</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* 5 CARD 5 IMAGE */}
                    <Col xs={12} sm={12} md={8} lg={4}>
                        <Card style={{marginTop:"30px"}}>
                            <Card.Img variant="top" src="candidate-1.webp"
                                style={{ height: "120px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                            <Card.Body>
                                <Card.Title className='card-head'><p>Darlene Robertson</p></Card.Title>
                                <Card.Text><p style={{ color: "blue", textAlign: "center" }}>UI Designer</p></Card.Text>
                                <Card.Text className='candidate-card'><p style={{ textAlign: "center" }}><IoLocationOutline /> London,UK  <LiaMoneyBillWaveAltSolid />  $99 / hour </p></Card.Text>
                                <p style={{textAlign:"center"}}>
                                <Button style={{ height: "35px", padding: "5px", width: "15%" }} className='candidate-btn' variant="secondary rounded-pill ">App</Button>{' '}
                                 <Button style={{ height: "35px", padding: "5px", width: "18%"}} className='candidate-btn' variant="secondary rounded-pill ">Design</Button>{' '}
                                 <Button style={{ height: "35px", padding: "5px", width: "18%" }} className='candidate-btn' variant="secondary rounded-pill ">Detail</Button>{' '}</p>
                                <Button className='card-button' variant="outline-primary">View Profile</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* 6 CARD 6 IMAGE */}
                    <Col xs={12} sm={12} md={8} lg={4}>
                        <Card style={{marginTop:"30px"}}>
                            <Card.Img variant="top" src="candidate-2.webp"
                                style={{ height: "120px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                            <Card.Body>
                                <Card.Title className='card-head'><p>Darlene Robertson</p></Card.Title>
                                <Card.Text><p style={{ color: "blue", textAlign: "center" }}>UI Designer</p></Card.Text>
                                <Card.Text className='candidate-card'><p style={{ textAlign: "center" }}><IoLocationOutline /> London,UK  <LiaMoneyBillWaveAltSolid />  $99 / hour </p></Card.Text>
                                <p style={{textAlign:"center"}}>
                                <Button style={{ height: "35px", padding: "5px", width: "15%" }} className='candidate-btn' variant="secondary rounded-pill ">App</Button>{' '}
                                 <Button style={{ height: "35px", padding: "5px", width: "18%"}} className='candidate-btn' variant="secondary rounded-pill ">Design</Button>{' '}
                                 <Button style={{ height: "35px", padding: "5px", width: "18%" }} className='candidate-btn' variant="secondary rounded-pill ">Detail</Button>{' '}</p>
                                <Button className='card-button' variant="outline-primary">View Profile</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* 7 CARD 7 IMAGE */}
                    <Col xs={12} sm={12} md={8} lg={4}>
                        <Card style={{marginTop:"30px"}}>
                            <Card.Img variant="top" src="candidate-3.webp"
                                style={{ height: "120px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                            <Card.Body>
                                <Card.Title className='card-head'><p>Darlene Robertson</p></Card.Title>
                                <Card.Text><p style={{ color: "blue", textAlign: "center" }}>UI Designer</p></Card.Text>
                                <Card.Text className='candidate-card'><p style={{ textAlign: "center" }}><IoLocationOutline /> London,UK  <LiaMoneyBillWaveAltSolid />  $99 / hour </p></Card.Text>
                                <p style={{textAlign:"center"}}>
                                <Button style={{ height: "35px", padding: "5px", width: "15%" }} className='candidate-btn' variant="secondary rounded-pill ">App</Button>{' '}
                                 <Button style={{ height: "35px", padding: "5px", width: "18%"}} className='candidate-btn' variant="secondary rounded-pill ">Design</Button>{' '}
                                 <Button style={{ height: "35px", padding: "5px", width: "18%" }} className='candidate-btn' variant="secondary rounded-pill ">Detail</Button>{' '}</p>
                                <Button className='card-button' variant="outline-primary">View Profile</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* 8 CARD 8 IMAGE */}
                    <Col xs={12} sm={12} md={8} lg={4}>
                        <Card style={{marginTop:"30px"}}>
                            <Card.Img variant="top" src="candidate-4.webp"
                                style={{ height: "120px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                            <Card.Body>
                                <Card.Title className='card-head'><p>Darlene Robertson</p></Card.Title>
                                <Card.Text><p style={{ color: "blue", textAlign: "center" }}>UI Designer</p></Card.Text>
                                <Card.Text className='candidate-card'><p style={{ textAlign: "center" }}><IoLocationOutline /> London,UK  <LiaMoneyBillWaveAltSolid />  $99 / hour </p></Card.Text>
                                <p style={{textAlign:"center"}}>
                                <Button style={{ height: "35px", padding: "5px", width: "15%" }} className='candidate-btn' variant="secondary rounded-pill ">App</Button>{' '}
                                 <Button style={{ height: "35px", padding: "5px", width: "18%"}} className='candidate-btn' variant="secondary rounded-pill ">Design</Button>{' '}
                                 <Button style={{ height: "35px", padding: "5px", width: "18%" }} className='candidate-btn' variant="secondary rounded-pill ">Detail</Button>{' '}</p>
                                <Button className='card-button' variant="outline-primary">View Profile</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* 9 CARD 9 IMAGE */}
                    <Col xs={12} sm={12} md={8} lg={4}>
                        <Card style={{marginTop:"30px"}}>
                            <Card.Img variant="top" src="candidate-1.webp"
                                style={{ height: "120px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                            <Card.Body>
                                <Card.Title className='card-head'><p>Darlene Robertson</p></Card.Title>
                                <Card.Text><p style={{ color: "blue", textAlign: "center" }}>UI Designer</p></Card.Text>
                                <Card.Text className='candidate-card'><p style={{ textAlign: "center" }}><IoLocationOutline /> London,UK  <LiaMoneyBillWaveAltSolid />  $99 / hour </p></Card.Text>
                                <p style={{textAlign:"center"}}>
                                <Button style={{ height: "35px", padding: "5px", width: "15%" }} className='candidate-btn' variant="secondary rounded-pill ">App</Button>{' '}
                                 <Button style={{ height: "35px", padding: "5px", width: "18%"}} className='candidate-btn' variant="secondary rounded-pill ">Design</Button>{' '}
                                 <Button style={{ height: "35px", padding: "5px", width: "18%" }} className='candidate-btn' variant="secondary rounded-pill ">Detail</Button>{' '}</p>
                                <Button className='card-button' variant="outline-primary">View Profile</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* 10 CARD 10 IMAGE */}
                    <Col xs={12} sm={12} md={8} lg={4}>
                        <Card style={{marginTop:"30px"}}>
                            <Card.Img variant="top" src="candidate-2.webp"
                                style={{ height: "120px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                            <Card.Body>
                                <Card.Title className='card-head'><p>Darlene Robertson</p></Card.Title>
                                <Card.Text><p style={{ color: "blue", textAlign: "center" }}>UI Designer</p></Card.Text>
                                <Card.Text className='candidate-card'><p style={{ textAlign: "center" }}><IoLocationOutline /> London,UK  <LiaMoneyBillWaveAltSolid />  $99 / hour </p></Card.Text>
                                <p style={{textAlign:"center"}}>
                                <Button style={{ height: "35px", padding: "5px", width: "15%" }} className='candidate-btn' variant="secondary rounded-pill ">App</Button>{' '}
                                 <Button style={{ height: "35px", padding: "5px", width: "18%"}} className='candidate-btn' variant="secondary rounded-pill ">Design</Button>{' '}
                                 <Button style={{ height: "35px", padding: "5px", width: "18%" }} className='candidate-btn' variant="secondary rounded-pill ">Detail</Button>{' '}</p>
                                <Button className='card-button' variant="outline-primary">View Profile</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* 11 CARD 11 IMAGE */}
                    <Col xs={12} sm={12} md={8} lg={4}>
                        <Card style={{marginTop:"30px"}}>
                            <Card.Img variant="top" src="candidate-3.webp"
                                style={{ height: "120px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                            <Card.Body>
                                <Card.Title className='card-head'><p>Darlene Robertson</p></Card.Title>
                                <Card.Text><p style={{ color: "blue", textAlign: "center" }}>UI Designer</p></Card.Text>
                                <Card.Text className='candidate-card'><p style={{ textAlign: "center" }}><IoLocationOutline /> London,UK  <LiaMoneyBillWaveAltSolid />  $99 / hour </p></Card.Text>
                                <p style={{textAlign:"center"}}>
                                <Button style={{ height: "35px", padding: "5px", width: "15%" }} className='candidate-btn' variant="secondary rounded-pill ">App</Button>{' '}
                                 <Button style={{ height: "35px", padding: "5px", width: "18%"}} className='candidate-btn' variant="secondary rounded-pill ">Design</Button>{' '}
                                 <Button style={{ height: "35px", padding: "5px", width: "18%" }} className='candidate-btn' variant="secondary rounded-pill ">Detail</Button>{' '}</p>
                                <Button className='card-button' variant="outline-primary">View Profile</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* 12 CARD 12 IMAGE */}
                    <Col xs={12} sm={12} md={8} lg={4}>
                        <Card style={{marginTop:"30px"}}>
                            <Card.Img variant="top" src="candidate-4.webp"
                                style={{ height: "120px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                            <Card.Body>
                                <Card.Title className='card-head'><p>Darlene Robertson</p></Card.Title>
                                <Card.Text><p style={{ color: "blue", textAlign: "center" }}>UI Designer</p></Card.Text>
                                <Card.Text className='candidate-card'><p style={{ textAlign: "center" }}><IoLocationOutline /> London,UK  <LiaMoneyBillWaveAltSolid />  $99 / hour </p></Card.Text>
                                <p style={{textAlign:"center"}}>
                                <Button style={{ height: "35px", padding: "5px", width: "15%" }} className='candidate-btn' variant="secondary rounded-pill ">App</Button>{' '}
                                 <Button style={{ height: "35px", padding: "5px", width: "18%"}} className='candidate-btn' variant="secondary rounded-pill ">Design</Button>{' '}
                                 <Button style={{ height: "35px", padding: "5px", width: "18%" }} className='candidate-btn' variant="secondary rounded-pill ">Detail</Button>{' '}</p>
                                <Button className='card-button' variant="outline-primary">View Profile</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Candidateslist