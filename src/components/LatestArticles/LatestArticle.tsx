import LatestArticleCard, {ArticleCardProps} from '../LatestArticleCard/LatestArticleCard';
import classes from './LatestArticle.module.css'

import img1 from '../../assets/article_image_1.svg'
import img2 from '../../assets/article_image_2.svg'
import img3 from '../../assets/article_image_3.svg'


export default function LatestArticle() {
    let props: ArticleCardProps[] = [
        {image: img1, title: 'Disease detection, check up in the laboratory', subtitle: 'In this case, the role of the health laboratory is very important to do a disease detection...'},
        {image: img2, title: 'Herbal medicines that are safe for consumption', subtitle: 'Herbal medicine is very widely used at this time because of its very good for your health...'},
        {image: img3, title: 'Natural care for healthy facial skin', subtitle: 'A healthy lifestyle should start from now and also for your skin health. There are some...'},
    ]
    return (
        <div className={classes.column}>
            <h1 className={classes.h1}>Our Services</h1>
            <hr className={classes.divider}/>
            
            <div className={classes.grid}>
            {
                props.map(item => (
                    <LatestArticleCard image={item.image} title={item.title} subtitle={item.subtitle} />
                ))
            }
            </div>
            <div className={classes.buttonContainer}>
                <button className={classes.button}>
                    View all
                </button>
            </div>
        </div>
    );
}