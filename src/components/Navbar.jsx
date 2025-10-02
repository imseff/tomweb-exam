
function Navbar() {
  return (
    <div className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/section/latest">LATEST</Link>
        </li>
        <li className="nav-item">
          <Link to="/section/reports">REPORTS</Link>
        </li>
        <li className="nav-item">
          <Link to="/section/sports">SPORTS</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
