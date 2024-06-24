import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from 'react-bootstrap/Card';




function Blog() {
    return (
        <div>
            <div className="blog-head">
                <h2> Blog </h2>
                <p> Home/blog </p>

            </div>
            <Container>
                <Row>
                <Col xs={12} sm={12} md={6} lg={4}>
                       <Card className="blog-card">
                            <Card.Img variant="top"  src="1 (1).webp" className='zoom-in' style={{ height: "275px" }} />
                            <Card.Body>
                                <small className="text-muted">Last updated 3 mins ago</small>
                                <Card.Title className='box-head'>Attract Sales And Profits</Card.Title>
                                <Card.Text className='box-text'>
                                    A job ravenously while Far much that one rank beheld after outside....
                                </Card.Text>
                                <Card.Link className='card-link' href="#">Read More...</Card.Link>
                            </Card.Body>
                            </Card>
                        </Col>
                        {/* 2ND CARD 2ND IMAGE */}
                        <Col xs={12} sm={12} md={6} lg={4}>
                       <Card className="blog-card">
                            <Card.Img variant="top"  src="2 (1).webp" className='zoom-in' style={{ height: "275px" }} />
                            <Card.Body>
                                <small className="text-muted">Last updated 3 mins ago</small>
                                <Card.Title className='box-head'>Attract Sales And Profits</Card.Title>
                                <Card.Text className='box-text'>
                                    A job ravenously while Far much that one rank beheld after outside....
                                </Card.Text>
                                <Card.Link className='card-link' href="#">Read More...</Card.Link>
                            </Card.Body>
                            </Card>
                        </Col>
                        {/* 3RD CARD 3RD IMAGE */}
                        <Col xs={12} sm={12} md={6} lg={4}>
                       <Card className="blog-card">
                            <Card.Img variant="top"  src="3 (1).webp" className='zoom-in' style={{ height: "275px" }} />
                            <Card.Body>
                                <small className="text-muted">Last updated 3 mins ago</small>
                                <Card.Title className='box-head'>Attract Sales And Profits</Card.Title>
                                <Card.Text className='box-text'>
                                    A job ravenously while Far much that one rank beheld after outside....
                                </Card.Text>
                                <Card.Link className='card-link' href="#">Read More...</Card.Link>
                            </Card.Body>
                            </Card>
                        </Col>
                        {/* 4TH CARD 4TH IMAGE */}
                        <Col xs={12} sm={12} md={6} lg={4}>
                       <Card className="blog-card">
                            <Card.Img variant="top"  src="4 (1).webp" className='zoom-in' style={{ height: "275px" }} />
                            <Card.Body>
                                <small className="text-muted">Last updated 3 mins ago</small>
                                <Card.Title className='box-head'>Attract Sales And Profits</Card.Title>
                                <Card.Text className='box-text'>
                                    A job ravenously while Far much that one rank beheld after outside....
                                </Card.Text>
                                <Card.Link className='card-link' href="#">Read More...</Card.Link>
                            </Card.Body>
                            </Card>
                        </Col>
                        {/* 5TH CARD 5TH IMAGE */}
                        <Col xs={12} sm={12} md={6} lg={4}>
                       <Card className="blog-card">
                            <Card.Img variant="top"  src="5 (1).webp" className='zoom-in' style={{ height: "275px" }} />
                            <Card.Body>
                                <small className="text-muted">Last updated 3 mins ago</small>
                                <Card.Title className='box-head'>Attract Sales And Profits</Card.Title>
                                <Card.Text className='box-text'>
                                    A job ravenously while Far much that one rank beheld after outside....
                                </Card.Text>
                                <Card.Link className='card-link' href="#">Read More...</Card.Link>
                            </Card.Body>
                            </Card>
                        </Col>
                        {/* 6TH CARD 6TH IMAGE */}
                        <Col xs={12} sm={12} md={6} lg={4}>
                       <Card className="blog-card">
                            <Card.Img variant="top"  src="1 (1).webp" className='zoom-in' style={{ height: "275px" }} />
                            <Card.Body>
                                <small className="text-muted">Last updated 3 mins ago</small>
                                <Card.Title className='box-head'>Attract Sales And Profits</Card.Title>
                                <Card.Text className='box-text'>
                                    A job ravenously while Far much that one rank beheld after outside....
                                </Card.Text>
                                <Card.Link className='card-link' href="#">Read More...</Card.Link>
                            </Card.Body>
                            </Card>
                        </Col>
                </Row>
            </Container>
            <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>

        </div>
    )
}

export default Blog;