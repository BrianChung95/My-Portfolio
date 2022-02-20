import Nav from "./Nav";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div className={classes.container}>
      <Nav />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
