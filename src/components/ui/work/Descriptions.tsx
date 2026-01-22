

type descriptionsProps = {
    imgs? : string[];
    mov? : string[];
    alt: string;
    title: string;
    description: string;
}

export default function Descriptions({ imgs, mov, alt, title, description }: descriptionsProps) {
    return (
        <article className="description-block">
            <h3>{title}</h3>
            {
                mov?.map((movie, index) => (
                    <video key={index} src={movie} controls />
                ))
            }
            {
                imgs?.map((img, index) => (
                    <img key={index} src={img} alt={alt} />
                ))
            }
            
            <p>
                {description}
            </p>
        </article>
    )
}