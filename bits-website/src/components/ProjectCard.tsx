import Link from "next/link";
import styles from "./ProjectCard.module.css";

interface Project {
    slug: string;
    name: string;
    status: string;
    description: string;
    technologies: string[];
}

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const statusClass = project.status
        .toLowerCase()
        .replaceAll(" ", "-");

    return (
        <Link
            className={styles.cardLink}
            href={`/projects/${project.slug}`}
            aria-label={`View ${project.name} project`}
        >
            <article className={styles.card}>
                <div className={styles.header}>
                    <h3>{project.name}</h3>
                    <span className={`${styles.status} ${styles[statusClass] ?? ""}`}>
                        {project.status}
                    </span>
                </div>

                <p className={styles.description}>{project.description}</p>

                <div className={styles.footer}>
                    <ul className={styles.technologies} aria-label="Technologies used">
                        {project.technologies.map((technology) => (
                            <li key={technology}>{technology}</li>
                        ))}
                    </ul>
                    <span className={styles.viewLink}>View project <span aria-hidden="true">→</span></span>
                </div>
            </article>
        </Link>
    );
}
