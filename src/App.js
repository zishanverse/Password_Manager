import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Item from './item/index'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      web: '',
      username: '',
      password: '',
      list: [],
      showpass: false,
      searchInput: '',
    }
  }

  renderList = filtered => {
    const {showpass} = this.state

    if (filtered.length === 0) {
      return (
        <div className="noPassWordContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
            className="nopass"
          />
          <p className="nopassword">No Passwords</p>
        </div>
      )
    }

    return (
      <ul className="passWordContainer">
        {filtered.map(each => (
          <Item
            key={each.key}
            item={each}
            func={this.deleteItem}
            isshow={showpass}
          />
        ))}
      </ul>
    )
  }

  deleteItem = id => {
    const {list} = this.state
    const filtered = list.filter(each => each.id !== id)

    this.setState({list: filtered})
  }

  addWeb = event => {
    this.setState({web: event.target.value})
  }

  addUsername = event => {
    this.setState({username: event.target.value})
  }

  addPassword = event => {
    this.setState({password: event.target.value})
  }

  addItem = () => {
    const {web, username, password} = this.state

    this.setState(pre => ({
      list: [...pre.list, {id: uuidv4(), website: web, username, password}],
      web: '',
      username: '',
      password: '',
    }))
  }

  changeshowpass = () => {
    this.setState(pre => ({showpass: !pre.showpass}))
  }

  searchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  preventSubmit = event => event.preventDefault()

  render() {
    const {list, searchInput, web, username, password} = this.state
    const filtered = list.filter(each =>
      each.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const count = filtered.length

    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo"
        />
        <div className="card mediumCard">
          <form className="formCard" onSubmit={this.preventSubmit}>
            <h1 className="heading">Add New Password</h1>
            <div className="InputCard">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="symbol"
              />
              <input
                type="text"
                placeholder="Enter Website"
                className="input"
                onChange={this.addWeb}
                value={web}
              />
            </div>

            <div className="InputCard">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="symbol"
              />
              <input
                type="text"
                placeholder="Enter Username"
                className="input"
                onChange={this.addUsername}
                value={username}
              />
            </div>

            <div className="InputCard">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="symbol"
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="input"
                onChange={this.addPassword}
                value={password}
              />
            </div>

            <button className="btn" type="submit" onClick={this.addItem}>
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="loginImg"
          />
        </div>

        <div className="card">
          <div className="flex">
            <div className="passWordCountCard">
              <h1 className="pass">Your Passwords</h1>
              <p className="count">{count}</p>
            </div>
            <div className="searchCard">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search"
              />
              <input
                type="search"
                className="searchInput"
                onChange={this.searchInput}
                value={searchInput}
                placeholder="Search"
              />
            </div>
          </div>

          <hr className="line" />
          <div className="flex-end">
            <div className="showPassCard">
              <input
                type="checkbox"
                value="true"
                id="checkbox"
                className="checkbox"
                onClick={this.changeshowpass}
              />
              <label htmlFor="checkbox" className="showPassword">
                Show Passwords
              </label>
            </div>
          </div>

          {this.renderList(filtered)}
        </div>
      </div>
    )
  }
}

export default App
