import classes from './MobileApp.module.css'

import img from '../../assets/illustration_3.svg'

export default function MobileApp() {
    return (
        <div className={classes.row}>
            <div className={classes.column}>
                <h1>Download our mobile apps</h1>
                <hr className={classes.divider}/>
                <h2>Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely</h2>
                <button className={classes.button}>
                    Download 🠗
                </button>
            </div>

            <div className={classes.imgBox}>
                <img src={img}/>
            </div>
        </div>
    );
}