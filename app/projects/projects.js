import "./projects.css"


export default function Projects() {
    const projects = [
        {name: "Paging", status: "Currently Under Development", desc: "A book-focused social media platform built with Next.js"},
        {name: "Akari", status: "Complete", desc: "A clone of the light-up puzzle game Akari built in JavaFX built for the final project of COMP 301"}

    ]
    return(
        <div>
           <h1>Projects</h1> 

           <div className="container">
            {projects.map(project=>(
            <div className="project">
                <div className="projectName">
                    <h3>{project.name}</h3>
                </div>
                <div className="projectStatus">
                    <span>{project.status}</span>
                </div>
                <div className="projectDesc">
                    <p>{project.desc}</p>
                </div>

    
            </div>
        ))}
        </div>

        </div>

    )
}