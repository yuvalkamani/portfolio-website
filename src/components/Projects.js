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
            p1="Developing a MERN stack web application to bring a social aspect to fitness, allowing users to connect with each other, create and schedule workouts and track progress, leading to an overall healthier lifestyle with friends"
            p2="Coordinating with a team of 5 using Agile methodologies, holding weekly scrum meetings, tracking progress on Jira and Git"
            p3=" Created a detailed UI/UX design on Figma, to envision the frontend of the web application"
          />
          <Experience
            name="Portfolio Website"
            place="React, Tailwind CSS, Axios, Framer Motion, Jokes API"
            start="Oct 2022"
            p1="Implemented a React.js application to search and analyse cryptocurrencies in real-time"
            p2="Used CoinGecko API to fetch cryptocurrency data and display it on a table"
            p3="Utilized React hooks and states to allow change of data when rendering on the application"
          />
          <Experience
            name="Crypto Tracker"
            place="React, CSS, Axios, CoinGecko API"
            start="Oct 2022"
            p1="Implemented a React.js application to search and analyse cryptocurrencies in real-time"
            p2="Used CoinGecko API to fetch cryptocurrency data and display it on a table"
            p3="Utilized React hooks and states to allow change of data when rendering on the application"
          />
          <Experience
            name="Medical Application"
            place="Java, Android Studio, Firebase, JUnit, Mockito"
            start="May 2021"
            p1="Programmed Android health booking application using object-oriented programming in Java, in collaboration with 4 other students"
            p2="Applied Agile methods, SOLID principles, daily scrum meetings and GitHub to smoothly develop the application whilst identifying and
            eliminating miscellaneous errors more efficiently"
            p3="Implemented multiple testing formats such as JUnit and Mockito to thoroughly test the program, leaving almost no margin for error"
          />
          <Experience
            name="Mock Twitter"
            place="Java, JUnit Test, Eclipse"
            start="May 2021"
            p1="Developed Twitter mock using multiple design patterns, allowing users to follow one another, post tweets and display tweets"
            p2="Implemented a feature to find the top three hashtags used by the top 10 most influential people in 2020, using file manipulation and
            regular expressions"
            p3="Tested exhaustively using JUnit testing framework, covering all aspects of testable code to get 100% coverage"
          />
          <Experience
            name="Solar System Simulator"
            place="Java, JavaFX, IntelliJ"
            start="Sep 2019"
            p1="Programmed a solar system simulator, using object-oriented programming and agile methods, to deliver a functioning and educating program to an end-user"
            p2="Utilized JavaFX to build an interactive and modern design where the user can control aspects such as gravitational pull, size of the planets and number of planets"
            p3="Worked closely with the end-user to ensure all requirements are being met and thoroughly documented the development process"
          />
          <Experience
            name="Access to Bristol"
            place="Python, Arduino"
            start="Feb 2019"
            p1="Integrated Dijkstra’s algorithm to an Arduino using Python, to actively search for the shortest path in a game, receiving second place in the competition"
            p2="Acquired expertise in breadboards to implement an automatic streetlight controller to turn on the streetlight if a car passes by, offering optimal energy usage"
            p3="Selected from over 1000 applicants in Bristol and receieved certification of completion"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
