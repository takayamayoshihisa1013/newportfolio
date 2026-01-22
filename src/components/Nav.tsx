import "./../css/Nav.css"

type NavProps = {
    openToggle: () => void;
    menuOpen: boolean;
}

const Nav = ({ openToggle, menuOpen }: NavProps) => {
    

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <>
            <nav className="navMenu">

                <h2>Menu</h2>
                <ul>
                    <li onClick={() => { scrollToSection("top"); }} >Top</li>
                    <li onClick={() => { scrollToSection("profile"); }} >Profile</li>
                    <li onClick={() => { scrollToSection("skill"); }} >Skill</li>
                    <li onClick={() => { scrollToSection("work"); }} >Work</li>
                    <li onClick={() => { scrollToSection("contact"); }} >Contact</li>
                </ul>
            </nav>
            <nav className={`navMenu-mobile ${ menuOpen ? "navMenu-mobile-open" : "navMenu-mobile-closed" }`}>
                <i className="fa-solid fa-xmark close-button" onClick={openToggle}></i>
                <h2>Menu</h2>
                <ul>
                    <li onClick={() => { scrollToSection("top"); openToggle(); }} >Top</li>
                    <li onClick={() => { scrollToSection("profile"); openToggle(); }} >Profile</li>
                    <li onClick={() => { scrollToSection("skill"); openToggle(); }} >Skill</li>
                    <li onClick={() => { scrollToSection("work"); openToggle(); }} >Work</li>
                    <li onClick={() => { scrollToSection("contact"); openToggle(); }} >Contact</li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;