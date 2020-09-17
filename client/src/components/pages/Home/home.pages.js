import React, { Component } from "react";

// Bootstrap
import { Container, Row, Card, CardColumns } from "react-bootstrap";

class Home extends Component {
    render() {
        return (
            <div>
                <Container>
                    <h1 className="center">The Rise of Skywalker AU</h1>
                    <h3 className="center">A fan comic by Jonathan Morales</h3>
                    <p>Disclaimer: This is a fan made comic. I do not own or make any money from this comic. All characters are owned by Disney.</p>
                    <Row>
                        <CardColumns>
                            <Card style={{ width: '18rem' }} bg="dark">
                                <a href="/chapter?chapter1"><Card.Img src={require("../Images/chapter-1/page-1.JPG")} /></a>
                                <Card.Body>
                                    <Card.Title style={{ textAlign: 'center' }}>Chapter 1</Card.Title>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '20rem' }} bg="dark">
                                <a href="/chapter?chapter2"><Card.Img src={require("../Images/chapter-2/page-1.JPG")} /></a>
                                <Card.Body>
                                    <Card.Title style={{ textAlign: 'center' }}>Chapter 2</Card.Title>
                                </Card.Body>
                            </Card>
                        </CardColumns>
                    </Row>
                </Container>
            </div>
        );
    };
}

export default Home