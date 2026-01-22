import { worksData } from "../../data/WorkData"

type InformationProps = {
    id: number;
}

export default function Information({ id }: InformationProps) {
    const workData = worksData.find((work) => work.id === id);
    return (
        <section className="work-information">
            <div className="information-text">
                <h2 className="work-title">作品名</h2>
                <p className="work-name">{workData?.title}</p>

                <h3>使用技術</h3>

                {
                    workData?.backLang && (
                        <div className="tech-block">
                            <span className="tech-label">Backend</span>
                            <div className="tech-tags">
                                {workData?.backLang?.map((lang, index) => (
                                    <span key={index}>{lang}</span>
                                ))}
                            </div>
                        </div>
                    )
                }
                {
                    workData?.frontLang && (
                        <div className="tech-block">
                            <span className="tech-label">Frontend</span>
                            <div className="tech-tags frontend">
                                {workData?.frontLang?.map((lang, index) => (
                                    <span key={index}>{lang}</span>
                                ))}
                            </div>
                        </div>
                    )
                }
                
                <h3>サイト内容</h3>

                <p className="explain">
                    {workData?.explain}
                </p>
            </div>
            <div className="information-image">
                <img src={workData?.img} alt="作品画像" />
            </div>
        </section>
    )
}
