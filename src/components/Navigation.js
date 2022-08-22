
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav>
      <ul className="navigation">
      
        <li><Link to="/mba-distilled/videos" className="ham">☰</Link></li>
        <li className="active"><a href="index.html">Home</a></li>
        <li><a href="discover.html">Videos</a></li>
        <li><a href="directory.html">About the Author</a></li>
        <li><a href="join.html">Buy Now!</a></li>
      </ul>
    </nav>
  )
}

export default Navigation