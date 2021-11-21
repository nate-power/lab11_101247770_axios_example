import React, { Component } from 'react';
import { Card, Col, Row, Button} from 'react-bootstrap';
import axios from "axios";

export default class PersonList extends Component {
    //Define state default values
    state = {
        persons: []
    }

     //Component Lifecycle Callback
    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
        .then(res => {
            console.log(res.data);
            const persons = res.data.results;
            this.setState({ persons });
        })
    }

    render() {
        return (
            <div>
                <h2 className="text-center bg-success">User List</h2>
                {
                    this.state.persons.map(person => (
                        <Card key={person.login.uuid}>
                            <Card.Header className="bg-info">
                                <h6>{`${person.name.title} ${person.name.first} ${person.name.last} - ${person.login.uuid}`}</h6>
                            </Card.Header>
                            <Card.Body className="bg-info">
                                <Row className="">
                                    <Col className="col-lg-2">
                                        <Row>
                                            <img className="Image img-fluid" src={person.picture.large} alt={`${person.name.first} ${person.name.last}`}></img>
                                        </Row>
                                        <Row>
                                            <Button className="btn-primary mx-auto mt-3 Details-btn">Details</Button>
                                        </Row>                                        
                                    </Col>
                                    <Col className="col-lg-10 justify-content-end">
                                        <Row>
                                            <Col className="col-sm-2"><p className="text-right">Username:</p></Col>
                                            <Col className="col-auto"><h5>{person.login.username}</h5></Col>
                                        </Row>
                                        <Row>
                                            <Col className="col-sm-2"><p>Gender:</p></Col>
                                            <Col className="col-auto"><p>{person.gender}</p></Col>
                                        </Row>
                                        <Row>
                                            <Col className="col-sm-2"><p>Time Zone Description:</p></Col>
                                            <Col className="col-auto"><p>{person.location.timezone.description}</p></Col>
                                        </Row>
                                        <Row>
                                            <Col className="col-sm-2"><p>Address:</p></Col>
                                            <Col className="col-auto"><p>{`${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.state},
                                         ${person.location.country} - ${person.location.postcode}`}</p></Col>
                                        </Row>
                                        <Row>
                                            <Col className="col-sm-2"><p>Email:</p></Col>
                                            <Col className="col-auto"><p>{person.email}</p></Col>
                                        </Row>
                                        <Row>
                                            <Col className="col-sm-2"><p>Birth Date and Age:</p></Col>
                                            <Col className="col-auto"><p>{`${person.dob.date} (${person.dob.age})`}</p></Col>
                                        </Row>
                                        <Row>
                                            <Col className="col-sm-2"><p>Register Date:</p></Col>
                                            <Col className="col-auto"><p>{person.registered.date}</p></Col>
                                        </Row>
                                        <Row>
                                            <Col className="col-sm-2"><p>Phone#:</p></Col>
                                            <Col className="col-auto"><p>{person.phone}</p></Col>
                                        </Row>
                                        <Row>
                                            <Col className="col-sm-2"><p>Cell#:</p></Col>
                                            <Col className="col-auto"><p>{person.cell}</p></Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    ))
                }
            </div>
        )
    }
}


