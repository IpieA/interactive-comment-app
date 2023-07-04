const ReplyButton = ( {handleReplyButtonClick} ) => {
  return (
    <div className="reply-container" onClick={handleReplyButtonClick}>
      <img src={process.env.PUBLIC_URL + "/images/icon-reply.svg"} alt="reply button" />
      <span className="reply-cta">Reply</span>
    </div>
  );
};

export default ReplyButton;
