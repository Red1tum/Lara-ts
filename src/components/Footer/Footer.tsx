import Logo from '../Logo/Logo'
import classes from './Footer.module.css'

export default function Footer() {
    return (
        <div className={classes.container}>
        <div className={classes.row}>
            <div className={classes.infoColumn}>
                <Logo textStyles={classes.logoText} imageStyles={classes.logoImage} labelStyles={classes.logoLabel} />
                <a className={classes.span}>HealthCare provides progressive, and affordable healthcare, accessible on mobile and online for everyone</a>
                <a className={classes.span}>©HealthCare PTY LTD 2023. All rights reserved</a>
            </div>
            <div className={classes.column}>
                <h3 className={classes.header}>Company</h3>
                <a href="/" className={classes.link}>About</a>
                <a href="/" className={classes.link}>Testimonials</a>
                <a href="/" className={classes.link}>Find a doctor</a>
                <a href="/" className={classes.link}>Apps</a>
            </div>
            <div className={classes.column}>
                <h3 className={classes.header}>Region</h3>
                <a href="/" className={classes.link}>Indonesia</a>
                <a href="/" className={classes.link}>Singapore</a>
                <a href="/" className={classes.link}>Hongkong</a>
                <a href="/" className={classes.link}>Canada</a>
            </div>
            <div className={classes.column}>
                <h3 className={classes.header}>Help</h3>
                <a href="/" className={classes.link}>Help center</a>
                <a href="/" className={classes.link}>Contact support</a>
                <a href="/" className={classes.link}>Instructions</a>
                <a href="/" className={classes.link}>How it works</a>
            </div>
        </div>
        </div>
    )
}