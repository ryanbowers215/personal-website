import Layout from "../layout/layout";
import NavBar from "../navbar/navbar";
import Projects from "./projects";

export default function ProjectPage() {
  return (
    <div style={{overflow: "scroll"}}>
      <Layout>
      <Projects />
      </Layout>
    </div>
  );
}
