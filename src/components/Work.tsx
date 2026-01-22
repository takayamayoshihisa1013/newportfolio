import Description from "./work/Description";
import Information from "./work/Infomation";
import "../css/Works.css";
import { useParams } from "react-router-dom";

function Work() {

    const { id } = useParams<{ id: string }>();

    return (
        <>
            <Information id={Number(id)} />
            <Description id={Number(id)} />
        </>
    )
}

export default Work;