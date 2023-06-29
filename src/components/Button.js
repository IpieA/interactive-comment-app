const Button = ({ color, text, handleOnClick }) => {
  return (
    <div>
        <button
            style={{ backgroundColor: color}}
            className="btn"
            onClick={handleOnClick}
            >
            {text}
      </button>
    </div>
  )
}

export default Button
