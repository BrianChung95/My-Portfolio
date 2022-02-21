import classes from "./SkillBar.module.css";

function SkillBar(props) {
  const barWidth = props.percent;
  return (
    <div className={classes.bars}>
      <div className={classes.texts}>
        <span className={classes.name}>{props.skillName}</span>
        <span className={classes.percent}>{props.percent}</span>
      </div>
      <div className={classes.bar} style={{ "--width": barWidth }}></div>
    </div>
  );
}

export default SkillBar;
