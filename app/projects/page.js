import Layout from "../layout/layout";
import Projects from "./projects";

export default function ProjectPage() {
  return (
    <div style={{ overflow: "scroll" }}>
      <Layout>
        <Projects />
      </Layout>
    </div>
  );
}
