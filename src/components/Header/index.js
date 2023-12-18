import './index.css'

const Header = () => (
  <nav className="home-page-navbar">
    <div className="navbar-logo-logout">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="website-nav-logo"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav logout"
        className="mobile-img"
      />
    </div>
    <ul className="links-items">
      <li>
        <p className="links-text">Home</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          alt="nav home"
          className="mobile-img"
        />
      </li>
      <li>
        <p className="links-text">Products</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          alt="nav products"
          className="mobile-img"
        />
      </li>
      <li>
        <p className="links-text">Cart</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          alt="nav card"
          className="mobile-img"
        />
      </li>
      <li className="logout-button">
        <button className="nav-logout-button" type="button">
          Logout
        </button>
      </li>
    </ul>
  </nav>
)

export default Header
