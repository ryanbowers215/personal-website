"use client"
import "./coursework.css"

function Courses() {

    const courses=[
        {key: 1, code: "COMP 590-140", name: "Foundations of Software Engineering", desc: "This pilot course introduces software engineering best practices in the context of full-stack web development with a high emphasis on team collaboration. The course is modeled after an internship and teams of four ultimately aim to produce production-quality features for a community application"},
        {key: 2, code: "COMP 311", name: "Computer Organization", desc: "Introduction to computer organization and design. Students will be introduced to the conceptual design of a basic microprocessor, along with assembly programming. The course includes fundamental concepts such as binary numbers, binary arithmetic, and representing information as well as instructions. Students learn to program in assembly (i.e., machine) language. The course covers the fundamentals of computer hardware design, transistors and logic gates, progressing through basic combinational and sequential components, culminating in the conceptual design CPU."},
        {key: 3, code: "COMP 301", name: "Foundations of Programming", desc: "Students will learn how to reason about how their code is structured, identify whether a given structure is effective in a given context, and look at ways of organizing units of code that support larger programs. In a nutshell, the primary goal of the course is to equip students with tools and techniques that will help them not only in later courses in the major but also in their careers afterwards."},
        {key: 4, code: "COMP 211", name: "Systems Fundamentals", desc: "This is the first course in the introductory systems sequence. Students enter the course having taken an introductory programming course in a high-level programming language (COMP 110) and a course in discrete structures. The overarching goal is to bridge the gap between a students' knowledge of a high-level programming language (COMP 110) and computer organization (COMP 311)."},
        {key: 5, code: "COMP 210", name: "Data Structures and Analysis", desc: "This course will teach you how to organize the data used in computer programs so that manipulation of that data can be done efficiently on large problems and large data instances. Rather than learning to use the data structures found in the libraries of programming languages, you will be learning how those libraries are constructed, and why the items that are included in them are there (and why some are excluded)."},
        {key: 6, code: "COMP 110", name: "Introduction to Programming", desc: "Introduces students to programming and data science from a computational perspective. With an emphasis on modern applications in society, students gain experience with problem decomposition, algorithms for data analysis, abstraction design, and ethics in computing. No prior programming experience expected. Foundational concepts include data types, sequences, boolean logic, control flow, functions/methods, recursion, classes/objects, input/output, data organization, transformations, and visualizations."},
        {key: 7, code: "STOR 435", name: "Introduction to Probability", desc: "Introduction to mathematical theory of probability covering random variables; moments; binomial, Poisson, normal and related distributions; generating functions; sums and sequences of random variables; and statistical applications."},
        {key: 8, code: "STOR 415", name: "Introduction to Optimization", desc: "Linear, integer, nonlinear, and dynamic programming, classical optimization problems, network theory."},
        {key: 9, code: "STOR 320", name: "Introduction to Data Science", desc: "Development of basic skill set for data analysis from obtaining data to data carpentry, exploration, modeling, and communication. Topics covered include regression, clustering, classification, algorithmic thinking, and non-standard data objects (networks and text data)."},
        {key: 10, code: "MATH 347", name: "Linear Algebra for Applications", desc: "Algebra of matrices with applications: determinants, solution of linear systems by Gaussian elimination, Gram-Schmidt procedure, and eigenvalues."},
        {key: 11, code: "MATH 383", name: "First Course in Differential Equations", desc: "Introductory ordinary differential equations, first- and second-order differential equations with applications, higher-order linear equations, systems of first-order linear equations (introducing linear algebra as needed)."},
        {key: 12, code: "MATH 381", name: "Discrete Mathmatics", desc: "This course serves as a transition from computational to more theoretical mathematics. Topics are from the foundations of mathematics: logic, set theory, relations and functions, induction, permutations and combinations, recurrence."}
    ]

    return(
        <div style={{position: "relative"}}>
            <h1>Coursework</h1> 

        <div className="container">
                    {courses.map(course=>(
                    <div className="course">
                        <div className="courseCode">
                            <h3>{course.code}</h3>
                        </div>
                        <div className="courseName">
                            <h4>{course.name}</h4>
                        </div>
                        <div className="courseDesc">
                            <p>{course.desc}</p>
                        </div>
                    </div>
                    ))}
            
                </div>
            </div>
    )
}

export default Courses