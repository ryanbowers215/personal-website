import Layout from "../layout/layout";
import NavBar from "../navbar/navbar";
import Courses from "./coursework";

export default function Coursework() {
  return (
    <div style={{overflow: "hidden"}}>
      <Layout>
      <Courses />
      </Layout>
    </div>
  );
}
