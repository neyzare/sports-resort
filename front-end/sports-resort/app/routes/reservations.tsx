import { useEffect, useState } from "react";
import Header from "~/components/layout/Header";
import { fr } from "react-day-picker/locale";

import { DayPicker } from "react-day-picker";
import { isBefore, startOfDay } from 'date-fns';
import "react-day-picker/style.css";
import ReservationPopUp from "~/components/styles/ReservationPopUp";
import { getUserEmailFromToken, getUserRoleFromToken, isAuthenticated } from "~/lib/auth";
import Button from "~/components/styles/Button";

export default function Reservations() {

    // Selection de la date dans la page
    const [selected, setSelected] = useState<Date>(() => new Date());

    const formattedDate = selected?.toLocaleDateString('fr-FR', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }) ?? 'Sélectionnez une date';

    const formattedISODate = `${selected.getFullYear()}-${String(selected.getMonth() + 1).padStart(2, '0')}-${String(selected.getDate()).padStart(2, '0')}`;

    console.log(formattedDate);
    console.log(formattedISODate);

    const isToday = startOfDay(selected).getTime() === startOfDay(new Date()).getTime();

    const goToPreviousDay = () => {
        if (!isLogged || isToday) return;
        setSelected((prev) => {
            const date = new Date(prev);
            date.setDate(date.getDate() - 1);
            return date;
        });
    };

    const goToNextDay = () => {
        if (!isLogged) return;
        setSelected((prev) => {
            const date = new Date(prev);
            date.setDate(date.getDate() + 1);
            return date;
        });
    };

    // Attention à supprimer et mettre dans les cookies ou localStorage
    const [compte, setCompte] = useState("admin");

    const [court1, setCourt1] = useState([
        {
        "startTime": "08:00",
        "endTime": "09:00",
        "type": "resaUser",
        "email": "pablodeteba@icloud.com"
        },
        {
        "startTime": "12:00",
        "endTime": "13:00",
        "type": "resaCoach",
        "email": "pablodeteba@icloud.com"
        },
        {
        "startTime": "15:00",
        "endTime": "16:00",
        "type": "resaUser",
        "email": "deteba@icloud.com"
        },
    ]);
    const [court2, setCourt2] = useState([]);
    const [court3, setCourt3] = useState([]);
    const [court4, setCourt4] = useState([]);

    const timeSlots = Array.from({ length: 12 }, (_, index) => {
        const hour = index + 8;
        return `${hour.toString().padStart(2, "0")}:00`;
    });

    const [isLogged, setIsLogged] = useState(false);
    const [role, setRole] = useState<string | null>(null);
    const [userEmail, setUserEmail] = useState<string | null>(null);
    
    useEffect(() => {
        setIsLogged(isAuthenticated());
        setRole(getUserRoleFromToken());
        setUserEmail(getUserEmailFromToken());
    }, []);



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
                                locale={fr}
                                animate
                                mode="single"
                                selected={selected}
                                onSelect={setSelected}
                                classNames={{
                                    today: `stroke-blue`,
                                    chevron: `fill-blue`,
                                    selected: 'bg-blue text-white rounded-full',
                                }}
                                disabled={(date) => isBefore(startOfDay(date), startOfDay(new Date()))}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex-grow">
                    <div className="flex gap-2 py-3 justify-center items-center">
                        <a onClick={goToPreviousDay}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>
                        </a>
                        <p className="font-bold uppercase">{formattedDate}</p>
                        <a onClick={goToNextDay}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </a>
                    </div>
                    <div className="bg-light-white rounded-border px-8 py-6 border border-border flex gap-4">
                        {isLogged ?
                            <>
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

                                        {/* TO DO - Regarder pour le disponible pour l'admin */}
                                        {timeSlots.map((slot, index) => {
                                            const reservation = court1.find(r => r.startTime === slot);

                                            if (reservation) {
                                                return (
                                                <ReservationPopUp
                                                    key={index}
                                                    index={index}
                                                    type={reservation.type}
                                                    date={formattedISODate}
                                                    formatedDate={formattedDate}
                                                    heure={reservation.startTime}
                                                    role={role}
                                                    email={reservation.email}
                                                    userEmail={userEmail}
                                                />
                                                );
                                            } else {
                                                return (
                                                <ReservationPopUp 
                                                    index={index}
                                                    date={formattedISODate}
                                                    formatedDate={formattedDate}
                                                    heure={slot}
                                                    role={role}
                                                    userEmail={userEmail}
                                                />
                                                );
                                            }
                                        })}
                                    </div>
                                    <div className="flex flex-col text-center flex-grow">
                                        <h3 className="mb-3 font-bold uppercase">Court II</h3>
                                        {timeSlots.map((slot, index) => {
                                            const reservation = court2.find(r => r.startTime === slot);

                                            if (reservation) {
                                                return (
                                                <ReservationPopUp
                                                    key={index}
                                                    index={index}
                                                    type={reservation.type}
                                                />
                                                );
                                            } else {
                                                return (
                                                <ReservationPopUp index={index}/>
                                                );
                                            }
                                        })}
                                    </div>
                                    <div className="flex flex-col text-center flex-grow">
                                        <h3 className="mb-3 font-bold uppercase">Court III</h3>
                                        {timeSlots.map((slot, index) => {
                                            const reservation = court3.find(r => r.startTime === slot);

                                            if (reservation) {
                                                return (
                                                <ReservationPopUp
                                                    key={index}
                                                    index={index}
                                                    type={reservation.type}
                                                />
                                                );
                                            } else {
                                                return (
                                                <ReservationPopUp index={index}/>
                                                );
                                            }
                                        })}
                                    </div>
                                    <div className="flex flex-col text-center flex-grow">
                                        <h3 className="mb-3 font-bold uppercase">Court IV</h3>
                                        {timeSlots.map((slot, index) => {
                                            const reservation = court4.find(r => r.startTime === slot);

                                            if (reservation) {
                                                return (
                                                <ReservationPopUp
                                                    key={index}
                                                    index={index}
                                                    type={reservation.type}
                                                />
                                                );
                                            } else {
                                                return (
                                                <ReservationPopUp index={index}/>
                                                );
                                            }
                                        })}
                                    </div>
                                </div>
                            </>
                        :
                            <div className="flex flex-col mx-auto gap-y-4">
                                <p>Pour pouvoir avoir accès aux réservations merci de vous connecter</p>
                                <div className="flex justify-center">
                                    <Button name="Inscription"
                                            className="text-white text-xs hover:text-blue-secondary bg-blue-secondary border-blue-secondary"
                                            href="/register"/>
                                    <Button name="Connexion"
                                            className="text-white text-xs"
                                            href="/login"/>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </section>
            
        </>
    );
}