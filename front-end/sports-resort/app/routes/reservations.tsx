import { useState } from "react";
import Header from "~/components/layout/Header";

import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

export default function Reservations() {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    };
    const formattedDate = today.toLocaleDateString('fr-FR', options);

    const [selected, setSelected] = useState<Date>();

    return (
        <>
            <Header />

            <section className="relative bg-blue text-white overflow-hidden">
                <div className="h-auto text-center py-12">
                    <h1 className="text-heading1 font-bold max-w-xl mx-auto text-white">Réservation de créneaux de sports</h1>
                </div>

                <div className="w-full overflow-hidden leading-[0] bg-white">
                    <svg className="relative block w-full h-[60px]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1200 120">
                    <path d="M1200,0 L0,0 L1200,120 Z" className="fill-blue" />
                    </svg>
                </div>
                <img src="../../medias/images/sport-icons/baseball.png" alt="" className="absolute w-1/12 top-10 left-60"/>
                <img src="../../medias/images/sport-icons/foot.png" alt="" className="absolute w-1/12 bottom-15 left-[-40px]"/>
                <img src="../../medias/images/sport-icons/volley.png" alt="" className="absolute w-1/20 bottom-10 right-50"/>
                <img src="../../medias/images/sport-icons/basket.png" alt="" className="absolute w-1/12 rotate-20 top-2 right-5"/>
            </section>

            <section className="flex w-full my-container py-12 px-2 gap-4">
                <div className="bg-white flex-grow-0">
                    <div>
                        <h3 className="text-center font-bold uppercase py-3">calendrier</h3>
                        <div className="bg-light-white rounded-border px-4 py-6 border border-border">
                            <DayPicker
                                animate
                                mode="single"
                                selected={selected}
                                onSelect={setSelected}
                                // footer={
                                //     selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
                                // }
                            />
                        </div>
                    </div>
                    <div>
                        <h3>filtres</h3>
                    </div>
                </div>
                <div className="flex-grow">
                    <div className="flex gap-2 py-3 justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                        <p className="font-bold uppercase">{formattedDate}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </div>
                    <div className="bg-light-white rounded-border px-8 py-6 border border-border flex gap-4">
                        <div className="w-fit pt-6">
                            {Array.from({ length: 13 }).map((_, index) => (
                                <p
                                    key={index}
                                    className="mb-7 font-bold uppercase"
                                > {index+8}:00</p>
                            ))}
                        </div>
                        <div className="flex flex-grow gap-4">
                            <div className="flex flex-col text-center flex-grow">
                                <h3 className="mb-3 font-bold uppercase">Court I</h3>
                                {Array.from({ length: 12 }).map((_, index) => (
                                    <>
                                        <a
                                        key={index}
                                        href=""
                                        className="w-full border-blue text-blue hover:text-white hover:bg-blue border-2 rounded-border px-6 py-2 duration-200 ease-in-out uppercase font-bold m-1"
                                        >
                                            Réserver
                                        </a>
                                        {/* <a
                                        key={index}
                                        className=" w-full border-blue text-blue border-2 rounded-border px-6 py-2 uppercase font-bold m-1 opacity-50 cursor-not-allowed"
                                        >
                                            occuper
                                        </a>
                                        <a
                                        key={index}
                                        className=" w-full border-blue text-blue border-2 rounded-border px-6 py-2 uppercase font-bold m-1 opacity-50 cursor-not-allowed"
                                        >
                                            🎾 Coach
                                        </a> */}
                                    </>
                                ))}
                            </div>
                            <div className="flex flex-col text-center flex-grow">
                                <h3 className="mb-3 font-bold uppercase">Court II</h3>
                                {Array.from({ length: 12 }).map((_, index) => (
                                    <>
                                        <a
                                        key={index}
                                        href=""
                                        className="w-full border-blue text-blue hover:text-white hover:bg-blue border-2 rounded-border px-6 py-2 duration-200 ease-in-out uppercase font-bold m-1"
                                        >
                                            Réserver
                                        </a>
                                        {/* <a
                                        key={index}
                                        className=" w-full border-blue text-blue border-2 rounded-border px-6 py-2 uppercase font-bold m-1 opacity-50 cursor-not-allowed"
                                        >
                                            occuper
                                        </a>
                                        <a
                                        key={index}
                                        className=" w-full border-blue text-blue border-2 rounded-border px-6 py-2 uppercase font-bold m-1 opacity-50 cursor-not-allowed"
                                        >
                                            🎾 Coach
                                        </a> */}
                                    </>
                                ))}
                            </div>
                            <div className="flex flex-col text-center flex-grow">
                                <h3 className="mb-3 font-bold uppercase">Court III</h3>
                                {Array.from({ length: 12 }).map((_, index) => (
                                    <>
                                        <a
                                        key={index}
                                        href=""
                                        className="w-full border-blue text-blue hover:text-white hover:bg-blue border-2 rounded-border px-6 py-2 duration-200 ease-in-out uppercase font-bold m-1"
                                        >
                                            Réserver
                                        </a>
                                        {/* <a
                                        key={index}
                                        className=" w-full border-blue text-blue border-2 rounded-border px-6 py-2 uppercase font-bold m-1 opacity-50 cursor-not-allowed"
                                        >
                                            occuper
                                        </a>
                                        <a
                                        key={index}
                                        className=" w-full border-blue text-blue border-2 rounded-border px-6 py-2 uppercase font-bold m-1 opacity-50 cursor-not-allowed"
                                        >
                                            🎾 Coach
                                        </a> */}
                                    </>
                                ))}
                            </div>
                            <div className="flex flex-col text-center flex-grow">
                                <h3 className="mb-3 font-bold uppercase">Court IV</h3>
                                {Array.from({ length: 12 }).map((_, index) => (
                                    <>
                                        <a
                                        key={index}
                                        href=""
                                        className="w-full border-blue text-blue hover:text-white hover:bg-blue border-2 rounded-border px-6 py-2 duration-200 ease-in-out uppercase font-bold m-1"
                                        >
                                            Réserver
                                        </a>
                                        {/* <a
                                        key={index}
                                        className=" w-full border-blue text-blue border-2 rounded-border px-6 py-2 uppercase font-bold m-1 opacity-50 cursor-not-allowed"
                                        >
                                            occuper
                                        </a>
                                        <a
                                        key={index}
                                        className=" w-full border-blue text-blue border-2 rounded-border px-6 py-2 uppercase font-bold m-1 opacity-50 cursor-not-allowed"
                                        >
                                            🎾 Coach
                                        </a> */}
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    );
}