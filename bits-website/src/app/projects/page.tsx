
import { projects } from "../projectData/projects";
import ProjectCard from "../../components/ProjectCard";
import styles from "./projects.module.css";

export default function ProjectsPage() {
    return (
        <main className={styles.projectsPage}>

            <section className={styles.hero}>
                <p className={styles.eyebrow}>
                    01 · PROJECT DIRECTORY
                </p>

                <h1>Projects</h1>

                <p className={styles.description}>
                    Real software built by student teams:
                    client platforms, campus tools, and ideas in development.
                </p>
            </section>

            <section className={styles.projectsSection}>

                <div className={styles.sectionHeader}>
                    <h2>All Projects ({projects.length})</h2>
                    <span>02–04 · PROJECT SUMMARIES</span>
                </div>

                <div className={styles.projectsGrid}>
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}
                </div>

                <p className={styles.summary}>
                    {projects.filter(p => p.status === "Shipped").length} shipped
                    {" · "}
                    {projects.filter(p => p.status === "Active").length} active
                    {" · "}
                    {projects.filter(p => p.status === "In Development").length} in development
                </p>

            </section>

        </main>
    );
}
