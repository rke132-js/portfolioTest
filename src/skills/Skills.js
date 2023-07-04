import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import { Skill } from './skill/Skill';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fermentum.';
export function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>

                <div className={style.skills}>

                    <Skill title={'JS'} description={lorem}/>
                    <Skill title={'CSS'} description={lorem}/>
                    <Skill title={'React'} description={lorem}/>

                </div>
            </div>
            
        </div>
    )
}