import classes from "./ProfilePic.module.css";

function ProfilePic(props) {
  return <img src={props.img} alt="Brian" className={classes.pic} />;
}

export default ProfilePic;
