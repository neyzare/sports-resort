'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function ReservationPopUp({ type, index, date, heure }: { type: string, index: number, date: Date, heure: Date }) {
  const [open, setOpen] = useState(false);

  // Attention à supprimer et mettre dans les cookies ou localStorage
  const [compte, setCompte] = useState("user");

  return (
    <div>
      {/* Affichage des cards admin */}
      {compte === "admin" && type == null && ( 
        <button
          key={index}
          className=" w-full border-blue text-blue border-2 rounded-border px-6 py-2 uppercase font-bold m-1 opacity-50 cursor-not-allowed"
        >
          Disponible
        </button>
      )}
      {compte === "admin" && type == "adminUser" && (
        <button
          key={index}
          onClick={() => setOpen(true)}
          className=" w-full border-blue text-blue border-2 rounded-border px-6 py-2 uppercase font-bold m-1 opacity-70 hover:opacity-100 duration-200 ease-in-out"
        >
          {/* Data à changer */}
          🎾 User
        </button>
      )}
      {compte === "admin" && type == "adminCoach" && (
        <button
          key={index}
          onClick={() => setOpen(true)}
          className=" w-full border-blue text-blue border-2 rounded-border px-6 py-2 uppercase font-bold m-1 opacity-70 hover:opacity-100 duration-200 ease-in-out"
        >
          {/* Data à changer */}
          🎾 Coach
        </button>
      )}
      {/* {compte === "admin" && type == "adminCollectif" && (
        <button
          key={index}
          onClick={() => setOpen(true)}
          className=" w-full border-blue text-blue border-2 rounded-border px-6 py-2 uppercase font-bold m-1 opacity-70 hover:opacity-100 duration-200 ease-in-out"
        >
          🎾 Court collectif
        </button>
      )} */}

      {/* Affichage des cards occuper */}
      {(compte === "coach" || compte === "user") && type === "occuper" && ( 
        <button
          key={index}
          className=" w-full border-blue text-blue border-2 rounded-border px-6 py-2 uppercase font-bold m-1 opacity-50 cursor-not-allowed"
        >
          Occuper
        </button>
      )}

      {/* Affichage des cards pour réserver */}
      {(compte === "coach" || compte === "user") && type == null && ( 
        <button
          key={index}
          onClick={() => setOpen(true)}
          className="w-full border-blue text-blue hover:text-white hover:bg-blue border-2 rounded-border px-6 py-2 duration-200 ease-in-out uppercase font-bold m-1"
        >
          Réserver
        </button>
      )}

      {/* Affichage des cards pour réservation solo de user ou coach */}
      {type === "resaSolo" && ( 
        <button
          key={index}
          onClick={() => setOpen(true)}
          className=" w-full border-blue bg-blue text-white border-2 rounded-border px-6 py-2 uppercase font-bold m-1 opacity-70 hover:opacity-100 duration-200 ease-in-out"
        >
          🎾 Moi
        </button>
      )}

      {/* Affichage des cards pour réservation avec un coach */}
      {compte === "user" && type === "resaCoach" && ( 
        <button
          key={index}
          onClick={() => setOpen(true)}
          className=" w-full border-blue-secondary bg-blue-secondary text-white border-2 rounded-border px-6 py-2 uppercase font-bold m-1 opacity-70 hover:opacity-100 duration-200 ease-in-out"
        >
          🎾 Coach
        </button>
      )}
      {compte === "coach" && type === "resaCoach" && ( 
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
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                    <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-red-600" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                      Réserver un court
                    </DialogTitle>
                    <div className="mt-2">
                      <form action="">
                        <div className="flex-grow">
                          <label className="block text-gray-700 text-xsmall font-bold mb-2" htmlFor="sport">
                            Choix du sport
                          </label>
                          <select name="sport" id="" className="border border-border rounded-border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            <option value="france">Tennis</option>
                          </select>
                        </div>
                        <div className="flex-grow">
                          <label className="block text-gray-700 text-xsmall font-bold mb-2" htmlFor="sport">
                            Type de réservation
                          </label>
                          <input type="radio" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
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
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  )
}
