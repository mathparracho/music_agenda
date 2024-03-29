import { auth, googleProvider } from "../config/firebase.js";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

export const Auth = () => {
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
            <h1>bem vindo: {auth?.currentUser?.email}</h1>
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
            <button onClick={signInWithGoogle}> Sign In With Google</button>
            <button onClick={logout}>Log Out</button>
        </div>
    );
};