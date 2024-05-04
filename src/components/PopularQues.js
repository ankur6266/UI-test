import React from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'

export default function PopularQues() {
  return (
    <Container className='text-white popularQuestions'>
        <h4>Popular Questions</h4>
        <Row className='card-container gap-2'>
            <Col md={12}>
                <Card style={{ width: '100%' }} className='text-secondary pt-3 pb-3'>  
                    <Card.Body>
                    <Row>
                    <Col className='d-flex gap-2 align-items-center'>
                        <Image className='rounded-circle' width={35} src="https://tovanidesign.com/wp-content/uploads/2019/02/C-_Users_Chrystina_Dropbox_tovani-design_size-examples-of-portraits_for-web_1-1-aspect-ratio-prints-at-square-for-social-media-for-web-photo-by-chrysti-tovani.jpg" />
                    <p>Michal John</p>
                    </Col>
                    <Col>
                            <p className='ms-auto w-max' style={{width: "max-content"}}>7 Dec, 2:25 PM</p>
                    </Col>
                    </Row>
                        <Card.Text className='pt-2 '>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Row className='ms-1 d-flex justify-content-start gap-2 quest-tags'>
                            
                                <Button variant="danger" className="">#java</Button>
                                <Button variant="info" className="">c++</Button>4
                                <Button variant="success" className="">#performance</Button>
                            
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={12}>
                <Card style={{ width: '100%' }} className='text-secondary pt-3 pb-3'>  
                    <Card.Body>
                    <Row>
                    <Col className='d-flex gap-2 align-items-center'>
                        <Image className='rounded-circle' width={35} src="https://tovanidesign.com/wp-content/uploads/2019/02/C-_Users_Chrystina_Dropbox_tovani-design_size-examples-of-portraits_for-web_1-1-aspect-ratio-prints-at-square-for-social-media-for-web-photo-by-chrysti-tovani.jpg" />
                    <p>Michal John</p>
                    </Col>
                    <Col>
                            <p className='ms-auto w-max' style={{width: "max-content"}}>7 Dec, 2:25 PM</p>
                    </Col>
                    </Row>
                        <Card.Text className='pt-2 '>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Row className='ms-1 d-flex justify-content-start gap-2 quest-tags'>
                            
                                <Button variant="danger" className="">#java</Button>
                            
                            
                                <Button variant="info" className="">c++</Button>
                            
                            
                                <Button variant="success" className="">#performance</Button>
                            
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={12}>
                <Card style={{ width: '100%' }} className='text-secondary pt-3 pb-3'>  
                    <Card.Body>
                    <Row>
                    <Col className='d-flex gap-2 align-items-center'>
                        <Image className='rounded-circle' width={35} src="https://tovanidesign.com/wp-content/uploads/2019/02/C-_Users_Chrystina_Dropbox_tovani-design_size-examples-of-portraits_for-web_1-1-aspect-ratio-prints-at-square-for-social-media-for-web-photo-by-chrysti-tovani.jpg" />
                    <p>Michal John</p>
                    </Col>
                    <Col>
                            <p className='ms-auto w-max' style={{width: "max-content"}}>7 Dec, 2:25 PM</p>
                    </Col>
                    </Row>
                        <Card.Text className='pt-2 '>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Row className='ms-1 d-flex justify-content-start gap-2 quest-tags'>
                            
                                <Button variant="danger" className="">#java</Button>
                            
                            
                                <Button variant="info" className="">c++</Button>
                            
                            
                                <Button variant="success" className="">#performance</Button>
                            
                        </Row>
                    </Card.Body>
                </Card>
            </Col>

        </Row>
    </Container>
  )
}
