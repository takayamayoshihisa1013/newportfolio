import "../../css/Work.css"
import { worksData } from "../../data/WorkData"
import WorkComponent from "../ui/main/Work"

const Work = () => {
    return (
        <section className="workSection" id="work">
            <div className="sectionTitle">
                <h1 className="">Work</h1>
                <div className="line"></div>
            </div>
            <nav className="works">
                <ul className="row">
                    {worksData.map((work) => (
                        <WorkComponent
                        id={work.id}
                        />
                    ))}
                </ul>
            </nav>
        </section>
    )
}

export default Work