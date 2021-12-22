import "./styles.css";
import {useEffect, useState} from 'react';
import { PostItems } from "../../PostItems";

import {getAuth, onAuthStateChanged} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';//instead of useHistory!!!!!



export const HomePage = () => {

    const [postInfo, setPostInfo] = useState([]);

    const [loading, setLoading] = useState(true);


    ////////use this to secure pages!!!
    const navigate = useNavigate();//instead of useHistory!!!!!

    //check if current user is logged into firebase
    useEffect(
        ()=> {
            const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
                if (!user){
                    navigate('/login');///instead of history push
                }
            })
        }, []
    );
    ////////////////////////////////

    useEffect(
        ()=> {
            getPostIfo();
        }, []
    );

    const getPostIfo = async()=> {
        try {
            const response = await fetch('https://firestore.googleapis.com/v1/projects/itec4012-socialmediasite/databases/(default)/documents/Post Data/')
            const data = await response.json();
            console.log(data);
            const formattedData = data.documents.map( (item) => {
                return item.fields
            });

            console.log(formattedData);
            
            setPostInfo(formattedData);


            setLoading(false);

        }catch(err){
            console.log(err);
            setLoading(false);
        }
    }
    return (
        <div className="homepage">
         
            <div className="post-container">
             {   
                postInfo.map((postitem) => (
                    <PostItems PostCaption={postitem.PostCaption.stringValue}  PostImage={postitem.PostImage.stringValue} ProfileImage={postitem.ProfileImage.stringValue} Username={postitem.Username.stringValue}/>
                ))
             }
            </div>


            {
                loading && <p>Loading data..</p>
            }
            
        </div>
    );
};