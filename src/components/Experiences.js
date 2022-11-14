import React from "react";
import Experience from "./Experience";

const Experiences = () => {
  return (
    <div className="w-full h-full content-center bg-black">
      <h1 className="text-8xl font-bold text-center pt-10 text-transparent bg-clip-text bg-gradient-to-r mx-10 from-gpl to-gpr">
        Experience
      </h1>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 mt-10">
        <Experience
          name="Web Administrator (Co-op)"
          place="University of Toronto Scarborough | "
          city="Toronto, Canada"
          start="May 2022 - "
          end="Aug 2022"
          p1="Managed the migration and maintenance of 10+ websites, consisting of over 1000 elements, from Drupal 7 to Drupal 9"
          p2="Tested multiple sites thoroughly to ensure full functionality, using Katalon TestOps to automate testing"
          p3="Designed and implemented several body components using Drupal, HTML and CSS Bootstrap to display appealing website content"
        />
        <Experience
          name="Web Development Specialist"
          place="Sustainable Innovation Group | "
          city="Toronto, Canada"
          start="Sep 2021 - "
          end="Present"
          p1="Designed and developed a website, siguoft.com, using external resources to showcase and market the organization's purpose"
          p2="Administered updates and maintenance of the website whilst debugging and testing at a large scale to constantly improve user
          experience and navigation"
          p3="Collaborated with several external associations to deploy a website for one of the biggest case-competition in Ontario, significantly
          increasing sales and traffic, eclipsecompetition.com"
        />
        <Experience
          name="Teaching Assistant"
          place="University of Toronto | "
          city="Toronto, Canada"
          start="Jan 2022 - "
          end="Sep 2022"
          p1="Implemented weekly tutorials to develop the confidence and knowledge of first-year mathematics students"
          p2="Provided weekly office hours for students to clarify any course-related concerns, as well as provided assurance when answering other
          questions"
          p3="Presented a review seminar for 400+ students, answering all questions and explaining every topic in detail"
        />
      </div>
    </div>
  );
};

export default Experiences;
