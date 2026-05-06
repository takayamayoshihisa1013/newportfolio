import { Link } from "react-router-dom";
import { worksData } from "../../../data/WorkData";

type WorkProps = {
    id: number;
}

export default function Work({ id }: WorkProps) {
    const work = worksData.find((work) => work.id === id);

    return (
        <li className="work" >
            <Link
                to={`/work/${id}`}
            >
                <img src={work?.img} alt={work?.alt} />
                <div className="description">
                    <h3 className="workTitle">{work?.title}</h3>
                    <p className="workDate">{work?.date}</p>
                    {
                        work?.frontLang &&
                        <p className="workLang">
                            <span>Frontend</span>
                            <div className="tech-tags">
                                {work?.frontLang?.map((lang, index) => (
                                    <span key={index}>{lang}</span>
                                ))}
                            </div>
                        </p>
                    }
                    {
                        work?.backLang && <p className="workLang">
                            <span>Backend</span>
                            <div className="tech-tags">
                                {work?.backLang?.map((lang, index) => (
                                    <span key={index}>{lang}</span>
                                ))}
                            </div>
                        </p>
                    }
                    {/* <p className="workExplain">{work?.explain}</p> */}
                </div>
            </Link>
        </li>
    )
}