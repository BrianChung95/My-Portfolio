import classes from "./css/About.module.css";

import Profile from "../components/Profile";

function About() {
  return (
    <div className={classes.container}>
      <div className={classes.profile}>
        <Profile
          img="imgs/ProfilePic - Small.jpg"
          name="Bingting (Brian) Zhong"
          email="bzhong6@my.bcit.ca"
          school="BCIT"
          city="Burnby"
          hobbies="NBA, Japanese Anime"
        />
      </div>
      <div className={classes.introduction}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat
          est velit egestas dui id. Et netus et malesuada fames. Turpis massa
          tincidunt dui ut ornare lectus sit amet est. Interdum varius sit amet
          mattis vulputate enim. Lectus urna duis convallis convallis tellus id
          interdum velit laoreet. Consequat interdum varius sit amet mattis
          vulputate enim nulla. Porttitor lacus luctus accumsan tortor posuere
          ac. Venenatis tellus in metus vulputate eu. Enim neque volutpat ac
          tincidunt. A lacus vestibulum sed arcu non odio. Leo vel orci porta
          non pulvinar neque laoreet suspendisse interdum. Viverra ipsum nunc
          aliquet bibendum enim facilisis. At erat pellentesque adipiscing
          commodo elit at. Aliquam malesuada bibendum arcu vitae.
        </p>
      </div>
    </div>
  );
}

export default About;
