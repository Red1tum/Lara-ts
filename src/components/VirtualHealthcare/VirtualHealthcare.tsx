import classes from './VirtualHealthcare.module.css'
import header from '../../assets/header.svg'

export default function VirtaulHealthcare() {

    return (
        <div className={classes.headerRow}>
            <div className={classes.headerColumn}>
                <span className={classes.largeHeader}>Virtual healthcare for you</span>
                <span className={classes.subheader}>Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone</span>
                <button className={classes.button}>Consult today</button>
            </div>
            <div className={classes.test}>
                <img src={header} className={classes.image}/>
            </div>
        </div>
    )
}
