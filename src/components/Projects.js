import React from "react";
import Experience from "./Experience";

const Projects = () => {
  return (
    <div>
      <div className="w-full h-full content-center bg-black">
        <h1 className="text-8xl font-bold text-center pt-10 text-transparent bg-clip-text bg-gradient-to-r from-gpl to-gpr">
          Projects
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 mt-10">
          <Experience
            name="FitHub"
            place="React, ExpressJS, MongoDB, NodeJS, HTML, CSS, Jira, Figma"
            start="Sep 2022 - "
            end="Present"
            p1="Building a MERN stack online application to add a social component to fitness, enabling users to interact with one another, plan and log workouts, and live a healthy lifestyle with their friends"
            p2="Using Agile approaches, coordinated with a team of five, held weekly scrum meetings, and tracked progress on Jira and Git"
            p3="Created a thorough UI/UX design on Figma to visualize the web application's front end"
          />
          <Experience
            name="Portfolio Website"
            place="React, Tailwind CSS, Axios, Framer Motion, Jokes API"
            start="Oct 2022"
            p1="Integrated React.js with Tailwind CSS to construct a portfolio website that is aesthetically pleasing and interactive."
            p2="Used Jokes API to retrieve data and show some programming jokes, giving the website a personal touch and making the user grin"
            p3="Adopted Framer Motion and the typewriter effect, allowing for engaging animations and effects for a positive user experience"
          />
          <Experience
            name="Crypto Tracker"
            place="React, CSS, Axios, CoinGecko API"
            start="Oct 2022"
            p1="Programmed a React.js application with CSS, to search and analyse cryptocurrencies in real-time"
            p2="Used the CoinGecko API to retrieve cryptocurrency data and show it in a table with a function to search for the coins"
            p3="Utilized React hooks and states to permit data modification when rendering on the application"
          />
          <Experience
            name="Medical Application"
            place="Java, Android Studio, Firebase, JUnit, Mockito"
            start="May 2021"
            p1=" Partnered with four students, to create an Android health booking application utilizing object-oriented programming in Java"
            p2="Used Agile methods, SOLID principles, and GitHub to efficiently develop the application with minimal conflicts and roadblocks"
            p3="Used JUnit and Mockito in combination with other testing formats to comprehensively test the software, leaving no room for error"
          />
          <Experience
            name="Mock Twitter"
            place="Java, JUnit Test, Eclipse"
            start="May 2021"
            p1="Used multiple design patterns to create a Twitter mockup that allowed users to follow one another, post tweets, and see tweets"
            p2="Combined file manipulation and regular expressions to implement a feature that searched for the top three hashtags used by the top
            10 most influential people in 2020"
            p3="Tested extensively, using the JUnit testing framework, ensuring that 100% of the testable code is covered"
          />
          <Experience
            name="Solar System Simulator"
            place="Java, JavaFX, IntelliJ"
            start="Sep 2019"
            p1="Developed a solar system simulator using object-oriented programming and agile methods to provide an end-user with a functional and educational program"
            p2="Used JavaFX to create an interactive and modern design in which the user can control aspects of space such as gravitation pull"
            p3="Worked closely with the end-user to ensure that all requirements were met, and thoroughly documented the application's development"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
