import React from "react";
import timeImage from "../assets/t-tracker.JPG";
import contactList from "../assets/c-list.JPG";
import prank from "../assets/prank.JPG";
import port from "../assets/port.JPG";
import weather from "../assets/weather.JPG";
import movie from "../assets/movie.JPG";
import cine from "../assets/cine.png";
import { Title } from "./Title";
import { Card } from "./Card";

export const Projects = () => {
  const projects = [
    {
      image: timeImage,
      title: "Time Tracker",
      desc: "A time-tracking app that flips productivity on its head. Helping users identify and eliminate their worst time wasting habit",
      toolOne: "React ",
      toolTwo: "CSS",
      toolThree: "Javascript",
      github: "https://github.com/bguragain1023-web/Time-Tracker-React",
      goLive: "https://time-tracker-react-liart.vercel.app",
    },

    {
      image: contactList,
      desc: " Dynamic contact directory using RandomUser API to generate realistic profiles with search & filter.",
      toolOne: "HTML ",
      toolTwo: "CSS",
      toolThree: "Javascript",
      github: "https://github.com/bguragain1023-web/Contact-list",
      goLive: "https://contact-list-seven.vercel.app/",
    },

    {
      image: prank,
      title: "Prank Calculator",
      desc: " A fully working calculator with unexpected behaviour that catches users off-guard by adding random number 30% of the time .",
      toolOne: "React ",
      toolTwo: "CSS",
      toolThree: "Javascript",
      github: "https://github.com/bguragain1023-web/React-prank-calculator",
      goLive:
        "https://reactprankcalculatortest-axt0yuk00-bguragain1023-webs-projects.vercel.app",
    },

    {
      image: weather,
      title: "Weather App",
      desc: " A React application that fetches real-time weather data from the OpenWeatherMap API, displaying current conditions and a 5-day forecast for any city in the world, with dynamic backgrounds that change based on the live weather condition..",
      toolOne: "React ",
      toolTwo: "CSS",
      toolThree: "Javascript",
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
      image: movie,
      title: "Movie World",
      desc: "A React movie discovery app powered by the OMDB API. Loads a random movie on launch, lets you search any title, and categorize movies as Drama or Action into a personal watchlist. Features dynamic poster backgrounds, category filtering, and local storage persistence so your list survives page refreshes.",
      toolOne: "React ",
      toolTwo: "CSS",
      toolThree: "Javascript",
      github: "https://github.com/bguragain1023-web/Movie-World",
      goLive:
        "https://movie-world-git-main-bguragain1023-webs-projects.vercel.app/",
    },
    {
      image: cine,
      title: "CineTrail",
      desc: "CineTrail is a React-based movie discovery app powered by the TMDB API. Browse popular, trending, and genre-based movies, watch trailers in a modal overlay, and save your favourites to a persistent watchlist — all in one place, no login required.",
      toolOne: "React ",
      toolTwo: "CSS",
      toolThree: "Javascript",
      github: "https://github.com/bguragain1023-web/CineTrial",
      goLive: "https://cine-trial-pn7d.vercel.app/",
    }
  ];
  return (
    <section className="mt-5 pt-5" id="projects">
      <Title title="My projects" />

      <div className=" container mt-5 p-5">
        <div className="row row-cols-1 row-cols-md- row-cols-lg-3 g-4">
          {projects.map((project, index) => (
            <div className="col" key={index}>
              <Card {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
