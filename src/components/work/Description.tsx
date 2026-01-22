import { Link } from "react-router-dom";
import { worksData } from "../../data/WorkData";
import Descriptions from "../ui/work/Descriptions";

type DescriptionProps = {
  id: number;
}

export default function Description({ id }: DescriptionProps) {
  const workDescriptionData = worksData.find((work) => work.id === id);
  
  return (
    <section className="workDescription">
      <div className="sectionTitle">
        <h2>Description</h2>
        <div className="line"></div>
      </div>



      {
        workDescriptionData?.description.map((desc, index) => (
          <Descriptions 
            key={index}
            title={desc.pageTitle}
            imgs={desc.imgs}
            mov={desc.mov}
            alt={desc.alt}
            description={desc.description}
          />
        ))
      }

      <Link to="/" className="backToHome" state={{ scrollTo: "work"}}>
        Work一覧に戻る
      </Link>
    </section>
  )
}
