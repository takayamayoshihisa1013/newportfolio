import { Css, Html, Java, Js, Mysql, Next, Php, Python, React, Ts } from "./SkillIcon"

type SkillCardProps = {
    lang: string,
    barWidth: string,
    langIcon: string
}




export default function SkillCard({ lang, barWidth, langIcon }: SkillCardProps) {
    return (
        <li className="skillRate">
            <h2 className="languageIcon">
                { langIcon === "python" ? (
                    <Python />
                ) : langIcon === "java" ? (
                    <Java />
                ) : langIcon === "next" ? (
                    <Next />
                ) : langIcon === "html" ? (
                    <Html />
                ) : langIcon === "css" ? (
                    <Css />
                ) : langIcon === "js" ? (
                    <Js />
                ) : langIcon === "ts" ? (
                    <Ts />
                ) : langIcon === "react" ? (
                    <React />
                ) : langIcon === "php" ? (
                    <Php />
                ) : langIcon === "mysql" ? (
                    <Mysql />
                ) : (
                    <></>
                )}
            </h2>
            <p className="languageName">{lang}</p>
            <div className="barBack">
                <div className="bar" style={{ width: barWidth }}></div>
            </div>
            <p className="percent">{barWidth}</p>
        </li>
    )
}