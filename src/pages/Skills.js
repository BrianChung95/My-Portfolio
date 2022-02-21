import SkillBar from "../components/ui/SkillBar";
import classes from "./css/Skills.module.css";

function Skills() {
  return (
    <div className={classes.container}>
      <div className={classes.texts}>
        <h1>My Skills</h1>
        <p></p>
        <ul className={classes.skillList}>
          <li className={classes.skill}>
            <div>
              Languages:
              <br />
              Java, JavaScript, C, Python
              <br />
            </div>
          </li>
          <li className={classes.skill}>
            Web Development:
            <br />
            HTML5, CSS, Node.JS, React.JS, Node.JS
            <br />
          </li>
          <li className={classes.skill}>
            Database:
            <br />
            MySQL, MongoDB, Firebase
            <br />
          </li>
          <li className={classes.skill}>
            Version Control:
            <br />
            Git, Github
            <br />
          </li>
        </ul>
      </div>
      <div className={classes.graph}>
        <SkillBar skillName="HTML/CSS" percent="80%" />
        <SkillBar skillName="Java" percent="80%" />
        <SkillBar skillName="React" percent="70%" />
        <SkillBar skillName="C" percent="60%" />
        <SkillBar skillName="JavaScript" percent="60%" />
        <SkillBar skillName="Python" percent="60%" />
        <SkillBar skillName="MySQL" percent="40%" />
      </div>
    </div>
  );
}

export default Skills;
