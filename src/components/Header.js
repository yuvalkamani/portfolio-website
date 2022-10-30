import React, { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Typewriter from "typewriter-effect";
import EmailIcon from "@mui/icons-material/Email";
import { motion } from "framer-motion";
import DescriptionIcon from "@mui/icons-material/Description";
import "../App.css";
import axios from "axios";

function Header() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [joke, setJoke] = useState("");

  useEffect(() => {
    const url =
      "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
    axios.get(url).then((res) => {
      setJoke(res.data.joke);
    });
  }, []);

  function getAnotherJoke() {
    const url =
      "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
    axios.get(url).then((res) => {
      setJoke(res.data.joke);
    });
  }

  const [cursorVariant, setCursorVariant] = useState("default");
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
    },
    text: {
      width: 150,
      height: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "yellow",
      mixBlendMode: "difference",
    },
  };

  return (
    <div className="h-screen w-screen bg-silverwhite">
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
      <div>
        <div className="place-items-center text-center">
          <h1
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="font-bold lg:text-[200px] md:text-[150px] sm:text-[75px] text-transparent bg-clip-text bg-gradient-to-r from-gl to-gr pt-[130px]"
          >
            Yuval Kamani
          </h1>
        </div>
        <div className="flex flex-row justify-between mx-[100px] my-[50px]">
          <div className="text-left max-w-lg font-bold">
            <p className="text-l text-gl ">
              Auto-generated jokes to make you cringe or laugh:
            </p>
            <p className="m-5 text-xl">{joke}</p>
            <button
              className="outline text-l outline-1 p-2 rounded-xl text-silverwhite bg-gl"
              onClick={getAnotherJoke}
            >
              Another one?
            </button>
          </div>
          <div className="text-xl font-bold text-right max-w-lg">
            <p>Computer Science and Mathematics at UofT</p>
            <div className="inline-flex">
              <h1>Aspiring &nbsp;</h1>
              <div className="text-gl">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Binge-watcher?")
                      .pauseFor(300)
                      .typeString(" Tempting.")
                      .deleteAll()
                      .typeString("Mathematician?")
                      .pauseFor(300)
                      .typeString(" Perhaps.")
                      .deleteAll()
                      .typeString("Software Engineer?")
                      .pauseFor(300)
                      .typeString(" Yeahhhhhh")
                      .start();
                  }}
                />
              </div>
            </div>
            <p> </p>
            <a href="https://www.linkedin.com/in/ykamani/" target="_blank">
              <LinkedInIcon className="scale-150 m-2" />
            </a>
            <a href="https://github.com/yuvalkamani" target="_blank">
              <GitHubIcon className="scale-150 m-2" />
            </a>
            <a href="mailto: yuvalkamani@gmail.com" target="_blank">
              <EmailIcon className="scale-150 m-2" />
            </a>
            <a
              href="https://drive.google.com/file/d/1D634QaOsD1XvF1LLuE4jEzu3HK4HOyb7/view?usp=sharing"
              target="_blank"
            >
              <DescriptionIcon className="scale-150 m-2" />
            </a>
          </div>
        </div>
        <div className="place-items-center text-center">
          <KeyboardArrowDownIcon />
        </div>
      </div>
    </div>
  );
}

export default Header;
