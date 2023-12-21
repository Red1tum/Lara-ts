import classes from './Card.module.css'

export type CardProps = {
    title: string;
    subtitle: string;
    logo: string;
}

export default function Card(props: CardProps) {
    return (
        <div className={classes.card}>
            <div className={classes.imgBox}>
                <img src={props.logo} className={classes.img}></img>
            </div>
            <h1 className={classes.h1}>{props.title}</h1>
            <h2 className={classes.h2}>{props.subtitle}</h2>
        </div>
    );
}