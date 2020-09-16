import React, { Component } from "react";

 // Bootstrap
import { Container, Row, Col, Image } from "react-bootstrap";

class Chapter extends Component {
    state = {
        images: [],
        title: ""
    }

    render() {
        return (
            <div>
                <Container>
                    <h1 style={{ textAlign: 'center' }}>{this.state.title}</h1>
                    {this.state.images.map((image, index) => (
                        <Row>
                            <Col md={12} key={index}>
                                <Image src={require(`../Images/chapter-1/${image}.JPG`)} fluid/>
                            </Col>
                        </Row>
                    ))}
                </Container>
            </div>
        );
    };
}

export default Chapter