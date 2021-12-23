import './styles.css';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';


export const LoginOrSignup = () => {

    const [mode, setMode] = useState("login");

    const {register, handleSubmit} = useForm();

    const navigate = useNavigate();

    const loginUser = async(formVals) => {

        try {
            console.log("Login Submitted", formVals);
            const auth = getAuth();
            const loginUser = await signInWithEmailAndPassword(auth, formVals.user, formVals.password);
            navigate('/');
        } catch (error) {
            console.log("Error connecting to firebase", error)
        }

    }

    const signUpUser = async(formVals) => {

        console.log("Sign Up Submitted", formVals)
        const auth = getAuth();

        try {
            const signUpUser = await createUserWithEmailAndPassword(auth, formVals.user, formVals.password);

            console.log("New user was created", signUpUser);

            navigate('/');
        } catch (error) {

            console.log("Error from firebase", error)
        }

    }

    return (

        <div className="profile-page">

            {mode === "login" && (
                <form className="form-layout" onSubmit={handleSubmit(loginUser)}>

                    <h2> Sign In </h2>

                    <br/>

                    <label htmlFor="user"> Email </label>
                    <input type="email" name="user" required {...register('user')}/>

                    <label htmlFor="password"> Password </label>
                    <input type="password" name="password" required {...register('password')}/>

                    <input type="submit" value="Login"/>

                    <br/>

                    <p> Don't have an account yet?<buttons onClick={() => setMode("signup")}> Sign Up</buttons></p>

                </form>
            )}

            {mode === "signup" && (
                <form className="form-layout" onSubmit={handleSubmit(signUpUser)}>

                    <h2> Create an Account </h2>

                    <br/>

                    <label htmlFor="user"> Email </label>
                    <input type="email" name="user" required {...register('user')}/>

                    <label htmlFor="password"> Password </label>
                    <input type="password" name="password" required {...register('password')}/>

                    <label htmlFor="confirm-password"> Confirm Password </label>
                    <input type="password" name="confirm-password" required {...register('confirm-password')}/>

                    <input type="submit" value="Sign up"/>
                    <br/>

                    <p>Have an account already?<buttons onClick={() => setMode("login")}> Login</buttons> </p>

                </form>
            )}
        </div>
    )
}