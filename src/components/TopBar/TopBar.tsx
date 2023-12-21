
import classes from './TopBar.module.css'
import Logo from '../Logo/Logo'
import NavBar from '../NavBar/NavBar'

export default function TopBar() {
  return (
    <>
        <div className={classes.topbar}>
            <Logo/>
            <NavBar/>
        </div>
    </>
  )
}