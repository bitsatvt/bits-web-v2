import styles from "./ProjectCard.module.css";

interface Project {
    id?: string | number;
    name: string;
    status: string;
    description: string;
    technologies: string[];
    progress: number;
    activeDates: string;
    githubUrl?: string | null;
}

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const statusClass = project.status
        .toLowerCase()
        .replaceAll(" ", "-");

    const safeProgress = Math.min(100, Math.max(0, project.progress));

    return (
        <article className={styles.card}>

            {/* Project Header */}
            <div className={styles.header}>
                <h3>{project.name}</h3>

                <span
                    className={`${styles.status} ${styles[statusClass] ?? ""}`}
                >
                    {project.status}
                </span>
            </div>

            {/* Project Description */}
            <p className={styles.description}>
                {project.description}
            </p>

            {/* Technologies */}
            <p className={styles.technologies}>
                {project.technologies.join(" / ")}
            </p>

            {/* Progress Bar */}
            <div className={styles.progressSection}>
                <div className={styles.progressInfo}>
                    <span>Progress</span>
                    <span>{safeProgress}%</span>
                </div>

                <div
                    className={styles.progressBackground}
                    role="progressbar"
                    aria-valuenow={safeProgress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${project.name} progress`}
                >
                    <div
                        className={styles.progressFill}
                        style={{ width: `${safeProgress}%` }}
                    />
                </div>
            </div>

            {/* Project Footer */}
            <div className={styles.footer}>
                <span>{project.activeDates}</span>

                {project.githubUrl ? (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub Repository →
                    </a>
                ) : (
                    <span className={styles.pending}>
                        Repository pending
                    </span>
                )}
            </div>

        </article>
    );
}