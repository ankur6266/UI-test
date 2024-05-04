import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';


const Navigations = [
    {
        id: 'head1',
        name: 'Following',
        link: "/home",
        svg: () => (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
          </svg>
        )
    },
    {
        id: 'head2',
        name: 'Unanswered',
        link: "#",
        svg: () => (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chat-left-dots" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
            <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
            </svg>
        )
    },    
    {
        id: 'head3',
        name: 'Relevant',
        link: "#",
        svg: () => (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
            </svg>
        )
    },    
    {
        id: 'head4',
        name: 'Popular',
        link: "#",
        svg: () => (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-graph-up-arrow" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"/>
            </svg>
        )
    }
];

function DashboardTabs() {
  return (
    <Container className='dash_tabs'>
        <Nav className='gap-5' variant="underline" defaultActiveKey="/home">
        {Navigations.map(nav => {
            return(
                <Nav.Item className=''>
                    <Nav.Link href={nav.link} className='d-flex align-items-center gap-3 text-secondary'>
                    {nav.svg && nav.svg()} {/* Conditionally render SVG */}
                    {nav.name}
                    </Nav.Link>
                </Nav.Item>
            )
        })}
        </Nav>

        <Card className='post_details mt-4 p-3 text-secondary'>
            <Row className='d-flex justify-content-between'>
                <Col className='d-flex gap-3 align-items-center'>
                    <Image className='rounded-circle' width={40} src="https://tovanidesign.com/wp-content/uploads/2019/02/C-_Users_Chrystina_Dropbox_tovani-design_size-examples-of-portraits_for-web_1-1-aspect-ratio-prints-at-square-for-social-media-for-web-photo-by-chrysti-tovani.jpg" />
                    <p>Michal John</p>
                </Col>
                <Col>
                    <p className='ms-auto w-max' style={{width: "max-content"}}>7 Dec, 2:25 PM</p>
                </Col>
                <Card.Title className='text-white pt-4'>
                    How do I return the response/result from a function foo that means that makes an asynchornus request ?
                </Card.Title>
                <Card.Body className='border border-secondary rounded m-3'>
                    <Image width={'100%'} src='https://cdn-media-1.freecodecamp.org/images/1*mXjNHOx9bbQ5D4sSUAX2Lg.png' />
                </Card.Body>
            </Row>
        </Card>

    </Container>
  );
}

export default DashboardTabs;