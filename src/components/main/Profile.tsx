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
                    <p className="school">社会人1年目</p>
                    <p className="school-mobile">社会人1年目</p>
                    <p>当ポートフォリオサイトに訪問していただき、誠にありがとうございます。</p>
                    <p>高山 慶久と申します。</p>
                    <p>ITエンジニアとして日々学習と努力を続けています。</p>
                    <p>学生時代は主にPythonやJavaScriptを用いたWeb開発に取り組んでおり、ReactやFlaskのプロジェクト経験があります。</p>
                    <p>現在は社会人1年目として的確な判断力、コード力を培しており、将来的にはフルスタックエンジニアとして活躍するために努力を続けています。</p>
                    <p>趣味は観葉植物を育てることとサイクリングです。</p>
                </div>

            </div>
        </section>
    )
}

export default Profile