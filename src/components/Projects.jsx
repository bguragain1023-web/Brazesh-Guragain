import React from "react";
import timeImage from "../assets/timetracker.png";
import contactList from "../assets/c-list.JPG";
import aiprompt from "../assets/aiprompt.png";
import port from "../assets/portfolio.png";
import weather from "../assets/weather.JPG";
import cine from "../assets/cine.png";

import { Title } from "./Title";
import { Card } from "./Card";

export const Projects = () => {
  const projects = [
    {
      image: timeImage,
      title: "Time Tracker",
      desc: "A full stack time-tracking app built with React, Node.js, Express and MongoDB. Users add tasks and hours, move them between an entry list and a bad list, and identify where their time is actually going — with bulk selection, real-time updates and data persisted to the cloud.",
      toolOne: "React ",
      toolTwo: "express",
      toolThree: "node.js",
      toolFour: "mongodb",
      github: "https://github.com/bguragain1023-web/Time-Tracker-API",
      goLive: "https://time-tracker-api-l6bn.onrender.com/",
    },

    {
      image: aiprompt,
      title: "aiPromptDiff",
      desc: " One prompt. Two AI models. Side-by-side comparison with metrics, key differences and session history. Built to understand how Claude and GPT respond differently to the same input.",
      toolOne: "React ",
      toolTwo: "CSS",
      toolThree: "openAI API",
      toolFour: "claude API",
      github: "https://github.com/bguragain1023-web/AI-Prompt-Diff",
      goLive: "https://ai-prompt-diff.vercel.app/",
    },

    {
      image: contactList,
      title: "Random User Generator",
      desc: " Dynamic contact directory using RandomUser API to generate realistic profiles with search & filter.",
      toolOne: "HTML ",
      toolTwo: "CSS",
      toolThree: "Javascript",
      toolFour: "Random user API",
      github: "https://github.com/bguragain1023-web/Contact-list",
      goLive: "https://contact-list-seven.vercel.app/",
    },

    {
      image: weather,
      title: "Weather App",
      desc: " A React application that fetches real-time weather data from the OpenWeatherMap API, displaying current conditions and a 5-day forecast for any city in the world, with dynamic backgrounds that change based on the live weather condition..",
      toolOne: "React ",
      toolTwo: "CSS",
      toolThree: "Javascript",
      toolFour: "OpenWeather API",
      github: "https://github.com/bguragain1023-web/Weather-app",
      goLive: "https://weather-app-pearl-two-35.vercel.app/",
    },

    {
      image: port,
      title: "Portfolio",
      desc: "Personal developer portfolio built with React. Designed and built from scratch with a fully responsive layout, smooth animations, and a hamburger navigation menu for small screens. Showcases my projects, skills, and background — with a downloadable resume and direct contact options.",
      toolOne: "React ",
      toolTwo: "CSS",
      toolThree: "Javascript",
      github: "https://github.com/bguragain1023-web/Brazesh-Guragain",
      goLive: "https://www.brazeshguragain.com/",
    },

    {
      image: cine,
      title: "CineTrail",
      desc: "CineTrail is a React-based movie discovery app powered by the TMDB API. Browse popular, trending, and genre-based movies, watch trailers in a modal overlay, and save your favourites to a persistent watchlist — all in one place, no login required.",
      toolOne: "React ",
      toolTwo: "CSS",
      toolThree: "Javascript",
      toolFour: "TMDB API",
      github: "https://github.com/bguragain1023-web/CineTrial",
      goLive: "https://cine-trial.vercel.app",
    },
  ];
  return (
    <>
      <section className="mt-5 pt-5" id="projects">
        <Title title="Featured projects" />

        <div className=" container mt-3">
          <div className="container">
            {projects.map((project, index) => (
              <div className="col" key={index}>
                <Card key={index} {...project} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
