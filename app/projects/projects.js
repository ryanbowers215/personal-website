import "./projects.css";

export default function Projects() {
  const projects = [
    {
      key: 1,
      name: "Paging",
      status: "Currently Under Development",
      desc: "A book-focused social media platform built with Next.js",
    },
    {
      key: 2,
      name: "Twitter Clone",
      status: "Complete",
      desc: "A functioning web app where users can sign up, post, like, bookmark, and comment on tweets.",
    },
    {
      key: 3,
      name: "Personal Website",
      status: "Work in Progress!",
      desc: "My personal website highlighting my coursework and projects.",
    },
    {
      key: 4,
      name: "Akari",
      status: "Complete",
      desc: "A clone of the light-up puzzle game Akari built in JavaFX built for my final project in COMP 301.",
    },
  ];
  return (
    <div>
      <h1>Projects</h1>

      <div className="container">
        {projects.map((project) => (
          <div className="project" key={project.key}>
            <div className="projectName">
              <h3>{project.name}</h3>
            </div>
            <div className="projectStatus">
              <h4>{project.status}</h4>
            </div>
            <div className="projectDesc">
              <p>{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
