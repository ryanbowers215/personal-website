import Link from "next/link"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./navbar.css";

export default function NavBar() {
    return(
    <div className="navbar">
        
        <div className = "left">
            <Link href="/home" className="link">
            <span>Ryan Bowers</span>
            </Link>
        </div>

        <div className="right">
        <Link href="/projects" className="link">
            <span>Projects</span>
        </Link>
        <Link href="/coursework" className="link">
            <span>Coursework</span>
        </Link>    
        
            <a href="https://github.com/ryanbowers215" className="link">
                <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/ryan-bowers-1007aa29a/" className="link">
                <LinkedInIcon />
            </a>
                
        </div>
                


    </div>
    )
}