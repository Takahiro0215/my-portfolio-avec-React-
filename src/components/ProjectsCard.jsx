import { useState } from "react";
import "./Projects.css"

const ProjectsCard = ({ name, description, techs, screenshots }) => {
    const [imgIndex, setImgIndex] = useState(0);

    const nextImg = () => setImgIndex((prev) => (prev + 1) % screenshots.length);
    const prevImg = () => setImgIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)

    return (
        <div className="project-card">
            <h2>{name}</h2>

            <div className="screenshot-viewer">
                <button className="nav-btn" onClick={prevImg}>←</button>
                <img src={screenshots[imgIndex]} alt={`${name} screenshot`} />
                <button className="nav-btn" onClick={nextImg}>→</button>
            </div>

            <p className="tags">{techs.join(" | ")}</p>
            <p className="description">{description}</p>
        </div>
    );
};

export default ProjectsCard;

