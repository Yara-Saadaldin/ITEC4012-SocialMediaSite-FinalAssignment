import {useState} from 'react';
import {useForm} from 'react-hook-form';

import './styles.css';

export const LoginOrSignup = () => {
    const [mode,setMode] = useState("login");

    const {register,handleSubmit} = useForm();

    const loginUser =(formVals)=>{
        console.log("Login Submitted", formVals)
    }

    const signUpUser = (formVals) => {
        console.log("Sign Up Submitted" , formVals)
    }

    return (
        <div className="profile-page">
            {mode === "login" && (
                <form className="form-layout" onSubmit={handleSubmit(loginUser)}>
                    <h2> Welcome back, please sign in!</h2>
                    <br/>

                    <label htmlFor="user"> Email</label>
                    <input type="email" name="user" required {...register('user')}/>

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required {...register('password')}/>
                    
                    <input type="submit" value="login"/>
                    <br/>

                    <p>dont have an account with us yet? create a new account with your email and password</p>
                    <button onClick={()=>setMode("signup")}>Sign Up</button>
                </form>
            )}

            {mode === "signup" && (
                <form className="form-layout" onSubmit={handleSubmit(signUpUser)}>
                    <h2> Create a new account</h2>
                    <br/>
                    
                    <label htmlFor="user"> Email</label>
                    <input type="email" name="user" required {...register('user')}/>

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required {...register('password')}/>

                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" name="confirm-password" required {...register('confirm-password')}/>
                    
                    <input type="submit" value="Sign up"/>
                    <br/>

                    <p>have an account already?</p>
                    <button onClick={()=>setMode("login")}>Login</button>
                </form>
            )}
        </div>
    )
}