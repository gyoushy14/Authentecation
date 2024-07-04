import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function FormExample() {
  const navigate = useNavigate();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    axios
      .post("http://localhost:3001/login", { name, password, email })
      .then((result) => {
        console.log(result)
        if(result.data=== "Success"){
            navigate("/home");
        }

      })
      .catch((error) => console.log(error));
  };

  return (
    <main className="ms-5 ps-5 d-flex justify-content-center  ">
      <div className="ms-5">
        <div className="col-12 p-5 bg-light  border border-3 border-primary rounded w-100">
          <h1 className="text-center mb-5">LOGIN FORM</h1>
          <Form
            noValidate
            validated={validated}
            className=""
            onSubmit={handleSubmit}
          >
            <Row className="mb-3 ">
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                  defaultValue=""
                  onChange={(e) => setpassword(e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label>Username</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(e) => setemail(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Button type="submit" className=" mb-3">
              Submit
            </Button>
          </Form>
          <Row className="mb-3 gap-3">
            <Link to="/regester" as={Col}>Go to Regester</Link>
            <Link as={Col}>
              Login
            </Link>
            <Link as={Col}>Already have an account</Link>
          </Row>
        </div>
      </div>
    </main>
  );
}

export default FormExample;
