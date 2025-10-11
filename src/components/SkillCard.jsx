import './SkillCard.css'

function SkillCard ( {name, img}) {
    return(
        <div className="skill-card">
            <img src={img} alt={name}/>
            <p>{name}</p>
        </div>
    );
}

export default SkillCard;