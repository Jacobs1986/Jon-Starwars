import React, { Component } from "react";

 // Bootstrap
import { Container, Row, Card } from "react-bootstrap";

class Home extends Component {
    state= {
        images: ["page1", "page2", "page3", "page4"]
    }
    
    render() {
        return (
            <div>
                <Container>
                    <h1>Starwars Comic by Jonathan Morales</h1>
                    <p>Disclaimer: This is a fan made comic. I do not own or make any money from this comic. All characters are owned by Disney.</p>
                    <Row>
                        <Card style={{ width: '18rem'}} bg="dark">
                            <a href="/chapter?chapter1"><Card.Img src={require("../Images/chapter-1/page-1.JPG")} /></a>
                            <Card.Body>
                                <Card.Title style={{ textAlign: 'center' }}>Chapter 1</Card.Title>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </div>
        );
    };
}

export default Home