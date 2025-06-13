import Footer from "~/components/layout/Footer";
import Header from "~/components/layout/Header";
import Button from "~/components/styles/Button";
import Hero from "~/components/styles/Hero";
import tennis from "medias/images/tennis.webp"
import axios from "axios";
import { useEffect, useState } from "react";

const dataHero = {
  image: "hero_sports.avif",
  title: "Choisis ton sport, pas ton excuse !",
  text: "Que tu sois un sportif du dimanche ou un champion en sueur 7j/7, ici tu trouveras forcément ton bonheur. Tennis, foot, badminton ou ping-pong... il y a de quoi transpirer, transpercer et triompher ! Réserve ton terrain, évite la file, et surtout : pense à t’échauffer (parce que l’excuse du claquage, on la connaît déjà).",
  button: "Réserver une séance",
  href: "/reservations",
}

interface Sport {
  imageUrl: string;
  emojie: string;
  name: string;
  description: string;
}

const API_BASE = 'http://localhost:8080/api/sports';

export default function Sport () {
  const [sports, setSports] = useState<Sport[]>([]);

  useEffect(() => {
    loadSports();
  }, []);

  const loadSports = async () => {
    try {
      const [sRes] = await Promise.all([
        axios.get(`${API_BASE}`)
      ]);
      setSports(sRes.data);
    } catch (e) {
      console.error('Erreur fetch:', e);
    }
  }

  console.log(sports)

  return (
    <>
      <Header/>
      <Hero image={dataHero.image} title={dataHero.title} text={dataHero.text} button={dataHero.button} href={dataHero.href}/>
      <div className="py-12 px-2 space-y-8">
        {sports.map((sport, index) => {
          const pair= index % 2;
          return (
            <div className={`max-w-7xl py-8 mx-auto flex flex-col gap-6 ${pair === 0 ? "md:flex-row-reverse" : "md:flex-row"}`} key={sport.title} id={sport.lien}>
              <div className=" w-full h-full object-cover my-auto">
                <img src={sport?.imageUrl} alt="" className="h-full w-full object-cover rounded-border"/>
              </div>
              <div className={`text-black w-full flex flex-col ${pair === 0 ? "items-end" : "items-start" } gap-4 md:justify-center`}>
                <h2 className="text-heading2 uppercase font-bold">
                  {pair === 0 ? sport?.emojie : ""} {sport?.name} {pair !== 0 ? sport?.emojie : ""}
                </h2>
                <p className={`${pair === 0 ? "text-right" : "text-left"} w-140`}>
                  {sport?.description}
                </p>
                <Button name="reservation"
                        className=""
                        href="/reservations" />
              </div>
            </div>
          )
        })}
      </div>
      <Footer/>
    </>
  )
}