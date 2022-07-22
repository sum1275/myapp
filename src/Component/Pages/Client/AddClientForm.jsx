import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import "./AddClientForm.css";

function AddClientForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Client</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card body className="card-body">
            <Container>
              <Row className="card-row">
                <Col sm={6} className="card-column">
                  <Form>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formHorizontalEmail"
                    >
                      <div className="form-content">
                        <div className="form-content-section">
                          <Form.Label
                            column
                            sm={2}
                            style={{ width: "100%", fontWeight: "bold" }}
                          >
                            Client name :
                          </Form.Label>
                        </div>
                        <div className="form-content-section">
                          <Col sm={10}>
                            <Form.Control
                              type="email"
                              placeholder="Enter Client name"
                              style={{ width: "120%" }}
                            />
                          </Col>
                        </div>
                      </div>
                    </Form.Group>

                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formHorizontalPassword"
                    >
                      <div className="form-content">
                        <div className="form-content-section">
                          <Form.Label
                            column
                            sm={2}
                            style={{ width: "100%", fontWeight: "bold" }}
                          >
                            Contact number :
                          </Form.Label>
                        </div>
                        <div className="form-content-section ">
                          <Col sm={10}>
                            <Form.Control
                              type="password"
                              placeholder="Enter Contact Number"
                              style={{ width: "120%" }}
                            />
                          </Col>
                        </div>
                      </div>
                    </Form.Group>

                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formHorizontalPassword"
                    >
                      <div className="form-content">
                        <div className="form-content-section">
                          <Form.Label
                            column="sm"
                            lg={2}
                            style={{ width: "100%", fontWeight: "bold" }}
                          >
                            Landing url :
                          </Form.Label>
                        </div>
                        <div className="form-content-section">
                          <Col sm={10}>
                            <Form.Control
                              type="password"
                              placeholder="Enter Landing url "
                              column="sm"
                              lg={2}
                              style={{ width: "120%" }}
                            />
                          </Col>
                        </div>
                      </div>
                    </Form.Group>

                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formHorizontalPassword"
                    >
                      <div className="form-content">
                        <div className="form-content-section">
                          <Form.Label
                            column="sm"
                            lg={2}
                            style={{ width: "100%", fontWeight: "bold" }}
                          >
                            Failure url (Optional) :
                          </Form.Label>
                        </div>
                        <div className="form-content-section">
                          <Col sm={10}>
                            <Form.Control
                              type="password"
                              placeholder="Enter Failure url "
                              column="sm"
                              lg={2}
                              style={{ width: "120%" }}
                            />
                          </Col>
                        </div>
                      </div>
                    </Form.Group>

                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formHorizontalPassword"
                    >
                      <div className="form-content">
                        <div className="form-content-section">
                          <Form.Label
                            column="sm"
                            lg={2}
                            style={{ width: "100%", fontWeight: "bold" }}
                          >
                            Failure message (optional) :
                          </Form.Label>
                        </div>
                        <div className="form-content-section">
                          <Col sm={10}>
                            <Form.Control
                              type="password"
                              placeholder="Enter Failure message "
                              column="sm"
                              lg={2}
                              style={{ width: "120%" }}
                            />
                          </Col>
                        </div>
                      </div>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formHorizontalEmail"
                    >
                      <div className="form-content">
                        <div className="form-content-section">
                          <Form.Label
                            column
                            sm={2}
                            style={{ width: "100%", fontWeight: "bold" }}
                          >
                            Escalation DIDs :
                          </Form.Label>
                        </div>
                        <div className="form-content-section">
                          <Table>
                            <tbody>
                              <Form.Select
                                aria-label="Default select example"
                                style={{ width: "100%" }}
                              >
                                <option>--Select DID--</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </Form.Select>
                            </tbody>
                          </Table>
                        </div>
                      </div>
                    </Form.Group>
                  </Form>
                </Col>

                <Col sm={6} className="card-column">
                  <Form>
                    <Form>
                      <Form.Group
                        as={Row}
                        className="mb-3"
                        controlId="formHorizontalEmail"
                      >
                        <div className="form-content">
                          <div className="form-content-section">
                            <Form.Label
                              column
                              sm={2}
                              style={{ width: "100%", fontWeight: "bold" }}
                            >
                              Email address :
                            </Form.Label>
                          </div>
                          <div className="form-content-section">
                            <Col sm={10}>
                              <Form.Control
                                type="email"
                                placeholder="Enter email address "
                                style={{ width: "120%" }}
                              />
                            </Col>
                          </div>
                        </div>
                      </Form.Group>

                      <Form.Group
                        as={Row}
                        className="mb-3"
                        controlId="formHorizontalEmail"
                      >
                        <div className="form-content">
                          <div className="form-content-section">
                            <Form.Label
                              column
                              sm={2}
                              style={{ width: "100%", fontWeight: "bold" }}
                            >
                              Address :
                            </Form.Label>
                          </div>
                          <div className="form-content-section">
                            <Form.Control as="textarea" rows={3} />
                          </div>
                        </div>
                      </Form.Group>

                      <Form.Group
                        as={Row}
                        className="mb-3"
                        controlId="formHorizontalEmail"
                      >
                        <div className="form-content">
                          <div className="form-content-section">
                            <Form.Label
                              column
                              sm={2}
                              style={{ width: "100%", fontWeight: "bold" }}
                            >
                              Success url :
                            </Form.Label>
                          </div>
                          <div className="form-content-section">
                            <Col sm={10}>
                              <Form.Control
                                type="email"
                                placeholder="Enter success url"
                                style={{ width: "120%" }}
                              />
                            </Col>
                          </div>
                        </div>
                      </Form.Group>

                      <Form.Group
                        as={Row}
                        className="mb-3"
                        controlId="formHorizontalEmail"
                      >
                        <div className="form-content">
                          <div className="form-content-section">
                            <Form.Label
                              column
                              sm={2}
                              style={{ width: "100%", fontWeight: "bold" }}
                            >
                              Timeout :
                            </Form.Label>
                          </div>
                          <div className="form-content-section">
                            <Col sm={10}>
                              <Form.Control
                                type="email"
                                placeholder="Enter timeout"
                                style={{ width: "120%" }}
                              />
                            </Col>
                          </div>
                        </div>
                      </Form.Group>
                      <Form.Group
                        as={Row}
                        className="mb-3"
                        controlId="formHorizontalEmail"
                      >
                        <div className="form-content">
                          <div className="form-content-section ">
                            <Form.Label
                              column
                              sm={2}
                              style={{ width: "100%", fontWeight: "bold" }}
                            >
                              Login DID :
                            </Form.Label>
                          </div>
                          <div className="form-content-section ">
                            <Form.Select
                              aria-label="Default select example"
                              style={{ width: "100%" }}
                            >
                              <option>--Select client--</option>
                              <option value="1">1234567898</option>
                            </Form.Select>
                          </div>
                        </div>
                      </Form.Group>
                      <Form.Group
                        as={Row}
                        className="mb-3"
                        controlId="formHorizontalEmail"
                      >
                        <div className="form-content">
                          <div className="form-content-section">
                            <Form.Label
                              column
                              sm={2}
                              style={{ width: "100%", fontWeight: "bold" }}
                            >
                              SMS template (Optional) :
                            </Form.Label>
                          </div>
                          <div className="form-content-section">
                            <Form.Control as="textarea" rows={3} />
                          </div>
                        </div>
                      </Form.Group>
                    </Form>
                  </Form>
                </Col>
              </Row>
            </Container>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddClientForm;
