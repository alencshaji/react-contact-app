import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function Contactcard({ item }) {
    return (
        <div>
            <Link to={`/view/${item.mobile}`} style={{ textDecoration: 'none' }}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.profile} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                            <p> {item.email}</p>
                            <p>{item.mobile}</p>
                            <p>{item.location}</p>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    )
}

export default Contactcard
