import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../projectData/projects";
import styles from "./project.module.css";

interface ProjectPageProps {
    params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className={styles.page}>
            <div className={styles.container}>
                <Link href="/projects" className={styles.backLink}>
                    <span aria-hidden="true">←</span> All projects
                </Link>

                <header className={styles.header}>
                    <p className={styles.eyebrow}>BITS PROJECT</p>
                    <div className={styles.titleRow}>
                        <h1>{project.name}</h1>
                        <span className={`${styles.status} ${styles[project.status.toLowerCase().replaceAll(" ", "-")] ?? ""}`}>
                            {project.status}
                        </span>
                    </div>
                    <p className={styles.description}>{project.description}</p>
                </header>

                <section className={styles.section} aria-labelledby="tools-heading">
                    <h2 id="tools-heading">Tools used</h2>
                    <ul className={styles.tools}>
                        {project.technologies.map((tool) => (
                            <li key={tool}>{tool}</li>
                        ))}
                    </ul>
                </section>

                <section className={styles.section} aria-labelledby="story-heading">
                    <h2 id="story-heading">Project story</h2>
                    <p>
                        The team behind {project.name} will share the story of this
                        project here, including its goals, development process, and
                        the challenges they worked to solve.
                    </p>
                </section>
            </div>
        </main>
    );
}
