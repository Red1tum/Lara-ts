import classes from './Logo.module.css'

function Logo() {
    return (
        <div className={classes.logoRow}>
            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                <circle cx="20.5" cy="20.5" r="20.5" fill="#458FF6"/>
                <text x="15.5" y="27.5" fill="white">T</text>
            </svg>

            <span className={classes.logoText}>HealthCare</span>
    </div>
    )
}

export default Logo;