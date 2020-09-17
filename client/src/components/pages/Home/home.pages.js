import React, { Component } from "react";

// Bootstrap
import { Container, Row, Card, CardColumns } from "react-bootstrap";

class Home extends Component {
    render() {
        return (
            <div>
                <Container>
                    <h1 className="center font-holtwood">The Rise of Skywalker AU</h1>
                    <h3 className="center font-holtwood">A fan comic by Jonathan Morales</h3>
                    <p>Disclaimer:
                    This site contains copyrighted material the use of which has not always been specifically authorized by the copyright owner. In accord with our non-profit mission we are making such material available to fans of Star Wars in parody form in efforts to entertain such fans for free for the love of Star Wars. We believe this constitutes a “fair use” of any such copyrighted material as provided in Section 107 of the US copyright Law. In accordance with Title 17 U.S.C. Section 107, The material of this site is distributed without profit to those who have expressed a prior interest in receiving the included content.
                    This is a fan made comic. I do not make any money from this comic. All characters are owned by Disney.</p>
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
                            <Card style={{ width: '20rem' }} bg="dark">
                                <a href="/chapter?chapter3"><Card.Img src={require("../Images/chapter-3/page-1.JPG")} /></a>
                                <Card.Body>
                                    <Card.Title style={{ textAlign: 'center' }}>Chapter 3</Card.Title>
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