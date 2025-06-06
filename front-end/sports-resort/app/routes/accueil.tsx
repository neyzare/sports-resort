import Footer from "~/components/layout/Footer";
import Header from "~/components/layout/Header";
import Button from "~/components/styles/Button";
import Hero from "~/components/styles/Hero";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/24/solid'
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

export default function Accueil() {
  const swiperRef = useRef()

  const dataHero = {
    title: "Réserve ta séance en quelques clics",
    text: "Que tu sois amateur de sensations fortes ou en quête de bien-être, notre plateforme te permet de réserver " +
      "facilement tes séances dans les meilleures installations sportives autour de toi. " +
      "Trouve ton sport, ton coach ou ton équipe, et reste en mouvement à ton rythme!",
    button: "Trouve ta séance idéale",
    href: "/",
  }

  return(
    <>
      <Header />
      <Hero title={dataHero.title} text={dataHero.text} button={dataHero.button} href={dataHero.href}/>
      <div className="py-12 px-2 w-full my-container">
        <div className="text-black flex flex-col items-center gap-6">
          <h2 className="text-heading2">Nos sports</h2>
          <h3 className="text-heading3 text-center">Une offre variée pour tous les goûts et tous les niveaux</h3>
          <p className="text-base max-w-4xl mx-auto text-center">
            Du terrain au tapis, explore un large choix de disciplines pour te défouler, te dépasser ou simplement
            t’amuser. Que tu sois passionné de tennis, adepte de muscu, ou curieux de tester le yoga, il y a
            toujours un sport fait pour toi.
          </p>
        </div>

          <div className="py-12 max-w-width-container mx-auto">
            <Swiper
              breakpoints={{
                  0: {
                      slidesPerView: 1,
                  },
                  768: {
                      slidesPerView: 2,
                  },
                  1200: {
                      slidesPerView: 3,
                  },
                  1600: {
                      slidesPerView: 4,
                  }
              }}
              spaceBetween={15}
              pagination={{clickable: true,}}
              autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
              }}
              onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
              }}
              modules={[Autoplay, Navigation]}
              className="mySwiper h-60 w-auto cursor-e-resize"
            >

              {[...Array(6)].map((_, index) => (
                <SwiperSlide
                  key={index}
                  className="rounded-border h-20 group bg-cover text-white"
                  style={{
                    backgroundImage: "url(/medias/images/tennis.webp)",
                  }}
                >
                  <div className="relative h-full w-full rounded-border bg-gradient-to-b to-black/70 lg:bg-none lg:hover:bg-gradient-to-b lg:hover:to-black/70">
                    <h3 className="text-heading3 absolute bottom-7 left-7 lg:hidden lg:group-hover:block">
                      Tennis
                    </h3>
                    <Button
                      name="en savoir plus"
                      className="absolute bottom-4 right-4 hover:text-white lg:hidden lg:group-hover:block"
                      href="/"
                    />
                  </div>
                </SwiperSlide>
              ))}


            </Swiper>
            <div className="pt-8 pr-6 space-x-4 lg:hidden flex justify-end">
              <button className="h-8 w-8 p-1 bg-blue rounded-full lg:hidden" onClick={() => swiperRef.current?.slidePrev()}>
                <ChevronLeftIcon aria-hidden="true" className="stroke-white fill-white"/>
              </button>
              <button className="h-8 w-8 p-1 bg-blue rounded-full lg:hidden" onClick={() => swiperRef.current?.slideNext()}>
                <ChevronRightIcon aria-hidden="true" className="stroke-white fill-white"/>
              </button>
            </div>
          </div>
      </div>
      <Footer/>
    </>
  );
}
