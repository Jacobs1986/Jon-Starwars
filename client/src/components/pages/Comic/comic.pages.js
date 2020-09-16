import React, { Component } from "react";

 // Bootstrap
import { Container, Row, Col, Image } from "react-bootstrap";

class Chapter extends Component {
    state = {
        images: [],
        title: ""
    }

    componentDidMount() {
        this.loadInfo();
    }

    loadInfo = () => {
        let url = window.location.search;
        let chapter = url.split("?")[1];
        switch(chapter) {
            case "chapter1":
                this.setState({
                    title: "Chapter 1",
                    images: ["page-1", "page-2", "page-3", "page-4", "page-5", "page-6", "page-7", "page-8", "page-9", "page-10","page-11", "page-12", "page-13", "page-14", "page-15", "page-16", "page-17", "page-18", "page-19", "page-20", "page-21", "page-22", "page-23", "page-24", "page-25", "page-26", "page-27", "page-28", "page-29", "page-30", "page-31", "page-31", "page-33", "page-34", "page-35", "page-36", "page-37", "page-38", "page-39", "page-40"]
                })
                break
            default: 
        }
    }

    render() {
        return (
            <div>
                <Container>
                    <h1 style={{ textAlign: 'center' }}>{this.state.title}</h1>
                    {this.state.images.map((image, index) => (
                        <Row key={index}>
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