import "./Projects.css";
import ProjectsCard from "./ProjectsCard";
import { projects } from "../data/projectsData";
import { useState } from "react";

function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <section id="projects" className="projects-section">
            <h2>Projects</h2>

            <div className="projects-card-wrapper">
                <ProjectsCard {...projects[currentIndex]} />
            </div>

            <div className="project-indicators">
                {projects.map((_, i) => (
                    <span
                        key={i}
                        className={i === currentIndex ? "active" : ""}
                        onClick={() => setCurrentIndex(i)}
                    ></span>
                ))}
            </div>
        </section>
    );
}

export default Projects;