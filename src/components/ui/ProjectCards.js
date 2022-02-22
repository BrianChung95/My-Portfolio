import classes from "./ProjectCards.module.css";

function ProjectCards(props) {
  return (
    <a className={classes.container} href={props.link}>
      <div className={classes.info}>
        <div className={classes.title}>{props.name}</div>
        <p className={classes.texts}>{props.position}</p>
        <p className={classes.texts}>{props.description}</p>
      </div>
    </a>
  );
}

export default ProjectCards;
