import React, { Component } from "react";

 // Bootstrap
import { Container, Row, Col } from "react-bootstrap";

class Home extends Component {
    render() {
        return (
            <div>
                <Container>
                    <h1>Starwars Comic by Jonathan Morales</h1>
                    <p>Disclaimer: This is a fan made comic. I do not own or make any money from this comic. All characters are owned by Disney.</p>
                    <Row>
                        <Col md={12}>
                            
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    };
}

export default Home