import React from 'react'
import Header from '../components/Header';
import SectionMediaWtxt from '../components/SectionMediaWtxt';
import { Container } from 'react-bootstrap';
import HomeCard from '../components/HomeCard';
export default   function Home() {
  return (
    <Container fluid className='homePage'>
      <Header />
      <SectionMediaWtxt />
      <HomeCard />
    </Container>
  )
}
