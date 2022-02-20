import Card from "./ui/Card";

import classes from "./Profile.module.css";

function Profile(props) {
  return (
    <Card>
      <div className={classes.profile_pic}></div>
      <div>
        <div className={classes.name}>{"Name: " + props.name}</div>
      </div>
      <div>
        <div className={classes.email}>{"Email: " + props.email}</div>
      </div>
      <div>
        <div className={classes.school}>{"School: " + props.school}</div>
      </div>
      <div>
        <div className={classes.city}>{"City: " + props.city}</div>
      </div>
      <div>
        <div className={classes.hobbies}>{"Hobbies: " + props.hobbies}</div>
      </div>
    </Card>
  );
}

export default Profile;
