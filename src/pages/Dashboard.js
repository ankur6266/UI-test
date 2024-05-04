import React, { useState } from 'react'
import SectionMediaWtxt from '../components/SectionMediaWtxt'
import { Button, Col, Container, Row } from 'react-bootstrap'
import DashboardHeader from '../components/DashboardHeader'
import SidebarNavigation from '../components/SidebarNavigation'
import DashboardTabs from '../components/DashboardTabs'
import PopularQues from '../components/PopularQues'


export default function Dashboard() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

  return (
    <Container fluid className='dashboardPage'>
        <DashboardHeader />
        <Button onClick={toggleSidebar} variant='warning' className="toggle-button mt-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-filter-right" viewBox="0 0 16 16">
            <path d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5m0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5m0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5"/>
        </svg>
        </Button>
        <Row className='mt-4'>
            <Col lg={2} className={`sidebarNavs ${isSidebarOpen ? 'sidebarOpen' : 'sidebarClose'}`}>
                <Col className='d-flex justify-content-end'>
                <Button onClick={toggleSidebar} variant='secondary' className="toggle-button mt-2 mb-4 rounded-circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg>
                </Button>
                
                </Col>
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
