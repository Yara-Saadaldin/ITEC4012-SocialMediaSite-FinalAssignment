import './styles.css';


export const MyPosts = (props) => {

    const {Image} = props;

    return (
        <div className="mypost">
            <img className="image" src={Image}/>
        </div>
    )
}