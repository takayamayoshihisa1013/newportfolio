import topImg from "./../../image/TopImg.png"
import "./../../css/TopImg.css"

const TopImg = () => {
    return (
        <section className="topImg" id="top">
            <h1 className="topImgDivText">Yoshihisa Takayama</h1>
            <h1 className="topImgDivText">Portfolio Site</h1>
            <div className="blind"></div>
            <img src={topImg} alt="" />
        </section>
    )
}

export default TopImg