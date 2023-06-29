const Likes = ({ voteNumber, onUpvote, onDownvote }) => {

  return (
    <div className="vote-container">
      <img className="upvote" src={process.env.PUBLIC_URL + "/images/icon-plus.svg"} alt="upvote" onClick={onUpvote}/>
      <span className="vote-number">{voteNumber}</span>
      <img className="downvote" src={process.env.PUBLIC_URL + "/images/icon-minus.svg"} alt="downvote" onClick={onDownvote}/>
    </div>
  )
}

export default Likes
