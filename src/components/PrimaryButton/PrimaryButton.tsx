import classes from './PrimaryButton.module.css'

export default function PrimaryButton(t: {text: string, onClick?: () => void}) {
    return (
        <button className={classes.button} onClick={t.onClick}>
                    {t.text}
        </button>
    )
}