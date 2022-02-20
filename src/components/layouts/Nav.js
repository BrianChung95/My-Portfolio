import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import classes from "./Nav.module.css";

function Nav() {
  const location = useLocation();
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Hey, I'm Brian</div>
      <nav>
        <ul>
          <li>
            <Link to="/" className={url === "/" ? classes.active : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={url === "/about" ? classes.active : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className={url === "/skills" ? classes.active : ""}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={url === "/projects" ? classes.active : ""}
            >
              Projects
            </Link>
          </li>
          {/* <li>
            <Link
              to="/courses"
              className={url === "/courses" ? classes.active : ""}
            >
              Courses
            </Link>
          </li> */}
          {/* <li>
            <Link
              to="/newitems"
              className={url === "/newitems" ? classes.active : ""}
            >
              New Item
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
