import React, { Component } from "react";

// Bootstrap
import { Container, Row, Col, Image } from "react-bootstrap";

// styling
import "./comic.pages.css"

class Chapter extends Component {
    state = {
        images: [],
        folder: "",
        title: "",
        video1: "",
        video2: "",
        video3: ""
    }

    componentDidMount() {
        this.loadInfo();
    }

    loadInfo = () => {
        let url = window.location.search;
        let chapter = url.split("?")[1];
        switch (chapter) {
            case "chapter1":
                this.setState({
                    title: "Chapter 1",
                    folder: "chapter-1",
                    images: ["page-1", "page-2", "page-3", "page-4", "page-5", "page-6", "page-7", "page-8", "page-9", "page-10", "page-11", "page-12", "page-13", "page-14", "page-15", "page-16", "page-17", "page-18", "page-19", "page-20", "page-21", "page-22", "page-23", "page-24", "page-25", "page-26", "page-27", "page-28", "page-29", "page-30", "page-31", "page-31", "page-33", "page-34", "page-35", "page-36", "page-37", "page-38", "page-39", "page-40"]
                })
                break
            case "chapter2":
                this.setState({
                    title: "Chapter 2",
                    folder: "chapter-2",
                    images: ["page-1", "page-2", "page-3", "page-4", "page-5", "page-6", "page-7", "page-8", "page-9"],
                    video1: "chapter-2"
                })
                break
            case "chapter3":
                this.setState({
                    title: "Chapter 3",
                    folder: "chapter-3",
                    images: ["page-1", "page-2", "page-3", "page-4", "page-5", "page-6", "page-7", "page-8", "page-9", "page-10", "page-11"],
                    video1: "chapter-3a",
                    video2: "chapter-3b"
                })
                break
            case "chapter4":
                this.setState({
                    title: "Chapter 4",
                    folder: "chapter-4",
                    images: ["page-1", "page-2", "page-3", "page-4", "page-5", "page-6", "page-7", "page-8", "page-9", "page-10", "page-11", "page-12", "page-13", "page-14", "page-15", "page-16", "page-17", "page-18", "page-19", "page-20", "page-21", "page-22", "page-23", "page-24", "page-25", "page-26", "page-27", "page-28", "page-29"],
                    video1: "chapter-4"
                })
                break
            case "chapter5":
                this.setState({
                    title: "Chapter 5",
                    folder: "chapter-5",
                    images: ["page-1", "page-2", "page-3", "page-4", "page-5", "page-6", "page-7", "page-8", "page-9", "page-10", "page-11", "page-12", "page-13", "page-14", "page-15", "page-16", "page-17", "page-18", "page-19", "page-20", "page-21", "page-22", "page-23", "page-24", "page-25", "page-26", "page-27", "page-28", "page-29", "page-30", "page-31", "page-31", "page-33", "page-34", "page-35", "page-36"],
                    video1: "chapter-5a",
                    video2: "chapter-5b",
                    video3: "chapter-5c"
                })
                break
            case "chapter6":
                this.setState({
                    title: "Chapter 6",
                    folder: "chapter-6",
                    images: ["page-1", "page-2", "page-3", "page-4", "page-5", "page-6", "page-7", "page-8", "page-9", "page-10", "page-11", "page-12", "page-13", "page-14", "page-15", "page-16", "page-17", "page-18", "page-19", "page-20", "page-21", "page-22", "page-23", "page-24", "page-25", "page-26", "page-27", "page-28", "page-29", "page-30"],
                    video1: "chapter-6"
                })
                break
            default:
        }
    }

    render() {
        const thereIsVideo1 = this.state.video1;
        const thereIsVideo2 = this.state.video2;
        const thereIsVideo3 = this.state.video3;
        return (
            <div>
                <Container>
                    <h1 style={{ textAlign: 'center' }}>{this.state.title}</h1>
                    {thereIsVideo1
                        ? <video width="100%" controls>
                            <source src={require(`../Videos/${this.state.video1}.MP4`)} />
                        </video>
                        : <div></div>
                    }
                    {thereIsVideo2
                        ? <video width="100%" controls>
                            <source src={require(`../Videos/${this.state.video2}.MP4`)} />
                        </video>
                        : <div></div>
                    }
                    {thereIsVideo3
                        ? <video width="100%" controls>
                            <source src={require(`../Videos/${this.state.video3}.MP4`)} />
                        </video>
                        : <div></div>
                    }
                    {this.state.images.map((image, index) => (
                        <Row key={index}>
                            <Col md={12}>
                                <Image src={require(`../Images/${this.state.folder}/${image}.JPG`)} fluid />
                            </Col>
                        </Row>
                    ))}
                    <a href="/">Back</a>
                </Container>
            </div>
        );
    };
}

export default Chapter