'use client'

import { useEffect, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { BarsArrowUpIcon } from '@heroicons/react/24/outline'
import { getUserEmailFromToken, getUserRoleFromToken } from '~/lib/auth';
import axios from 'axios';

const API_BASE = 'http://localhost:8080/api';

export default function ReservationPopUp({ role, type, index, formatedDate, date, heure, userEmail, email }: { role: string | null, type: string, index: number, formatedDate?: string, date?: string, heure: string, userEmail: string | null, email: string | null }) {
  const [open, setOpen] = useState(false);
  const [selectedHeure, setSelectedHeure] = useState<string>();
  const [reservationType, setReservationType] = useState<'solo' | 'coach'>('solo');
  const [sports, setSports] = useState<Sport[]>([]);
  const [token, setToken] = useState<string | null>(null);

  type Sport = { id: number; name: string, emojie: string }

  useEffect(() => {
    const stored = localStorage.getItem('jwt');
    setToken(stored);
  }, []);

  useEffect(() => {
    if (!token) return;
    const headers = { Authorization: `Bearer ${token}` };

    (async () => {
      try {
        const { data } = await axios.get(
          `${API_BASE}/sports`,
          { headers },
        );
        setSports(data);
      } catch (err) {
        console.error('Erreur fetch:', err);
      }
    })();
  }, [token]);

  console.log(sports);

  return (
    <div>
      {/* Affichage des cards admin */}
      {role === "ADMIN" && type == null && ( 
        <button
          key={index}
          className=" w-full border-blue text-blue border-2 rounded-border px-6 py-2 uppercase font-bold m-1 opacity-50 cursor-not-allowed"
        >
          Disponible
        </button>
      )}
      {role === "ADMIN" && type == "resaUser" && (
        <button
          key={index}
          onClick={() => setOpen(true)}
          className=" w-full border-blue text-blue border-2 rounded-border px-6 py-2 uppercase font-bold m-1 opacity-70 hover:opacity-100 duration-200 ease-in-out"
        >
          🎾 User
        </button>
      )}
      {role === "ADMIN" && type == "resaCoach" && (
        <button
          key={index}
          onClick={() => setOpen(true)}
          className=" w-full border-blue text-blue border-2 rounded-border px-6 py-2 uppercase font-bold m-1 opacity-70 hover:opacity-100 duration-200 ease-in-out"
        >
          🎾 Coach
        </button>
      )}

      {/* Affichage des cards occuper */}
      {(role === "COACH" || role === "USER") && type === "occuper" && ( 
        <button
          key={index}
          className=" w-full border-blue text-blue border-2 rounded-border px-6 py-2 uppercase font-bold m-1 opacity-50 cursor-not-allowed"
        >
          Occuper
        </button>
      )}

      {/* Affichage des cards pour réserver */}
      {(role === "COACH" || role === "USER") && type == null && ( 
        <button
          key={index}
          onClick={() => {
            setSelectedHeure(heure);
            setOpen(true);
          }}
          className="w-full border-blue text-blue hover:text-white hover:bg-blue border-2 rounded-border px-6 py-2 duration-200 ease-in-out uppercase font-bold m-1"
        >
          Réserver
        </button>
      )}

      {/* Affichage des cards pour réservation solo de user ou coach */}
      {type === "resaUser" && ( 
        <button
          key={index}
          onClick={() => setOpen(true)}
          className=" w-full border-blue bg-blue text-white border-2 rounded-border px-6 py-2 uppercase font-bold m-1 opacity-70 hover:opacity-100 duration-200 ease-in-out"
        >
          🎾 Moi
        </button>
      )}

      {/* Affichage des cards pour réservation avec un coach */}
      {role === "USER" && type === "resaCoach" && ( 
        <button
          key={index}
          onClick={() => setOpen(true)}
          className=" w-full border-blue-secondary bg-blue-secondary text-white border-2 rounded-border px-6 py-2 uppercase font-bold m-1 opacity-70 hover:opacity-100 duration-200 ease-in-out"
        >
          🎾 Coach
        </button>
      )}
      {role === "COACH" && type === "resaCoach" && ( 
        <button
          key={index}
          onClick={() => setOpen(true)}
          className=" w-full border-blue-secondary bg-blue-secondary text-white border-2 rounded-border px-6 py-2 uppercase font-bold m-1 opacity-70 hover:opacity-100 duration-200 ease-in-out"
        >
          🎾 User
        </button>
      )}

      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <form action="">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-light-white sm:mx-0 sm:size-10">
                      <BarsArrowUpIcon aria-hidden="true" className="size-6 text-blue-secondary" />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                        Réserver un court
                      </DialogTitle>
                      <div className="mt-2">
                          <div className="flex-grow">
                            <p className='block text-gray-700 text-xsmall font-bold mb-2'>{formatedDate} à {selectedHeure}</p>
                            <input hidden name='date' value={date} />
                            <input hidden name='heure' value={selectedHeure} />

                            <label className="block text-gray-700 text-xsmall font-bold mb-2" htmlFor="sport">
                              Choix du sport
                            </label>
                            <select name="sport" id="" className="border border-border rounded-border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" defaultValue="">
                              <option value="" disabled>
                                Sélectionnez un sport
                              </option>
                              {sports.map((sport) => (
                                <option key={sport.id} value={sport.name}>
                                  {sport.emojie} {sport.name}
                                </option>
                              ))}
                            </select>

                            <fieldset>
                              <legend className="block text-gray-700 text-xsmall font-bold mb-2">
                                Type de réservation
                              </legend>

                              <div className="flex items-center mb-2">
                                <input
                                  id="reservation-solo"
                                  type="radio"
                                  name="reservationType"
                                  value="solo"
                                  defaultChecked
                                  checked={reservationType === 'solo'}
                                  onChange={() => setReservationType('solo')}
                                  className="h-4 w-4 text-blue focus:ring-blue border-gray-300"
                                />
                                <label htmlFor="reservation-solo" className="ml-2 block text-gray-700 text-xsmall">
                                  Solo
                                </label>
                              </div>

                              <div className="flex items-center mb-4">
                                <input
                                  id="reservation-coach"
                                  type="radio"
                                  name="reservationType"
                                  value="coach"
                                  checked={reservationType === 'coach'}
                                  onChange={() => setReservationType('coach')}
                                  className="h-4 w-4 text-blue focus:ring-blue border-gray-300"
                                />
                                <label htmlFor="reservation-coach" className="ml-2 block text-gray-700 text-xsmall ">
                                  Avec coach
                                </label>
                              </div>
                            </fieldset>

                            {reservationType === 'coach' && (
                              <>
                                <label className="block text-gray-700 text-xsmall font-bold mb-2">
                                  Choix du coach
                                </label>
                                <select
                                  name="coach"
                                  className="border border-border rounded-border w-full py-2 px-3 mb-4"
                                  defaultValue=""
                                >
                                  <option value="" disabled>
                                    Sélectionnez un coach
                                  </option>
                                  <option value="guigui">Guigui</option>
                                </select>
                              </>
                            )}
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="submit"
                    onClick={() => setOpen(false)}
                    className={"bg-blue border-blue hover:text-blue text-white border-2 rounded-full px-6 py-2 w-fit hover:bg-transparent duration-200 ease-in-out uppercase font-bold m-1 sm:w-auto text-xs"}
                  >
                    Réserver
                  </button>
                  <button
                    type="button"
                    data-autofocus
                    onClick={() => setOpen(false)}
                    className={"hover:bg-blue border-blue text-blue hover:text-white border-2 rounded-full px-6 py-2 w-fit bg-transparent duration-200 ease-in-out uppercase font-bold m-1 sm:w-auto text-xs"}
                  >
                    Fermer
                  </button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  )
}
