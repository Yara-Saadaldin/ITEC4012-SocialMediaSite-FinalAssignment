import './styles.css';

export const PostItems = (props) => {
    const {PostCaption, PostImage, ProfileImage, Username} = props;

    return (
        <div className="postitem">

            <div className="user">
                <img className="profile-image" src={ProfileImage} alt={Username + "'s profile image"}/>
                <h1 className="username"> {Username} </h1>
            </div>

            <img className="post-image" src={PostImage} alt={"post image"}/>

            <div className="caption"> <h1 className="username"> {Username} </h1>
                <p className="post-caption"> {PostCaption} </p>
            </div>
            
        </div>
    )
}