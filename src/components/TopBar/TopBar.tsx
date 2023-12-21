
import classes from './TopBar.module.css'
import Logo from '../Logo/Logo'
import NavBar from '../NavBar/NavBar'

export default function TopBar() {
  const n = ['Home', 'Find a doctor', 'Apps', 'Testimonals', 'About Us']
  return (
    <>
        <div className={classes.topbar}>
            <Logo textStyles={classes.text} imageStyles={classes.image} labelStyles={classes.label}/>
            <NavBar n={n}/>
        </div>
    </>
  )
}