"use client";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import "./navbar.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="elements">
        <Link href="/home" className="link">
          <span>About Me</span>
        </Link>

        <Link href="/projects" className="link">
          <span>Projects</span>
        </Link>
        <Link href="/coursework" className="link">
          <span>Coursework</span>
        </Link>

        <Link
          href="https://github.com/ryanbowers215"
          className="link"
          target="_blank"
        >
          <span>
            <GitHubIcon />
          </span>
        </Link>
        <Link
          href="https://www.linkedin.com/in/ryan-bowers-1007aa29a/"
          className="link"
          target="_blank"
        >
          <span>
            <LinkedInIcon />
          </span>
        </Link>
        <Link
          href="mailto:bowers.ryanandrew@gmail.com"
          className="link"
          target="_blank"
        >
          <span>
            <EmailRoundedIcon />
          </span>
        </Link>
      </div>
    </div>
  );
}
