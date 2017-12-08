import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class LoginPage extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          <div>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">
                  Email
                </Label>
                <Input 
                  type="email"
                  name= "email"
                  id= "exampleEmail"
                  placeholder="noreply@musiclist.com" 
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="password"
                />
              </FormGroup>
              <Button>Login</Button>      
            </Form>      
          </div>  
        </div>
      );
    }
  }
