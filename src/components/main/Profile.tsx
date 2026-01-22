import "./../../css/Profile.css"
import profileImage2 from "/image/profile.jpg"

const Profile = () => {
    return (
        <section className="profile" id="profile">
            <div className="sectionTitle">
                <h1 className="">Profile</h1>
                <div className="line"></div>
            </div>
            <div className="profileImgText">
                <div className="profileImg">
                    <img src={profileImage2} alt="" />
                </div>
                <div className="profileText">
                    <h2 className="myname">高山　慶久</h2>
                    <h3 className="englishMyname">Yoshihisa Takayama</h3>
                    <p className="school">専門学校HAL東京 IT学部 高度情報学科 4年</p>
                    <p className="school-mobile">専門学校HAL東京 IT学部<br />高度情報学科 4年</p>
                    <p>当ポートフォリオサイトに訪問していただき、誠にありがとうございます。</p>
                    <p>高山 慶久と申します。</p>
                    <p>ITエンジニアとして働くために学習と努力を続けています。</p>
                    <p>主にPythonやJavaScriptを用いたWeb開発に取り組んでおり、ReactやFlaskのプロジェクト経験があります。</p>
                    <p>現在はクラウド技術やデータベース設計にも興味があり、将来的にはフルスタックエンジニアとして活躍したいと考えています。</p>
                    <p>趣味は観葉植物を育てることとサイクリングです。</p>
                </div>
                
            </div>
        </section>
    )
}

export default Profile