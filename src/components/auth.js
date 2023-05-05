import { auth } from "../config/firebase.js";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
            <input 
            placeholder="Email..."
            onChange={(e) => setEmail(e.target.value)}
            />
            <input 
            placeholder="Password..."
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={signIn}>Sign In</button>
            <button onClick={logout}>Log Out</button>
        </div>
    );
};