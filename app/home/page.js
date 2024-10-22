import AboutMe from "../about-me/aboutme";
import Layout from "../layout/layout";

export default function Home() {
  return (
    <div style={{ overflow: "scroll" }}>
      <Layout>
        <AboutMe />
      </Layout>
    </div>
  );
}
