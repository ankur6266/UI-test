import React from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'

export default function HomeCard() {
  return (
    <Container className='hommeCardComponent p-5'>
        <Row className='mb-5'>
            <h1>WE ARE GROWING</h1>
        </Row>
        <Row className='card-container gap-2'>
            <Col lg={4} className='card_1'>
                <Card style={{ width: '100%' }} className='pt-3 pb-3'>  
                    <Card.Body>
                        <Card.Title>Our Students</Card.Title>
                        {/* <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text> */}
                        <Row className='profiles_wrapper mt-3 mb-3'>
                            <Image src='https://tovanidesign.com/wp-content/uploads/2019/02/C-_Users_Chrystina_Dropbox_tovani-design_size-examples-of-portraits_for-web_1-1-aspect-ratio-prints-at-square-for-social-media-for-web-photo-by-chrysti-tovani.jpg' />
                            <Image src='https://members-api.parliament.uk/api/Members/4066/Portrait?cropType=OneOne' />
                            <Image src='https://tovanidesign.com/wp-content/uploads/2019/02/C-_Users_Chrystina_Dropbox_tovani-design_size-examples-of-portraits_for-web_1-1-aspect-ratio-prints-at-square-for-social-media-for-web-photo-by-chrysti-tovani.jpg' />
                            <Image src='https://members-api.parliament.uk/api/Members/4066/Portrait?cropType=OneOne' />
                            <Image src='https://tovanidesign.com/wp-content/uploads/2019/02/C-_Users_Chrystina_Dropbox_tovani-design_size-examples-of-portraits_for-web_1-1-aspect-ratio-prints-at-square-for-social-media-for-web-photo-by-chrysti-tovani.jpg' />
                        </Row>
                        <Card.Text>
                            <span style={{color: '#2700DF', fontSize: '30px', fontWeight: 600}}>14k+</span> trained student
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={4} className='card_2'>
            <Card style={{ width: '100%' }} className='pt-3 pb-3'>  
                    <Card.Body>
                        <Card.Title>Our Students</Card.Title>
                        {/* <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text> */}
                        <Row className='profiles_wrapper mt-3 mb-3'>
                            <Image src='https://tovanidesign.com/wp-content/uploads/2019/02/C-_Users_Chrystina_Dropbox_tovani-design_size-examples-of-portraits_for-web_1-1-aspect-ratio-prints-at-square-for-social-media-for-web-photo-by-chrysti-tovani.jpg' />
                            <Image src='https://members-api.parliament.uk/api/Members/4066/Portrait?cropType=OneOne' />
                            <Image src='https://tovanidesign.com/wp-content/uploads/2019/02/C-_Users_Chrystina_Dropbox_tovani-design_size-examples-of-portraits_for-web_1-1-aspect-ratio-prints-at-square-for-social-media-for-web-photo-by-chrysti-tovani.jpg' />
                            <Image src='https://members-api.parliament.uk/api/Members/4066/Portrait?cropType=OneOne' />
                            <Image src='https://tovanidesign.com/wp-content/uploads/2019/02/C-_Users_Chrystina_Dropbox_tovani-design_size-examples-of-portraits_for-web_1-1-aspect-ratio-prints-at-square-for-social-media-for-web-photo-by-chrysti-tovani.jpg' />
                        </Row>
                        <Card.Text>
                            <span className='' style={{color: '#2700DF', fontSize: '30px', fontWeight: 600}}>14k+</span> trained student
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </Col>
            <Col className='card_3'>
            <Card style={{ width: '100%' }} className='pt-3 pb-3'>  
                    <Card.Body>
                        <Card.Title>Our Students</Card.Title>
                        {/* <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text> */}
                        <Row className='profiles_wrapper mt-3 mb-3'>
                            <Image src='https://tovanidesign.com/wp-content/uploads/2019/02/C-_Users_Chrystina_Dropbox_tovani-design_size-examples-of-portraits_for-web_1-1-aspect-ratio-prints-at-square-for-social-media-for-web-photo-by-chrysti-tovani.jpg' />
                            <Image src='https://members-api.parliament.uk/api/Members/4066/Portrait?cropType=OneOne' />
                            <Image src='https://tovanidesign.com/wp-content/uploads/2019/02/C-_Users_Chrystina_Dropbox_tovani-design_size-examples-of-portraits_for-web_1-1-aspect-ratio-prints-at-square-for-social-media-for-web-photo-by-chrysti-tovani.jpg' />
                            <Image src='https://members-api.parliament.uk/api/Members/4066/Portrait?cropType=OneOne' />
                            <Image src='https://tovanidesign.com/wp-content/uploads/2019/02/C-_Users_Chrystina_Dropbox_tovani-design_size-examples-of-portraits_for-web_1-1-aspect-ratio-prints-at-square-for-social-media-for-web-photo-by-chrysti-tovani.jpg' />
                        </Row>
                        <Card.Text>
                            <span className='' style={{color: '#2700DF', fontSize: '30px', fontWeight: 600}}>14k+</span> trained student
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}
