import './Skills.css';
import SkillCard from './SkillCard';
import { frontEnd, backEnd, other} from '../data/skillsData';

function Skills() {

    const renderCards = (skills) =>
        skills.map((skill, index) => (
            <SkillCard key={index} name={skill.name} img={skill.img} />
        ));

    return(
        <section id="skills" className='skills-section'>
            <h2>Compétences</h2>

            <div className='skills-category front-end'>
                <h3>Front-end</h3>
                <div className='skills-cards'>{renderCards(frontEnd)}</div>
            </div>

            <div className='skills-category back-end'>
                <h3>Back-end</h3>
                <div className='skills-cards'>{renderCards(backEnd)}</div>
            </div>

            <div className='skills-category other'>
                <h3>Autres</h3>
                <div className='skills-cards'>{renderCards(other)}</div>
            </div>

        </section>
    )
}

export default Skills;