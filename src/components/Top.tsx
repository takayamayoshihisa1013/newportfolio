import Profile from "./main/Profile"
import TopImg from "./main/TopImg"
import Skill from "./main/Skill"
import Work from "./main/Work"
import Contact from "./main/Contact"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"

type LocationState = {
    scrollTo?: string;
};

const Top = () => {
    const location = useLocation();
    const state = location.state as LocationState | null;

    useEffect(() => {
        if (state?.scrollTo) {
            const el = document.getElementById(state.scrollTo);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [state]);

    return (
        <>
            <TopImg />
            <Profile />
            <Skill />
            <Work />
            <Contact />
        </>
    )
}

export default Top