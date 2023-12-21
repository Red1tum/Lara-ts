import classes from './HealthcareProvider.module.css'

import img7 from '../../assets/illustration_2.svg'
import Divider from '../Divider/Diveder';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

export default function HealthcareProvider() {

    return (
        <div className={classes.row}>
            <div className={classes.imgBox}>
                <img src={img7}/>
            </div>
            <div className={classes.column}>
                <h1>{'Leading healthcare providers'}</h1>
                <Divider/>
                <h2>{'We provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver'}</h2>
                <div>
                    <PrimaryButton text="Learn more"/>
                </div>
         </div>
        </div>
    );
}