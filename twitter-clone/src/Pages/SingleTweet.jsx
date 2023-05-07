import axios from "axios";
import { useEffect, useState } from "react";

import Tweet from "../components/Tweet";
import { useParams } from "react-router-dom";

const SingleTweet = () =>
{
    const [tweet, setTweet] = useState(null);
    const { id } = useParams();
    const fetchTweet = async () => {
        const resp = await axios.get(
            `https://react-workshop-todo.fly.dev/posts/${id}`,
            {
                headers: {
                        apiKey:"645739007213f63d43558a28",
                },
            }
        );
        console.log(resp.data);
        setTweet(resp.data.post);
    };
    useEffect(() => {
        fetchTweet();
    },[]);
    return(
        <>
        {tweet ? (
            <Tweet avatar ={'https://avatars.githubusercontent.com/u/66508145?v=4r'}
            content={tweet?.content}
            id={tweet?.id}
            name={tweet?.user.fullname}
            username={tweet?.user.name}
            image={tweet?.image}
          
        />
        ) : (
            <h1>Loading....</h1>
        )}
        
    </>
    );

};

export default SingleTweet;