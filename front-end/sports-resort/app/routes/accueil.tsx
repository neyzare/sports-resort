import Footer from "~/components/layout/Footer";
import Header from "~/components/layout/Header";
import Button from "~/components/styles/Button"

export default function Accueil() {
  return(
      <>
          <Header />

          <div className="min-h-[520px] w-full relative bg-cover" style={{
              backgroundImage:
                  "url(/medias/images/hero.jpg)",
          }}>
              <div className="absolute h-full w-full bg-[#000000a4]">
                  <h1 className="text-heading1 font-bold text-center"> Réserve ta séance en quelques clics</h1>
                  <p className="text-small">
                      Que tu sois amateur de sensations fortes ou en quête de bien-être, notre plateforme te permet
                      de réserver facilement tes séances dans les meilleures installations sportives autour de toi.
                      Trouve ton sport, ton coach ou ton équipe, et reste en mouvement à ton rythme&nbsp;!
                  </p>
                  <Button name="Trouve ta séance idéale"
                          className=""
                          href="/"/>
              </div>
          </div>

            <Button name="connexion"
                    className="bg-red border-red hover:text-red"
                    href="/"/>
            <Button name="connexion"
                    className=""
                    href="/"/>
            <Button name="inscription"
                    className=""
                    href="/"/>
          <Footer/>
      </>
  );
}
