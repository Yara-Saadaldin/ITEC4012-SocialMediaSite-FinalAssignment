import "./styles.css";
import {useEffect, useState} from 'react';
import {MyPosts} from "../../MyPosts";
import {getAuth} from 'firebase/auth';
import {Navbar} from "../../Navbar";

export const ProfilePage = () => {

    const [postInfo,
        setPostInfo] = useState([]);

    const [loading,
        setLoading] = useState(true);

    const auth = getAuth();
    const user = auth.currentUser;

    console.log('User email: ', auth.currentUser.email);

    useEffect(() => {
        getPostIfo();
    }, []);

    const getPostIfo = async() => {
        try {
            const response = await fetch('https://firestore.googleapis.com/v1/projects/itec4012-socialmediasite/databases/' +
                    '(default)/documents/My Posts/')
            const data = await response.json();
            console.log(data);
            const formattedData = data
                .documents
                .map((myitem) => {
                    return myitem.fields
                });

            console.log(formattedData);

            setPostInfo(formattedData);

            setLoading(false);

        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    }
    return (

        <div className="profilepage">
            <div>
                <Navbar></Navbar>
            </div>

            <p>{user.email}</p>

            <div className="mypost-container">
                {postInfo.map((mypostitem) => (<MyPosts Image={mypostitem.Image.stringValue}/>))
}
            </div>

            {loading && <p>Loading data..</p>
}

        </div>
    );
};