import React, { Component } from "react";

 // Bootstrap
import { Container, Row, Card, CardColumns } from "react-bootstrap";

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
                        <CardColumns>
                            {this.state.images.map((info, index) => (
                                <Card key={index}>
                                    <Card.Img src={require(`./Images/${info}.JPG`)} />
                                </Card>
                            ))}
                        </CardColumns>
                    </Row>
                </Container>
            </div>
        );
    };
}

export default Home