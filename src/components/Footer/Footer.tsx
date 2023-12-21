import Logo from '../Logo/Logo'
import classes from './Footer.module.css'

export default function Footer() {
    return (
        <div className={classes.container}>
        <div className={classes.row}>
            <div className={classes.infoColumn}>
                <Logo />
                <span className={classes.link}>HealthCare provides progressive, and affordable healthcare, accessible on mobile and online for everyone</span>
                <span className={classes.link}>©HealthCare PTY LTD 2023. All rights reserved</span>
            </div>
            <div className={classes.column}>
                <h3 className={classes.header}>Company</h3>
                <span className={classes.link}>About</span>
                <span className={classes.link}>Testimonials</span>
                <span className={classes.link}>Find a doctor</span>
                <span className={classes.link}>Apps</span>
            </div>
            <div className={classes.column}>
                <h3 className={classes.header}>Region</h3>
                <span className={classes.link}>Indonesia</span>
                <span className={classes.link}>Singapore</span>
                <span className={classes.link}>Hongkong</span>
                <span className={classes.link}>Canada</span>
            </div>
            <div className={classes.column}>
                <h3 className={classes.header}>Help</h3>
                <span className={classes.link}>Help center</span>
                <span className={classes.link}>Contact support</span>
                <span className={classes.link}>Instructions</span>
                <span className={classes.link}>How it works</span>
            </div>
        </div>
        </div>
    )
}