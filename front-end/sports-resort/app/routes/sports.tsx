import Footer from "~/components/layout/Footer";
import Header from "~/components/layout/Header";
import Button from "~/components/styles/Button";
import Hero from "~/components/styles/Hero";
import tennis from "medias/images/tennis.webp"

const sports = [
  { title: 'tennis',
    image: "medias/images/tennis.webp",
    text: 'Redécouvre le plaisir du jeu sur des terrains parfaitement entretenus, adaptés à tous les niveaux. Que tu sois un joueur du dimanche ou un compétiteur aguerri, le tennis est l’un des sports les plus complets pour améliorer ta condition physique tout en t’amusant. Renforce ton cardio, ta coordination et ton mental à chaque échange.\n' +
      'Seul, en double ou avec un coach, profite d’infrastructures de qualité pour t’entraîner, progresser ou simplement passer un bon moment. Réserve ton créneau en ligne et fais de chaque service une nouvelle occasion de te dépasser.',
    href: '/' },
  { title: 'badminton',
    image: "medias/images/badminton.webp",
    text: 'Envie d’un sport rapide, ludique et accessible ? Le badminton est fait pour toi ! Idéal pour brûler des calories sans même t’en rendre compte, il combine agilité, vitesse et précision. Que ce soit pour une session entre amis ou un entraînement plus sérieux, nos terrains t’attendent pour des échanges rythmés et dynamiques.\n' +
      'Facile à prendre en main mais exigeant à maîtriser, le badminton est parfait pour tous les âges et tous les niveaux. Viens tester ton réflexe, améliorer ta technique et partager un bon moment, quelle que soit la météo.',
    href: '/' },
  { title: 'basket',
    image: "medias/images/basket.webp",
    text: 'Viens vivre l’intensité du jeu collectif par excellence ! Le basket est un sport complet qui allie explosivité, esprit d’équipe et endurance. Que tu sois meneur, ailier ou pivot, nos terrains t’offrent l’espace idéal pour t’exprimer, progresser et te challenger.\n' +
      'Parfait pour se dépenser, travailler son cardio et renforcer ses appuis, le basket est aussi un excellent moyen de créer du lien à travers des matchs conviviaux et rythmés. Réserve ton terrain, rassemble ton équipe, et que le match commence !',
    href: '/' },
]

const dataHero = {
  title: "Explore tous nos sports",
  text: "Découvre une large sélection d’activités sportives pour tous les goûts et tous les niveaux. Que tu sois à la recherche" +
    " d’intensité, de détente ou de fun entre amis, nous avons le sport qu’il te faut. Tennis, basket, muscu, yoga, foot… choisis " +
    "ton activité, réserve en ligne, et bouge comme tu aimes !",
  button: "Réserver une séance",
  href: "/",
}

export default function Sport () {
  return (
    <>
      <Header/>
      <Hero title={dataHero.title} text={dataHero.text} button={dataHero.button} href={dataHero.href}/>
      <div className="py-12 px-2 space-y-8">
        {sports.map((sport, index) => {
          const pair= index % 2;
          return (
            <div className={`max-w-7xl mx-auto flex flex-col gap-6 ${pair === 0 ? "md:flex-row-reverse" : "md:flex-row"}`} key={sport.title}>
              <div className=" w-full h-full object-cover my-auto">
                <img src={sport.image} alt="" className="h-full w-full object-cover rounded-border"/>
              </div>
              <div className="text-black w-full flex flex-col gap-4 md:justify-between">
                <h2 className="text-heading2">
                  {sport.title}
                </h2>
                <p>
                  {sport.text}
                </p>
                <Button name="reservation"
                        className=""
                        href={sport.href}/>
              </div>
            </div>
          )
        })}
      </div>
      <Footer/>
    </>
  )
}