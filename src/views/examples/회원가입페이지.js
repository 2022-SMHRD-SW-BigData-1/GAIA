import { React, useRef } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

function RegisterP() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <div
        className="left"
        style={{
          width: "50%",
          height: "100%",
          float: "left",
          backgroundColor: "white",
          boxSizing: "border-box",
        }}
      >
        <div className="filter" />
        <Container style={{ width: "100%", height: "100vh" }}>
          <Row>
            <Col className="ml-auto mr-auto" lg="12">
              <Card
                className="card-registersu ml-auto mr-auto"
                style={{
                  backgroundColor: "white",
                  width: "480px",
                  position: "sticky",
                  objectFit: "content",
                  marginTop: "50px",
                  height: "860px",
                }}
              >
                <h3 className="title mx-auto" style={{ fontSize: "40px" }}>
                  <Link to="/index">GAIA</Link>
                </h3>
                <h3
                  className="title mx-auto"
                  style={{ fontSize: "30px", marginTop: "5px" }}
                >
                  Sign Up
                </h3>
                <div className="social-line text-center">
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="facebook"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-facebook-square" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="google"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon"
                    color="twitter"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                </div>
                <br></br>
                <Form
                  className="register-form"
                  action="http://localhost:3007/register-page"
                  method="post"
                >
                  <div style={{ display: "flex" }}>
                    <label
                      style={{
                        color: "gray",
                        fontSize: "13px",
                        display: "inline-block",
                        whiteSpace: "nowrap",
                        marginTop: "10px",
                      }}
                    >
                      ?????????
                    </label>
                    <Input
                      placeholder="Email"
                      type="text"
                      name="id"
                      style={{
                        marginLeft: "15px",
                        background: "#EAEAEA",
                        width: "280px",
                      }}
                    />
                  </div>
                  <br />
                  <div style={{ display: "flex" }}>
                    <label
                      style={{
                        color: "gray",
                        fontSize: "13px",
                        display: "inline-block",
                        whiteSpace: "nowrap",
                        marginTop: "10px",
                        marginLeft: "-12px",
                      }}
                    >
                      ????????????
                    </label>
                    <Input
                      placeholder="Password"
                      type="password"
                      name="pw"
                      id="Pww"
                      style={{
                        marginLeft: "15px",
                        background: "#EAEAEA",
                        width: "280px",
                      }}
                    />
                  </div>
                  <br />
                  <div style={{ display: "flex" }}>
                    <label
                      style={{
                        color: "gray",
                        fontSize: "13px",
                        display: "inline-block",
                        whiteSpace: "nowrap",
                        marginTop: "10px",
                        marginLeft: "-50px",
                      }}
                    >
                      ?????????????????????
                    </label>
                    <Input
                      placeholder="Password"
                      type="password"
                      name="repw"
                      id="Pwwre"
                      style={{
                        marginLeft: "15px",
                        background: "#EAEAEA",
                        width: "280px",
                      }}
                    />
                  </div>
                  <br />
                  <div style={{ display: "flex" }}>
                    <label
                      style={{
                        color: "gray",
                        fontSize: "13px",
                        display: "inline-block",
                        whiteSpace: "nowrap",
                        marginTop: "10px",
                      }}
                    >
                      ?????????
                    </label>
                    <Input
                      placeholder="Nick"
                      type="text"
                      name="nick"
                      style={{
                        marginLeft: "15px",
                        background: "#EAEAEA",
                        width: "280px",
                      }}
                    />
                  </div>
                  <br />
                  <div style={{ display: "flex" }}>
                    <label
                      style={{
                        color: "gray",
                        fontSize: "13px",
                        display: "inline-block",
                        whiteSpace: "nowrap",
                        marginTop: "10px",
                        marginRight: "15px",
                      }}
                    >
                      ??????
                    </label>
                    <Input
                      placeholder="Name"
                      type="text"
                      name="name"
                      style={{
                        marginLeft: "15px",
                        background: "#EAEAEA",
                        width: "280px",
                      }}
                    />
                  </div>
                  <br />
                  <div style={{ display: "flex" }}>
                    <label
                      style={{
                        color: "gray",
                        fontSize: "13px",
                        display: "inline-block",
                        whiteSpace: "nowrap",
                        marginTop: "10px",
                        marginLeft: "-11px",
                      }}
                    >
                      ????????????
                    </label>
                    <Input
                      placeholder="yyyy-mm-dd"
                      pattern="\d{4}-\d{2}-\d{2}"
                      type="text"
                      name="birth"
                      style={{
                        marginLeft: "15px",
                        background: "#EAEAEA",
                        width: "280px",
                      }}
                    />
                  </div>
                  <br />
                  <div style={{ display: "flex" }}>
                    <label
                      style={{
                        color: "gray",
                        fontSize: "13px",
                        display: "inline-block",
                        whiteSpace: "nowrap",
                        marginTop: "1px",
                      }}
                    >
                      ??????
                    </label>
                    <div
                      style={{
                        marginLeft: "25px",
                        display: "flex",
                        color: "gray",
                      }}
                    >
                      <div style={{ marginLeft: "30px", fontSize: "15px" }}>
                        <Input
                          type="radio"
                          name="gender"
                          value="???"
                          style={{
                            background: "#EAEAEA",
                            accentColor: "gray",
                          }}
                        />
                        ??????
                      </div>
                      <div style={{ marginLeft: "45px", fontSize: "15px" }}>
                        <Input
                          type="radio"
                          name="gender"
                          value="???"
                          style={{
                            background: "#EAEAEA",
                            accentColor: "gray",
                          }}
                        />
                        ??????
                      </div>
                    </div>
                  </div>

                  <Button
                    block
                    className="btn-round"
                    color="info"
                    style={{ borderRadius: 5 }}
                    type="submit"
                  >
                    ??????????????????
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        className="right"
        style={{
          width: "50%",
          height: "1000px",
          float: "right",
          backgroundColor: "whitesmoke",
          boxSizing: "border-box",
        }}
      ></div>
    </div>
  );
}
export default RegisterP;
