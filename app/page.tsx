"use client";
import { Fragment, useRef } from "react";
import Card from "@/components/Card";
import Intro from "@/components/Intro";
import CardData from "@/components/data/CardData";
import ExperienceData from "@/components/data/ExperienceData";
import Navbar from "@/components/navbar/Navbar";
export default function Home() {
  const inicioRef = useRef<null | HTMLDivElement>(null);
  const portRef = useRef<null | HTMLHeadingElement>(null);
  const expRef = useRef<null | HTMLHeadingElement>(null);
  const jumpToInicio = () => {
    inicioRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const jumpToExp = () => {
    expRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const jumpToPort = () => {
    portRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Fragment>
      <Navbar exp={jumpToExp} port={jumpToPort} inicio={jumpToInicio} />
      <div style={{ scrollMargin: "100px" }} ref={inicioRef} id="one">
        <Intro />
      </div>
      <h4
        style={{ scrollMargin: "100px" }}
        ref={portRef}
        className="text-5xl text-white text-center my-2"
        id="two"
      >
        PORTFOLIO
      </h4>
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
      <h4
        ref={expRef}
        className="text-5xl text-white text-center my-2"
        id="three"
      >
        EXPERIENCE
      </h4>
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
