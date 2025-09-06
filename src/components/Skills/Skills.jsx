//Libraries
import * as _ from "lodash-es";
//Components
import Card from "../Card/Card";
//Styles
import style from "./Skills.module.scss";
//Skills
import * as stack from "../../mySkills/mySkills";

function Skills() {
  const mySkills = _.values(stack);

  return (
    <div className={style.skills}>
      <h1 className={style.skills__title}>Skills</h1>
      <p className={style.skills__subtitle}>My Current Stack {"</>"}</p>
      <div className={style.skills__gallery}>
        {mySkills.map((skill) => (
          <Card key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
