import classes from './LatestArticleCard.module.css'

export type ArticleCardProps = {
    image: string,
    title: string,
    subtitle: string
}

export default function LatestArticleCard(props: ArticleCardProps) {
    return (
        <div className={classes.column}>
            <img src={props.image} className={classes.image}/>
            <div className={classes.text}>
                <h1 className={classes.header}>{props.title}</h1>
                <h2 className={classes.subheader}>{props.subtitle}</h2>
                <div className={classes.more}>
                    <a href="/">Read more</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="9" viewBox="0 0 15 9" fill="none">
                        <g clip-path="url(#clip0_63_2691)">
                        <path d="M0.803597 5.30357L11.4107 5.30357L9.08038 7.63393C8.75895 7.95536 8.75895 8.4375 9.08038 8.75893C9.40181 9.08036 9.88395 9.08036 10.2054 8.75893L13.9018 5.0625C14.2232 4.74107 14.2232 4.25893 13.9018 3.9375L10.2054 0.241071C9.88396 -0.0803579 9.40181 -0.080358 9.08038 0.241071C8.75896 0.5625 8.75896 1.04464 9.08038 1.36607L11.4107 3.69643L0.803597 3.69643C0.401811 3.69643 2.52311e-05 4.01786 2.51889e-05 4.5C2.51468e-05 4.98214 0.401811 5.30357 0.803597 5.30357Z" fill="#4089ED"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_63_2691">
                        <rect width="14.1429" height="9" fill="white" transform="translate(14.1429 9) rotate(-180)"/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    )
}