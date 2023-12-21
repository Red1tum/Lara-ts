import classes from './NavBar.module.css'

function NavBar() {
    return (
        <nav className={classes.navbar}>
           <a href='#home'>Home</a>
           <a href='#findADoctor'>Find a doctor</a>
           <a href='#apps'>Apps</a>
           <a href='#testimonals'>Testimonals</a>
           <a href='#about'>About Us</a>
        </nav>
    )
}

export default NavBar;
