import "./aboutme.css"
import "../../public/photos/me1.jpeg"
import "../../public/photos/me2.jpg"
import "../../public/photos/me3.jpg"
import "../../public/photos/me4.jpg"
import "../../public/photos/sirens.jpg"
import "../../public/photos/community.jpg"
import Image from "next/image"



export default function AboutMe() {

    return(
        <div>
           <h1>About Me</h1> 
            <h4>My name is Ryan Bowers and I am a junior studying Computer Science and Statistics & Analytics at The University of North Carolina at Chapel Hill.</h4>
             
            <h4>On campus, I'm involved with Carolina Analytics & Data Science and Computer Science + Social Good.</h4>
          
            <h4>In my free time I like to watch TV comedies, exercise, and read. My favorites are Arrested Development, and The Sirens of Titan by Kurt Vonnegut, respectively.</h4>

            <h4>I'm on pace to read seventy books in 2024. This hobby is what drove me to begin developing Paging, which will be a book-focused social media platform where users can update their followers on their progress through a book, and review it.</h4>
        

            <div className="photos">
                <div className="photo"><Image src={'/photos/me1.jpeg'} alt={"me"} width={200} height={200}/></div>
                <div className="photo2"><Image src={'/photos/arrested.jpg'} alt={"Arrested Development"} width={200} height={200}/></div>
                <div className="photo"><Image src={'/photos/me2.jpg'} alt={"me"} width={200} height={200}/></div>
                <div className="photo"><Image src={'/photos/me3.jpg'} alt={"me"} width={200} height={200}/></div>
                <div className="photo2"><Image src={'/photos/sirens.jpg'} alt={"The Sirens of Titan"} width={263} height={200}/></div>
                <div className="photo"><Image src={'/photos/me4.jpg'} alt={"me"} width={200} height={200}/></div>
            </div>
        </div>

    )
}