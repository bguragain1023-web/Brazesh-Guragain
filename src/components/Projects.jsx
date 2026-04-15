import React from "react";
import timeImage from "../assets/t-tracker.JPG";
import contactList from "../assets/c-list.JPG";
import prank from "../assets/prank.JPG";
import port from "../assets/port.JPG";
import weather from "../assets/weather.JPG";
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
      github: "https://github.com/bguragain1023-web",
      goLive: "https://time-tracker-react-liart.vercel.app",
    },

    {
      image: contactList,
      desc: " Dynamic contact directory using RandomUser API to generate realistic profiles with search & filter.",
      toolOne: "HTML ",
      toolTwo: "CSS",
      toolThree: "Javascript",
      github: "https://github.com/bguragain1023-web",
      goLive: "https://https://vercel.com/bguragain1023-webs-projects",
    },

    {
      image: prank,
      title: "Prank Calculator",
      desc: " A fully working calculator with unexpected behaviour that catches users off-guard by adding random number 30% of the time .",
      toolOne: "React ",
      toolTwo: "CSS",
      toolThree: "Javascript",
      github: "https://github.com/bguragain1023-web",
      goLive:
        "https://reactprankcalculatortest-axt0yuk00-bguragain1023-webs-projects.vercel.app",
    },

    {
      image: weather,
      title: "Weather App",
      desc: "  Real-time weather dashboard pulling live data via API. Enter any city and get conditions instantly.",
      toolOne: "HTML ",
      toolTwo: "CSS",
      toolThree: "Javascript",
      github: "https://github.com/bguragain1023-web",
      goLive: "https://vercel.com/bguragain1023-webs-projects",
    },

    {
      image: port,
      title: "Portfolio",
      desc: " A fully working calculator with unexpected behaviour that catches users off-guard by adding random number 30% of the time .",
      toolOne: "React ",
      toolTwo: "CSS",
      toolThree: "Javascript",
      github: "https://github.com/bguragain1023-web",
      goLive: "https://vercel.com/bguragain1023-webs-projects",
    },
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
