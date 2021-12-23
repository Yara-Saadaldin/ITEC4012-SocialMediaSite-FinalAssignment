import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

export const Logout = () => {

    const logoutUser = async() => {
        const auth = getAuth();
        try {
            await signOut(auth);
        } catch (error) {
            console.log(error)
        }
    }

    const navigate = useNavigate();
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate('/login');
            }
        })
    }, []);

    return (
        <button className="logout-btn" onClick={logoutUser}> Logout </button>
    )
}