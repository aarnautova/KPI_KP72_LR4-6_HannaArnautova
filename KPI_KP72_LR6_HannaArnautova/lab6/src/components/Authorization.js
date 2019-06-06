import React, {Component} from "react";
import {LinkContainer} from "react-router-bootstrap";
import {Form, Button, Alert} from "react-bootstrap"

class Authorization extends Component {
    state = {
        login: "",
        password: "",
        failedLogin: false,
        failedPassword : false
    };


    isValidLogin = (str) => {
        const nameEndIndex = str.length - 1;
        if (nameEndIndex === 0) return false;
        const coursePart = str.charAt(nameEndIndex);
        const namePart = str.slice(0, nameEndIndex);
        return !(isNaN(coursePart) || coursePart < 1 || coursePart > 6 || /\d/.test(namePart));
    };

    handleChange = (e) => {
        const inputStr = e.target.value;
        if (e.target.id === "login") {
            if (this.isValidLogin(inputStr)) {
                e.target.setCustomValidity("");
                if(this.state.password !== inputStr)
                    this.setState({failedPassword: true});
                this.setState({failedLogin: false, login : inputStr});
            } else {
                e.target.setCustomValidity("Wrong login format");
                this.setState({failedLogin: true});
            }
        }
        if (e.target.id === "password"){
            if(this.state.login === inputStr){
                e.target.setCustomValidity("");
                this.setState({failedPassword: false, password : inputStr});
            }else {
                e.target.setCustomValidity("Password doesn't match login");
                this.setState({failedPassword: true, password : inputStr});
            }
        }

        this.setState({
            [e.target.id]: e.target.value
        });
    };

    handleClick = (e) => {
        if(this.state.password === "" || this.state.login === "")
            e.preventDefault();
    };

    render() {
        return (
            <Form>
                <Form.Group controlId="login">
                    <Form.Label>Login</Form.Label>
                    {this.state.failedLogin
                    && <Alert variant="warning">
                        Note: login format: name + course, for example: mark5.
                    </Alert>}
                    <Form.Control type="text" placeholder="Enter login"
                                  onChange={this.handleChange}
                                  required/>
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    {this.state.failedPassword
                    && <Alert variant="danger">
                        Password doesn't match login.
                    </Alert>}
                    <Form.Control type="password" placeholder="Password" onChange={this.handleChange} required/>
                </Form.Group>
                <LinkContainer to={"/dashboard"}>
                <Button variant="outline-success" type="submit" onClick={this.handleClick}
                        disabled={this.state.failedLogin || this.state.failedPassword}>
                    Submit
                </Button>
                </LinkContainer>
            </Form>
        );
    }
}


export default Authorization;