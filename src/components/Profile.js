import Card from "./ui/Card";

import classes from "./Profile.module.css";

function Profile(props) {
  return (
    <Card>
      <div>
        <img
          className={classes.profile_pic}
          alt="Profile-pic"
          src={props.img}
        />
      </div>
      <div>
        <div className={classes.content}>{"Name: " + props.name}</div>
      </div>
      <div>
        <div className={classes.content}>{"Email: " + props.email}</div>
      </div>
      <div>
        <div className={classes.content}>{"School: " + props.school}</div>
      </div>
      <div>
        <div className={classes.content}>{"City: " + props.city}</div>
      </div>
      <div>
        <div className={classes.content}>{"Hobbies: " + props.hobbies}</div>
      </div>
    </Card>
  );
}

export default Profile;
