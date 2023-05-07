import { useEffect, useState } from "react";
import Tweet from "./components/Tweet";
import "./App.css";
import axios from "axios";
import CreateTweet from "./components/Assignment/CreateTweet";

const names = [{ name1: "Amamul", lastname: "Khan" }, { name1: "Md", lastname: "Khansaab" }, { name1: "Hari", lastname: "Gupta" }];

const App = () => {
  const [tweets, setTweets] = useState([]);
  const fetchTweets = async () => {
    const posts = await axios.get("https://react-workshop-todo.fly.dev/posts/all",  {
      headers:{
        apiKey: "645739007213f63d43558a28"
      }
    });
    console.log(posts.data);
    setTweets(posts.data);
  
    
  };
  useEffect(() => {
    fetchTweets();
  }, []);
  return (
    <>
    <CreateTweet/>
  
      {
        tweets.map((tweet)=>{
          return <Tweet avatar={`https://avatars.githubusercontent.com/u/${tweet.user.githubId}`} name={tweet.authorname} image={tweet.image} username={`@${tweet.authorname}`} content={tweet.content} key={tweet._id} id={tweet._id}/>
        })
      }

    </>
  );
};

export default App;