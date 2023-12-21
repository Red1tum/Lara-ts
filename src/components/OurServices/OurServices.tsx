import Card, { CardProps } from '../Card/Card';
import classes from './OurServices.module.css'

import img1 from '../../assets/img1.svg'
import img2 from '../../assets/img2.svg'
import img3 from '../../assets/img3.svg'
import img4 from '../../assets/img4.svg'
import img5 from '../../assets/img5.svg'
import img6 from '../../assets/img6.svg'
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import Divider from '../Divider/Diveder';

export default function OurServices() {
    let cards: CardProps[] = [
        {title: 'Search doctor', subtitle: "Choose your doctor from thousands of specialist, general, and trusted hospitals", logo: img1},
        {title: 'Online pharmacy', subtitle: "Buy  your medicines with our mobile application with a simple delivery system", logo: img2},
        {title: 'Consultation', subtitle: "Free consultation with our trusted doctors and get the best recomendations", logo: img3},
        {title: 'Details info', subtitle: "Free consultation with our trusted doctors and get the best recomendations", logo: img4},
        {title: 'Emergency care', subtitle: "You can get 24/7 urgent care for yourself or your children and your lovely family", logo: img5},
        {title: 'Tracking', subtitle: "Track and save your medical history and health data ", logo: img6},
    ]
    return (
        <div className={classes.servicesColumn}>
            <h1 className={classes.h1}>Our Services</h1>
            <Divider/>
            <h2 className={classes.h2}>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</h2>
            <div className={classes.list}>
            {
                cards.map(card => (
                    <Card key={card.title} title={card.title} subtitle={card.subtitle} logo={card.logo}/>
                ))
            }
            </div>
            <div className={classes.buttonContainer}>
                <PrimaryButton text="Learn more"/>
            </div>
        </div>
    );
}
