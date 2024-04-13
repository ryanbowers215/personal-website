import NavBar from "../navbar/navbar";
import AboutMe from "../about-me/aboutme";

export default function Home() {
  return (
    <div style={{overflow: "scroll"}}>
      <NavBar />
      <AboutMe />
    </div>
  );
}
