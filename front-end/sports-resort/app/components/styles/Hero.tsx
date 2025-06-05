import Button from "~/components/styles/Button";

export default function Hero () {
  return (
    <div className="min-h-[650px] w-full relative bg-cover" style={{
      backgroundImage:
        "url(/medias/images/hero.jpg)",
    }}>
      <div className="absolute h-full w-full bg-[#00000099]">
        <div className="flex flex-col items-center justify-center text-center h-full gap-14 max-w-4xl mx-auto px-4">
          <h1 className="text-heading1 font-bold text-center"> Réserve ta séance en quelques clics</h1>
          <p className="text-base">
            Que tu sois amateur de sensations fortes ou en quête de bien-être, notre plateforme te permet
            de réserver facilement tes séances dans les meilleures installations sportives autour de toi.
            Trouve ton sport, ton coach ou ton équipe, et reste en mouvement à ton rythme&nbsp;!
          </p>
          <Button name="Trouve ta séance idéale"
                  className="hover:text-white"
                  href="/"/>
        </div>
      </div>
    </div>
  )
}
