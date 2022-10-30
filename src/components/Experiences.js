import React from "react";
import Experience from "./Experience";

const Experiences = () => {
  return (
    <div className="w-full h-full content-center bg-black">
      <h1 className="text-8xl font-bold text-center pt-10 text-transparent bg-clip-text bg-gradient-to-r from-gpl to-gpr">
        Experience
      </h1>
      <div className="grid grid-cols-2 mt-10">
        <Experience
          name="Web Administrator (Co-op)"
          place="University of Toronto Scarborough | "
          city="Toronto, Canada"
          start="May 2022 - "
          end="Aug 2022"
          p1="Migrated and maintained 10+ websites, consisting of thousands of content types from Drupal 7 to Drupal 9"
          p2="Tested multiple sites thoroughly to ensure full functionality, utilized Katalon TestOps for automated testing"
          p3="Developed several body components using Drupal, HTML and CSS Bootstrap to design and display appealing website components"
        />
        <Experience
          name="Web Development Specialist"
          place="Sustainable Innovation Group | "
          city="Toronto, Canada"
          start="Sep 2021 - "
          end="Present"
          p1="Designed and developed a website using external resources to showcase and market the organization’s purpose, siguoft.com"
          p2="Administered updates and maintenance of the website whilst debugging and testing at a large scale to constantly improve user
          experience and navigation"
          p3="Collaborated with several external associations to design, build and deploy a website for one of the biggest case-competition in
          Ontario, significantly increasing sales and traffic, eclipsecompetition.com"
        />
        <Experience
          name="Teaching Assistant"
          place="University of Toronto | "
          city="Toronto, Canada"
          start="Jan 2022 - "
          end="Sep 2022"
          p1="Planned weekly tutorials for first-year mathematics students, building confidence and enhancing their understanding of Calculus"
          p2="Facilitated weekly office hours to thoroughly clarify and solve any course-related concerns raised by students, providing assurance
          when solving other questions"
          p3="Inspired different problem-solving techniques to students, improving accuracy and reducing mistakes in answering questions"
        />
      </div>
    </div>
  );
};

export default Experiences;
