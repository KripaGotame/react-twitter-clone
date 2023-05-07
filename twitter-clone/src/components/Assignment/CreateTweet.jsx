import "./CreateTweet.css";
import axios from "axios";
import { useState } from "react";
const CreateTweet = () => {
    const [tweetContent, setTweetContent] = useState("");
    const [imageurl, setImageUrl] = useState("");
    const upload = async () => {
        try{
        const res = await axios.post("https://react-workshop-todo.fly.dev/posts/", {
            content: tweetContent,
            image: "https://lh3.googleusercontent.com/ci/AJFM8rwqdr4P_2MEV_92ilEISXIY16I3ab9TKeyYy67BN86mP5Z5n9jWtys5zoHo5M9Xc935QBG7sQ"
        },{
            headers:{
                apiKey:"645739007213f63d43558a28"
            }
        })
            setTweetContent("")
            setImageUrl("")
        }catch(e){
            console.log(e)
        };
    }
    
    const handleSubmit = () => {
        console.log({ tweetContent });
        upload();
    };
    return (
        <div className="tweet-create">

            <textarea id="tweet-text"
                placeholder="What's happening?"
                value={tweetContent}
                onChange={(e) => { setTweetContent(e.target.value) }}>

            </textarea>

            <div className="tweet controls">
                <span id="char-count">258</span>
                <button id="tweet-btn" onClick={handleSubmit}> Tweet </button>

            </div>

        </div>
    );
}
export default CreateTweet