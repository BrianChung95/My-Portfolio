import Typing from "../components/Effect/Typing";
import ProfilePic from "../components/ui/ProfilePic";
import classes from "./css/Home.module.css";

const words = ["Web Developer", "Software Developer"];

function Home() {
  return (
    <div className={classes.container}>
      <ProfilePic img="imgs/ProfilePic.jpg" />
      <div className={classes.texts}>
        <h1>Hi, I'm Bingting (Brian) Zhong</h1>
        <h1 className={classes.text}>
          Currently a term 2 CST student from BCIT
        </h1>
        <Typing words={words} />
      </div>
    </div>
  );
}

export default Home;
