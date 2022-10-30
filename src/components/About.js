import React from "react";

const About = () => {
  return (
    <div className="h-screen bg-black ">
      <div className="place-items-center text-center">
        <h1 className="font-bold text-8xl text-transparent bg-clip-text bg-gradient-to-r from-abgl to-abgr lg:pt-[130px] md:pt-[100px]">
          About Me
        </h1>
      </div>
      <div className="lg:text-xl font-bold md:text-xl sm:text-xs text-bold text-left mb-20 mt-20 lg:mx-[100px] md:mx-[50px]">
        <p className="text-silverwhite mb-5">
          Being a computer science student, coding is second nature to me.
          Having a passion for building programs and designing beautiful
          websites, I am eager to apply my excellent technical and soft skills
          to become a software engineer.
        </p>
        <p className="text-green-500">Currently: </p>
        <p className="text-silverwhite">
          I am studying in my third-year at the University of Toronto
          Scarborough. A few projects I am working on/planning to work on:
          <ul className="text-silverwhite list-disc mx-6 my-2">
            <li>
              FitHub - A full MERN stack fitness application that brings a
              social aspect to being fit
            </li>
            <li>
              Cryptocurrency Tracker - Testing my API skills using CoinGecko API
              to fetch data about cryptocurrencies and display them
            </li>
            <li>
              Netflix Clone - Hone my React skills by mimicking Netflix and
              getting information from The Movie Database API
            </li>
          </ul>
        </p>
        <p>I am seeking for an internship in Winter 2023</p>
        <p className="text-red-500">Previously: </p>
        <p className="text-silverwhite mb-[130px]">
          I worked as a Web Administrator at the University of Toronto
          Scarborough for my first co-op work term. I was responsible for over
          1000 content types and 10+ websites to migrate, test and maintain in
          Drupal.
        </p>
      </div>
    </div>
  );
};

export default About;
