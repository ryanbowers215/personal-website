import "./aboutme.css";
import "../../public/photos/me3.jpg";
import Image from "next/legacy/image";

export default function AboutMe() {
  const imageStyle = {
    borderRadius: "50%",
    border: "1px solid #fff",
  };

  return (
    <div>
      <h1>About Me</h1>
      <div className="photos2">
        <div>
          <Image
            src={"/photos/me3.jpg"}
            alt={"me"}
            width={300}
            height={300}
            style={imageStyle}
            priority
          />
        </div>
      </div>

      <h4>
        My name is Ryan Bowers and I am a junior studying Computer Science and
        Statistics & Analytics at The University of North Carolina at Chapel
        Hill. I am from Franklin, North Carolina and graduated as Valedictorian
        of Franklin High School in 2021.
      </h4>

      <h4>
        On campus, I'm involved with Carolina Analytics & Data Science and
        Computer Science + Social Good.
      </h4>

      <h4>
        In my free time I like to watch TV comedies, exercise, and read. My
        favorite show is Arrested Development, and my favorite book is The
        Sirens of Titan by Kurt Vonnegut.
      </h4>

      <h4>
        I'm on pace to read seventy books in 2024. This hobby is what drove me
        to begin developing Paging, which will be a book-focused social media
        platform where users can update their followers on their progress
        through a book, and review it.
      </h4>
    </div>
  );
}
