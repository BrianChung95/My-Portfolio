import Typing from "../components/Effect/Typing";
import ProfilePic from "../components/ui/ProfilePic";
const words = ["Web Developer", "Software Developer"];

function Home() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(14, 7%" }}>
      <ProfilePic img="imgs/ProfilePic.jpg" />
      <div style={{ gridColumn: "8/span4", alignSelf: "center" }}>
        <h1>Hi, I'm Bingting (Brian) Zhong</h1>
        <h1 style={{ margin: "20px 0" }}>
          Currently a term 2 CST student from BCIT
        </h1>
        <Typing words={words} />
      </div>
    </div>
  );
}

export default Home;
