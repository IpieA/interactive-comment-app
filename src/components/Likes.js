const Likes = ( {voteNumber} ) => {
  return (
    <div className="vote-container">
      <img className="upvote" src={process.env.PUBLIC_URL + "/images/icon-plus.svg"} alt="upvote" />
      <span className="vote-number">{voteNumber}</span>
      <img className="downvote" src={process.env.PUBLIC_URL + "/images/icon-minus.svg"} alt="downvote" />
    </div>
  )
}

export default Likes
