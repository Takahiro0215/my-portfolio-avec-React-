import { useState } from "react";
import "./Projects.css";
import ProjectsCard from "./ProjectsCard";
import { projects } from "../data/projectsData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <section id="projects" className="projects-section">
            <h2>Projects</h2>

            <Swiper
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={index}>
                        <ProjectsCard {...project} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <p className="projects-indicator">
                {currentIndex + 1} / {projects.length}
            </p>

            <p className="projects-note">
                Faites glisser pour voir les autres projets
            </p>
        </section>
    );
}

export default Projects;
