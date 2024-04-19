import Link from "next/link"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import "./navbar.css";

export default function NavBar() {
    return(
    <div className="navbar">
        
        <div className = "right">
            <Link href="/home" className="link">
            <span>About Me</span>
            </Link>

        <Link href="/projects" className="link">
            <span>Projects</span>
        </Link>
        <Link href="/coursework" className="link">
            <span>Coursework</span>
        </Link>    
        
            <a href="https://github.com/ryanbowers215" className="link" target="_blank">
                <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/ryan-bowers-1007aa29a/" className="link" target="_blank">
                <LinkedInIcon />
            </a>
            <a href="mailto:bowers.ryanandrew@gmail.com" className="link" target="_blank">
                <EmailRoundedIcon />
            </a>


                
        </div>
                


    </div>
    )
}