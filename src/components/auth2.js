import { auth, googleProvider } from "../config/firebase.js";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Auth2 = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log(auth?.currentUser?.email);
    
    const signIn = async () => {
        try 
        {
          await createUserWithEmailAndPassword(auth, email, password);
        } 
        catch (err) 
        {
          console.error(err);
        }
      };

      const signInWithGoogle = async () => {
        try {
          await signInWithPopup(auth, googleProvider);
        } catch (err) {
          console.error(err);
        }
      };

      const logout = async () => {
        try 
        {
          await signOut(auth);
        } 
        catch (err) 
        {
          console.error(err);
        }
      };

      //test functions
      const solveMath = () => 
      {
        alert("the result of 2+2 is " + 4);
      };
      const showCredentials = () => 
      {
        alert("email: " + email);
        alert("password: " + password);
      };
      //
    return (
      <div>      
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>

    );
};