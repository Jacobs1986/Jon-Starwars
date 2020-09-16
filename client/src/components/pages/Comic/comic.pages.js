import React, { Component } from "react";

 // Bootstrap
import { Container, Row, Col, Image } from "react-bootstrap";

class Chapter extends Component {
    state = {
        images: ["page-1", "page-2", "page-3", "page-4"],
        title: "Chapter 1"
    }

    render() {
        return (
            <div>
                <Container>
                    <h1 style={{ textAlign: 'center' }}>{this.state.title}</h1>
                    {this.state.images.map((image, index) => (
                        <Row>
                            <Col md={12}>
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