import React from 'react';
import { createUser } from '../actions/actionCreators';

import { Modal, Grid, Row, Col, Button } from 'react-bootstrap';

class UserModal extends React.Component {

    constructor(props) {
        super(props);
    }

    handleSubmit() {
        const name = document.getElementById("name").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const website = document.getElementById("website").value;

        let new_user = {};
            new_user.name = name;
            new_user.lastName = lastName;
            new_user.email = email;
            new_user.username = email.substr(0, email.indexOf('@'));
            new_user.password = password;
            new_user.website = website;

        this.props.createUser(new_user);
        this.props.hideModal();
    }

    render() {

        return (
            <Modal show={this.props.modal.showModal} bsSize="large" aria-labelledby="contained-modal-title-lg" id="createUserModal">
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form id="sendmail" data-async  method="post" role="form" className="form-group">

                        <Col lg={12} bsClass="well">
                            <Row>
                                <Col sm={6} md={6} lg={6}>
                                    <label>First Name</label>
                                    <input type="text" id="name" placeholder="Enter First Name here.." className="form-control" />
                                </Col>
                                <Col sm={6} md={6} lg={6}>
                                    <label>Last Name</label>
                                    <input type="text" id="lastName" placeholder="Enter Last Name here.." className="form-control" />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12} md={12} lg={12}>
                                    <label>Email Address</label>
                                    <input type="text" id="email" placeholder="Enter Email Address here.." className="form-control" />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12} md={12} lg={12}>
                                    <label>Password</label>
                                    <input type="password" id="password" placeholder="Enter Password here.." className="form-control" />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12} md={12} lg={12}>
                                    <label>Website</label>
                                    <input type="text" id="website" placeholder="Enter Website Name here.." className="form-control" />
                                </Col>
                            </Row> 
                        </Col>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="primary" onClick={this.handleSubmit.bind(this)}>Save User</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default UserModal;