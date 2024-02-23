import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselCard = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <div className="d-flex justify-content-center">
                    <Card style={{ width: '18rem', backgroundColor: 'black' }}>
                        <Card.Img variant="top" src="https://via.placeholder.com/150" />
                        <Card.Body style={{ backgroundColor: '#f5f5f5' }}>
                            <Card.Title style={{ color: 'black' }}>Card title 1</Card.Title>
                            <Card.Text style={{ color: 'black' }}>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-flex justify-content-center">
                    <Card style={{ width: '18rem', backgroundColor: 'black' }}>
                        <Card.Img variant="top" src="https://via.placeholder.com/150" />
                        <Card.Body style={{ backgroundColor: '#f5f5f5' }}>
                            <Card.Title style={{ color: 'black' }}>Card title 2</Card.Title>
                            <Card.Text style={{ color: 'black' }}>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselCard;
