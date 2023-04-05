"use client";
import { Fragment } from "react";
import Card from "@/components/Card";
import Intro from "@/components/Intro";
import CardData from "@/components/data/CardData";
import ExperienceData from "@/components/data/ExperienceData";
import Navbar from "@/components/navbar/Navbar";
export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <Intro />
      <h4 className="text-5xl text-white text-center my-2">PORTFOLIO</h4>
      <div className="flex flex-wrap justify-center mt-8">
        {CardData.map((el) => (
          <Card
            key={el.title}
            title={el.title}
            description={el.description}
            link={el.link}
            image={el.image}
          ></Card>
        ))}
      </div>
      <h4 className="text-5xl text-white text-center my-2">EXPERIENCE</h4>
      <div className="flex flex-wrap justify-center mt-8">
        {ExperienceData.map((el) => (
          <Card
            key={el.title}
            title={el.title}
            description={el.description}
            link={el.link}
            image={el.image}
          ></Card>
        ))}
      </div>
    </Fragment>
  );
}
