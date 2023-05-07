const TweetBody = ({ image,content }) => {
return (
<>
<p className="tweet-text">{content}</p>
<img  className="tweet-image" src={image} alt="Tweet Image"/>
</>
    );
}
        
export default TweetBody;