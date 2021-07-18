import './App.css';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { FacebookLoginButton, InstagramLoginButton, TwitterLoginButton } from 'react-social-login-buttons';

function App() {
  return (
    <div className="App">
      <Form className="form">
        <h1><span className="kabrera">kabrera</span>.com</h1>
        <h2>Welcome</h2>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" placeholder="Email"></Input>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" placeholder="Password"></Input>
        </FormGroup>
        <Button className="mt-3 mb-3 btn-dark">Log in</Button>
        <div>Or continue with your social account</div>
        <FacebookLoginButton className="mt-3 mb-3"/>
        <TwitterLoginButton className="mt-3 mb-3"/>
        <InstagramLoginButton className="mt-3 mb-3"/>
        <div>
          <a href='/sign-up' className="link">Sign up</a>
          <span className="p-2">|</span>
          <a href='/forgot-password'className="link">Forgot Password</a>

        </div>
      </Form>
      
      
    </div>
  );
}

export default App;
