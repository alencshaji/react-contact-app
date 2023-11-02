import axios from 'axios';
import  './View.css'
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';

function Singleview() {

    const { uid } = useParams();
    const [allData, setData] = useState([]);
    const [singleData, setSingleData] = useState(null);

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const result = await axios.get('/db.json');
                setData(result.data.contacts);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchAllData();
    }, []);

    useEffect(() => {
        if (allData.length > 0) {
            const foundData = allData.find(item => item.mobile === uid);
            if (foundData) {
                setSingleData(foundData);
            }
        }
    }, [allData, uid]);

    return (
        <div>
            <div style={{ marginBottom: '5rem' }}>
                <Container>
                    {singleData ? (
                        <Row >
                            <Col>
                                <ListGroup>
                                    <ListGroup.Item action>
                                        <img style={{ height: '15rem', maxWidth: '50%' }} src={singleData.profile} alt="" />
                                    </ListGroup.Item>
                                    <ListGroup.Item action>
                                        {singleData.name}
                                    </ListGroup.Item>
                                    <ListGroup.Item action>
                                        {singleData.email}
                                    </ListGroup.Item>
                                    <ListGroup.Item action>
                                        {singleData.mobile}
                                    </ListGroup.Item>
                                    <ListGroup.Item action>
                                        {singleData.location}
                                    </ListGroup.Item>
                                </ListGroup>

                            </Col>
                        </Row>
                    ) : (
                        <p>Contact not found.</p>
                    )}
                </Container>

            </div>
        </div>
    )
}

export default Singleview
