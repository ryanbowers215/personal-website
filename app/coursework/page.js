import NavBar from "../navbar/navbar";
import Courses from "./coursework";

export default function Coursework() {
  return (
    <div style={{overflow: "scroll"}}>
      <NavBar />
      <Courses />
    </div>
  );
}
