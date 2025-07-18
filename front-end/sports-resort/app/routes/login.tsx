import SecondaryHeader from "~/components/layout/SecondaryHeader";
import LoginForm from "~/components/styles/LoginForm";

export default function Login() {
  return (
    <>
      <div className="relative min-h-screen flex flex-col overflow-hidden">
        <header className="absolute inset-x-0 top-0 w-full z-100">
          <SecondaryHeader />
        </header>
        <main className="flex-grow flex items-center justify-center z-50">
          <LoginForm />
        </main>
        <img src="../../medias/images/sport-icons/baseball.png" alt="" className="absolute w-1/6 bottom-30 right-110"/>
        <img src="../../medias/images/sport-icons/basket.png" alt="" className="absolute w-1/6 rotate-20 top-[-60px] right-40"/>
        <img src="../../medias/images/sport-icons/foot.png" alt="" className="absolute w-1/6 rotate-15 top-30 left-[-60px]"/>
        <img src="../../medias/images/sport-icons/judo.png" alt="" className="absolute w-1/6 rotate-30 bottom-30 right-[-40px]"/>
        <img src="../../medias/images/sport-icons/tennis.png" alt="" className="absolute w-1/5 top-20 left-80"/>
        <img src="../../medias/images/sport-icons/volley.png" alt="" className="absolute w-1/6 bottom-10 left-15"/>
      </div>
    </>
  );
}
