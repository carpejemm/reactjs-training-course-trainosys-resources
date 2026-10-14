import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <div className="header">
      <nav>
        <Link to="/user-profile">User Profile</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
    </>
  )
}

export default Layout
