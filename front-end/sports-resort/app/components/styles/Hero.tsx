import Button from "~/components/styles/Button";

export default function Hero ({title, text, button, href}) {
  return (
    <div className="min-h-[650px] w-full relative bg-cover text-white" style={{
      backgroundImage:
        "url(/medias/images/hero.jpg)",
    }}>
      <div className="absolute h-full w-full bg-[#00000099]">
        <div className="flex flex-col items-center justify-center text-center h-full gap-14 max-w-4xl mx-auto px-4">
          <h1 className="text-heading1 font-bold text-center">{title}</h1>
          <p className="text-base">
            {text}
          </p>
          <Button name={button}
                  className="hover:text-white"
                  href={href}/>
        </div>
      </div>
    </div>
  )
}
