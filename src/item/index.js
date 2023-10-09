import './index.css'

const Item = props => {
  const {item, func, isshow} = props
  const {id, website, username, password} = item

  const deleteItem = () => {
    func(id)
  }

  return (
    <li className="itemContainer">
      <div className="itemContent">
        <div className="simbol">{website[0].toUpperCase()}</div>
        <div className="content">
          <p className="website">{website}</p>
          <p className="username">{username}</p>
          {isshow ? (
            <p className="password">{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="stars"
            />
          )}
        </div>
      </div>
      <button
        type="button"
        data-testid="delete"
        onClick={deleteItem}
        className="deleteBtn"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}

export default Item
