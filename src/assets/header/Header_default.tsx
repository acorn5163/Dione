import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Link,Outlet } from 'react-router-dom'

function Header_default() {

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Atlasez</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" href="#">ホーム</Link>
            </li>
            <li className="nav-item">
              <Link to="/article" className="nav-link" href="#">記事一覧</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Outlet />
    </>
  )
}

export default Header_default