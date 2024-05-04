import React from 'react'
import SectionMediaWtxt from '../components/SectionMediaWtxt'
import { Button, Col, Container, Row } from 'react-bootstrap'
import DashboardHeader from '../components/DashboardHeader'
import SidebarNavigation from '../components/SidebarNavigation'
import DashboardTabs from '../components/DashboardTabs'
import PopularQues from '../components/PopularQues'


export default function Dashboard() {
  return (
    <Container fluid className='dashboardPage'>
        <DashboardHeader />
        <Row className='p-4'>
            <Col lg={2} className='position-fixed'>
                <SidebarNavigation />
            </Col>
            <Col lg={7} className='ms-auto border-left'>
                <Row>
                    <Col className='text-white'>
                        <Row>
                            <Col xs={12} className='d-flex justify-content-between'>
                            <h3>All Questions</h3>
                            <Button className='d-flex align-items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                                </svg>
                                Ask a question
                            </Button>
                            </Col>
                            <Col>
                                <DashboardTabs/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col lg={3}>
                <PopularQues />
            </Col>
        </Row>
    </Container>
  )
}
