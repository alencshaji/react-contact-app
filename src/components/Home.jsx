
import { Col, Container, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Contactcard from './Contactcard';


function Home() {
    const [contact, setValue] = useState([]);

    const fetchData = async () => {
        try {
            const result = await axios.get('/db.json');
            console.log(result);
            setValue(result.data.contacts);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);
  return (
    <>
    <Container style={{ marginBottom: '8rem', paddingBottom: '2rem' }}>
        <Row className='mt-5'>
            <Col className='text-center'>
                <h2 className='mt-3 text-danger'>Find the Best Person You Want To Connect</h2>
                <p className='fs-8 text-center'>Discover a world of connections with our
                 website. Explore a diverse range of contact information for individuals, making it simple to reach out and stay connected. Whether it's for personal or professional purposes, our platform provides easy access to essential contact details, 
                enhancing your networking experience.</p>
            </Col>
        </Row>
        <Row className=''>
            {contact.map((item) => (
                <Col className='mt-3 p-2' lg={4} md={4} sm={6} key={item.mobile}>
                   <Contactcard item={item}></Contactcard>
                </Col>
            ))}
        </Row>
    </Container>

</>
  )
}

export default Home
