import { projects } from "../projectData/projects";
import ProjectCard from "../../components/ProjectCard";
import styles from "./projects.module.css";

export default function ProjectsPage() {
    return (
        <main className={styles.projectsPage}>
            <section className={styles.hero}>
                <p className={styles.eyebrow}>BITS AT VIRGINIA TECH</p>
                <h1>Our Projects</h1>
                <p className={styles.description}>
                    Explore the software and ideas built by our student teams.
                </p>
            </section>

            <section className={styles.projectsSection} aria-labelledby="projects-heading">
                <div className={styles.sectionHeader}>
                    <h2 id="projects-heading">All projects</h2>
                    <span>{projects.length} projects</span>
                </div>

                <div className={styles.projectsGrid}>
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section>
        </main>
    );
}
