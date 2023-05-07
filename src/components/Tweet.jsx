import Header from "./Header";
import TweetBody from "./TweetBody";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";


const Tweet = ({ name, username, timestamp, image,content, avatar,id}) => {
  const navigate = useNavigate();
    return (
<div className="tweet" onClick={()=> navigate(`/tweet/${id}`)}>
        <img
          className="profile-pic"
          src={avatar}
          alt="Profile Picture"
        
        />
       <div className="tweet-content">


        <Header name = {name} username = {username} timestamp= {timestamp} />
        <TweetBody image ={image} content={content}/>
        <Footer/>
       </div>
       </div>
       );
        };
        export default Tweet;