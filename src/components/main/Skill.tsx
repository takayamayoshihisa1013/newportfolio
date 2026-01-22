import "./../../css/Skill.css"
import SkillCard from "../ui/main/SkillCard"

const skill = () => {
    return (
        <section className="skill" id="skill">
            <div className="sectionTitle">
                <h1 className="">Skill</h1>
                <div className="line"></div>
            </div>
            <div className="skillCategory">
                <h3 className="skillCategoryTitle">Frontend</h3>
                <ul className="row">
                    <SkillCard lang="HTML" langIcon="html" barWidth="20%" />
                    <SkillCard lang="CSS" langIcon="css" barWidth="40%" />
                    <SkillCard lang="JavaScript" langIcon="js" barWidth="50%" />
                    <SkillCard lang="React" langIcon="react" barWidth="50%" />
                    <SkillCard lang="Next.js" langIcon="next" barWidth="30%" />
                </ul>
            </div>
            <div className="skillCategory">
                <h3 className="skillCategoryTitle">Backend</h3>
                <ul className="row">
                    <SkillCard lang="Python" langIcon="python" barWidth="60%" />
                    <SkillCard lang="Java" langIcon="java" barWidth="20%" />
                    <SkillCard lang="PHP" langIcon="php" barWidth="20%" />
                    <SkillCard lang="MySQL" langIcon="mysql" barWidth="60%" />
                </ul>
            </div>
        </section>
    )
}

export default skill