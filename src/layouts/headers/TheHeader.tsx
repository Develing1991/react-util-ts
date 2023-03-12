import { Link } from "react-router-dom";

export default function TheHeader() {
  return (
    <header>
      <nav style={{display:'flex', gap:'10px', marginBottom: '10px'}}>
        <Link to="/">Home</Link>
        <Link to="/about/123">About</Link>
        <Link to="/reducer">reducer</Link>
        <Link to="/immer">immer</Link>
        <Link to="/useContext">useContext</Link>
      </nav>
    </header>
  )
}
