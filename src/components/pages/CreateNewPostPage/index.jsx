import "./styles.css";
import {useForm} from "react-hook-form";
import {useNavigate} from 'react-router-dom'; 
import {Navbar} from "../../Navbar";


export const CreateNewPostPage = () => {

    const {register, handleSubmit} = useForm();

    const navigate = useNavigate();

    const submitNewPost = async(formVals) => {
        const formattedData = {
            fields: {
                Image: { stringValue: formVals.Image } 
            }
        }

        console.log(formVals, formattedData);
        try {
            const response = await fetch('https://firestore.googleapis.com/v1/projects/itec4012-socialmediasite/databases/(default)/documents/My Posts/', {
                headers: { 'Content-Type': 'application/json' },
                method: "POST",
                body: JSON.stringify(formattedData)
            })
            navigate('/me');
        } catch (error) {
            console.log("Error", error);
        }
    };

    return (
        <div className="NewPost-page">

            <div> <Navbar></Navbar> </div>

            <form className="formLayout" onSubmit={handleSubmit(submitNewPost)}>
                <h2> Create a new post: </h2>

                <br/>

                <label htmlFor="Image"> Image </label>

                <input {...register("Image")} name="Image" required/>

                <input type="submit" value="Create Post"/>

                <br/>
            </form>
        </div>
    );
};
