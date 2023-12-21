import classes from './Logo.module.css'

function Logo(styles: {imageStyles: string, textStyles: string, labelStyles: string}) {
    return (
        <div className={classes.logoRow}>
            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                <circle className={styles.imageStyles} cx="20.5" cy="20.5" r="20.5"/>
                <text className={styles.textStyles} x="15.5" y="27.5">T</text>
            </svg>

            <span className={styles.labelStyles}>HealthCare</span>
    </div>
    )
}

export default Logo;