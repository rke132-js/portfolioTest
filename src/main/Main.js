import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css';

export function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.textGreeting}>
                    <span>Hi There</span>
                    <h1>I am Julia Vrn</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    )
}