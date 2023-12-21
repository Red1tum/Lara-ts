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
            <h1 className={classes.header}>{props.title}</h1>
            <h2 className={classes.subheader}>{props.subtitle}</h2>
            <a href="/">Read more</a>
        </div>
    )
}