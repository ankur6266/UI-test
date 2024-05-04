import React from 'react'
import { Button, Card, Col, Container, Image, Row, Toast } from 'react-bootstrap'
import media from '../assets/media_image.png'
export default function SectionMediaWtxt() {
  return (
    <Container className='SectionMediaWtxt'>
        <Row>
            <Col lg={5} className='align-content-center d-flex justify-content-center align-items-center'>

                <Card className='textCard p-5'>
                <Toast
                className="d-inline-block"
                bg='success'>
          <Toast.Body className='success text-white'>
            Verified by Unacademy & Coursera
          </Toast.Body>
        </Toast>
                    <Card.Title>
                    <h2>Learn Code <span style={{color: '#EAE34A', fontSize: '50px'}}> &#60;&#62;</span><br/> From Top Coder </h2>
                    </Card.Title>
                    <Card.Text>
                        Get quality courses with ys the best price. Now you can get the best course from us. We have tip mentors around the globe.
                    </Card.Text>
                    <div className='textCard-btns d-flex justify-content-center gap-4'>
                        <Button className='textCard-btn1'>Get Started</Button>
                        <Button className='textCard-btn2'>How it works</Button>
                    </div>
                </Card>
            </Col>
            <Col lg={7}>
            <Image src={media} width={'100%'}/>
            </Col>
        </Row>
    </Container>
  )
}
