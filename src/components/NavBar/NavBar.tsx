import { useState } from 'react'
import classes from './NavBar.module.css'

function NavBar(navs: {n: string[]}) {
    const [state, setState] = useState(navs.n[0])

    const changeActive = (e: React.MouseEvent<HTMLAnchorElement> | undefined) => {
        e?.preventDefault()
        console.log(navs.n[0])
        setState((e?.target as Element).id)
    }
    return (
        <nav className={classes.navbar}>
            {
                navs.n.map(item => (
                    <a id={item} onClick={changeActive} href='/' key={item} className={state == item ? classes.active: classes.a}>
                        {item}
                    </a>
                ))
            }
        </nav>
    )
}

export default NavBar;
