import Footer from "~/components/layout/Footer";
import Header from "~/components/layout/Header";
import Button from "~/components/styles/Button";

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/24/solid'

import { Pagination, Autoplay, Navigation } from 'swiper/modules';

function Hero () {
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

export default function Accueil() {
  return(
      <>
          <Header />
          <Hero/>
          <div className="py-12 px-2">
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
                          1200:{
                              slidesPerView: 3,
                          },
                          1600:{
                              slidesPerView: 4,
                          }
                      }}
                      spaceBetween={15}
                      pagination={{clickable: true,}}
                      autoplay={{
                          delay: 3500,
                          disableOnInteraction: false,
                      }}
                      modules={[Autoplay]}
                      className="mySwiper h-60 w-auto"
                  >
                      <SwiperSlide className="rounded-border h-20  group bg-cover" style={{
                          backgroundImage:
                              "url(/medias/images/tennis.webp)",
                      }}>
                          <div className="relative h-full w-full rounded-border bg-gradient-to-b to-black/70 lg:bg-none lg:hover:bg-gradient-to-b lg:hover:to-black/70">
                              <h3 className="text-heading3 absolute bottom-7 left-7 lg:hidden lg:group-hover:block">Tennis</h3>
                              <Button name="en savoir plus" className="absolute bottom-4 right-4 hover:text-white lg:hidden lg:group-hover:block" href="/"/>
                          </div>

                      </SwiperSlide>
                      <SwiperSlide className="rounded-border h-20  group bg-cover" style={{
                          backgroundImage:
                              "url(/medias/images/tennis.webp)",
                      }}>
                          <div className="relative h-full w-full rounded-border bg-gradient-to-b to-black/70 lg:bg-none lg:hover:bg-gradient-to-b lg:hover:to-black/70">
                              <h3 className="text-heading3 absolute bottom-7 left-7 lg:hidden lg:group-hover:block">Tennis</h3>
                              <Button name="en savoir plus" className="absolute bottom-4 right-4 hover:text-white lg:hidden lg:group-hover:block" href="/"/>
                          </div>

                      </SwiperSlide>
                      <SwiperSlide className="rounded-border h-20 group bg-cover" style={{
                          backgroundImage:
                              "url(/medias/images/tennis.webp)",
                      }}>
                          <div className="relative h-full w-full rounded-border bg-gradient-to-b to-black/70 lg:bg-none lg:hover:bg-gradient-to-b lg:hover:to-black/70">
                              <h3 className="text-heading3 absolute bottom-7 left-7 lg:hidden lg:group-hover:block">Tennis</h3>
                              <Button name="en savoir plus" className="absolute bottom-4 right-4 hover:text-white lg:hidden lg:group-hover:block" href="/"/>
                          </div>

                      </SwiperSlide>
                      <SwiperSlide className="rounded-border h-20 group bg-cover" style={{
                          backgroundImage:
                              "url(/medias/images/tennis.webp)",
                      }}>
                          <div className="relative h-full w-full rounded-border bg-gradient-to-b to-black/70 lg:bg-none lg:hover:bg-gradient-to-b lg:hover:to-black/70">
                              <h3 className="text-heading3 absolute bottom-7 left-7 lg:hidden lg:group-hover:block">Tennis</h3>
                              <Button name="en savoir plus" className="absolute bottom-4 right-4 hover:text-white lg:hidden lg:group-hover:block" href="/"/>
                          </div>
                      </SwiperSlide>
                      <SwiperSlide className="rounded-border h-20 group bg-cover" style={{
                          backgroundImage:
                              "url(/medias/images/tennis.webp)",
                      }}>
                          <div className="relative h-full w-full rounded-border bg-gradient-to-b to-black/70 lg:bg-none lg:hover:bg-gradient-to-b lg:hover:to-black/70">
                              <h3 className="text-heading3 absolute bottom-7 left-7 lg:hidden lg:group-hover:block">Tennis</h3>
                              <Button name="en savoir plus" className="absolute bottom-4 right-4 hover:text-white lg:hidden lg:group-hover:block" href="/"/>
                          </div>
                      </SwiperSlide>


                  </Swiper>
                  <div className="pt-8 pr-6 space-x-4 lg:hidden flex justify-end">
                      <button className="h-8 w-8 p-1 bg-blue rounded-full lg:hidden">
                          <ChevronLeftIcon aria-hidden="true" />
                      </button>
                      <button className="h-8 w-8 p-1 bg-blue rounded-full lg:hidden">
                          <ChevronRightIcon aria-hidden="true"  />
                      </button>
                  </div>
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
