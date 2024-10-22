"use client";
import "./aboutme.css";
import "../../public/photos/me3.jpg";
import Image from "next/image";

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
            priority
            style={{
              ...imageStyle,
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>

      <h4>
        My name is Ryan Bowers and I am a fourth-year student studying Computer
        Science and Statistics & Analytics at The University of North Carolina
        at Chapel Hill. I am from Franklin, NC and graduated as Valedictorian of
        Franklin High School in 2021.
      </h4>

      <h4>
        On campus, I'm involved with App Team Carolina, UNC CS + Social Good,
        and Carolina Analytics & Data Science.
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
