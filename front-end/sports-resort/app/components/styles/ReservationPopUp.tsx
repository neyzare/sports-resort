'use client'

import { useEffect, useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react'
import { BarsArrowUpIcon } from '@heroicons/react/24/outline'
import axios from 'axios'
import { getUserIdFromToken } from '~/lib/auth'

type Creneau = {
  disponible: boolean
  startTime: string
  sport?: { emojie?: string }
  user?: { email: string }
  coach?: { email: string }
}

type Sport  = { id: number; name: string; emojie: string }
type Coach  = { id: number; firstname: string; email: string }

type Props = {
  role: string | null
  userEmail: string | null
  index: number
  dateISO: string
  dateLong: string
  heure: string
  creneau?: Creneau
  court: number
  sport_id: number
  onUpdate?: () => void
}

const API_BASE = 'http://localhost:8080/api'

export default function ReservationPopUp({
  role,
  userEmail,
  index,
  dateISO,
  dateLong,
  heure,
  creneau,
  court,
  onUpdate,
}: Props) {
  const [open, setOpen]         = useState(false)
  const [sports, setSports]     = useState<Sport[]>([])
  const [sportId, setSportId]   = useState<number | ''>('');
  const [coachs, setCoachs]     = useState<Coach[]>([]);
  const [coachId, setCoachId]   = useState<number | ''>('')
  const [reservationType, setReservationType] =
    useState<'solo' | 'coach'>('solo')
  const [token, setToken]       = useState<string | null>(null);

  const [userId, setUserId] = useState<number | null>(null)


  useEffect(() => {
    const jwt = localStorage.getItem('jwt')
    setToken(jwt)
  }, [])

  useEffect(() => {
    if (!token) return
    const headers = { Authorization: `Bearer ${token}` };
    
    (async () => {
      try {
        const [s] = await Promise.all([
          axios.get(`${API_BASE}/sports`, { headers }),
        ])
        setSports(s.data)
      } catch (err) {
        console.error('Erreur fetch sports :', err)
      }
    })()
  }, [token])

  useEffect(() => {
    if (!token) return
    const headers = { Authorization: `Bearer ${token}` };

    (async () => {
      try {
        const [c] = await Promise.all([
          axios.get(`${API_BASE}/user/coachs/sport/${sportId}`, { headers }),
        ])
        setCoachs(c.data)
      } catch (err) {
        console.error('Erreur fetch coachs :', err)
      }
    })()
  }, [sportId])

  useEffect(() => {
  if (!token || !userEmail) return

  const headers = { Authorization: `Bearer ${token}` }

  ;(async () => {
    try {
      const res = await axios.get(`${API_BASE}/users/${userEmail}`, {
        headers,
      })
      setUserId(res.data.id)
    } catch (err) {
      console.error('Erreur récupération userId :', err)
    }
  })()
}, [token, userEmail])


  const emoji = creneau?.sport?.emojie

  type Status =
    | 'FREE'
    | 'ADMIN_SEE_USER'
    | 'ADMIN_SEE_COACH'
    | 'USER_SOLO'
    | 'USER_COACH'
    | 'COACH_MY_SOLO'
    | 'COACH_I_AM_COACH'
    | 'COACH_MY_WITH_COACH'
    | 'BUSY'

  let status: Status

  if (!creneau || creneau.disponible || (!creneau.user && !creneau.coach)) {
    status = 'FREE'
  } else {
    const isSolo        = !creneau.coach
    const isMeUser      = creneau.user?.email  === userEmail
    const isMeCoach     = creneau.coach?.email === userEmail

    if (role === 'ADMIN') {
      status = isSolo ? 'ADMIN_SEE_USER' : 'ADMIN_SEE_COACH'
    } else if (role === 'USER') {
      if (isMeUser && isSolo)              status = 'USER_SOLO'
      else if (isMeUser && !isSolo)        status = 'USER_COACH'
      else                                 status = 'BUSY'
    } else if (role === 'COACH') {
      if (isMeUser && isSolo)                       status = 'COACH_MY_SOLO'
      else if (isMeCoach)                           status = 'COACH_I_AM_COACH'
      else if (isMeUser && !isSolo && !isMeCoach)   status = 'COACH_MY_WITH_COACH'
      else                                          status = 'BUSY'
    } else {
      status = 'BUSY'
    }
  }

  const base   = 'w-full border-2 rounded-border px-6 py-2 uppercase font-bold m-1'
  const blue   = 'border-blue text-blue'
  const blueBg = 'border-blue bg-blue text-white'
  const blue2  = 'border-blue-secondary bg-blue-secondary text-white'

  const button = (() => {
    switch (status) {
      case 'FREE':
        return role === 'ADMIN' ? (
          <button className={`${base} ${blue} opacity-50 cursor-not-allowed`}>
            Disponible
          </button>
        ) : (
          <button
            onClick={() => setOpen(true)}
            className={`${base} ${blue} hover:bg-blue hover:text-white`}
          >
            Réserver
          </button>
        )

      case 'ADMIN_SEE_USER':
        return (
          <button
            onClick={() => setOpen(true)}
            className={`${base} ${blue} opacity-70 hover:opacity-100`}
          >
            {emoji} User
          </button>
        )
      case 'ADMIN_SEE_COACH':
        return (
          <button
            onClick={() => setOpen(true)}
            className={`${base} ${blue} opacity-70 hover:opacity-100`}
          >
            {emoji} Coach
          </button>
        )

      case 'USER_SOLO':
        return (
          <button
            onClick={() => setOpen(true)}
            className={`${base} ${blueBg} opacity-70 hover:opacity-100`}
          >
            {emoji} Moi
          </button>
        )
      case 'USER_COACH':
        return (
          <button
            onClick={() => setOpen(true)}
            className={`${base} ${blue2} opacity-70 hover:opacity-100`}
          >
            {emoji} Coach
          </button>
        )

      case 'COACH_MY_SOLO':
        return (
          <button
            onClick={() => setOpen(true)}
            className={`${base} ${blueBg} opacity-70 hover:opacity-100`}
          >
            {emoji} Moi
          </button>
        )
      case 'COACH_I_AM_COACH':
        return (
          <button
            onClick={() => setOpen(true)}
            className={`${base} ${blue2} opacity-70 hover:opacity-100`}
          >
            {emoji} Moi
          </button>
        )
      case 'COACH_MY_WITH_COACH':
        return (
          <button
            onClick={() => setOpen(true)}
            className={`${base} ${blue2} opacity-70 hover:opacity-100`}
          >
            {emoji} Coach
          </button>
        )

      case 'BUSY':
        return (
          <button className={`${base} ${blue} opacity-50 cursor-not-allowed`}>
            Occupé
          </button>
        )
    }
  })()

  console.log(userId)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!token) return
    const headers = { Authorization: `Bearer ${token}` }

    const data: any = {
      court: court,
      date: dateISO,
      startTime: heure,
      sport: { id: sportId },
      user: {id: userId},
      type: reservationType,
    }
    if (reservationType === 'coach') {
      data.coach = { id: coachId }
    }

    try {
      await axios.post(`${API_BASE}/creneaux`, data, { headers })
      setOpen(false)
      onUpdate?.()
    } catch (err) {
      console.error('Erreur création résa :', err)
    }
  }

  const handleCancelReservation = async () => {
    if (!token || !creneau?.id) return;
    const headers = { Authorization: `Bearer ${token}` };

    try {
      await axios.delete(`${API_BASE}/creneaux/${creneau.id}`, { headers });
      setOpen(false);
      onUpdate?.();
    } catch (err) {
      console.error('Erreur annulation résa :', err);
    }
  }

  return (
    <div>
      {button}

      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop className="fixed inset-0 bg-gray-500/75" />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 sm:items-center sm:p-0">
            <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl sm:my-8 sm:w-full sm:max-w-lg">
              {status === 'FREE' ? (
                <form onSubmit={handleSubmit}>
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-light-white sm:mx-0 sm:size-10">
                        <BarsArrowUpIcon
                          aria-hidden="true"
                          className="size-6 text-blue-secondary"
                        />
                      </div>
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                        <DialogTitle className="text-base font-semibold text-gray-900">
                          Réserver le court n°{court}
                        </DialogTitle>

                        <p className="mt-2 text-sm text-gray-500">
                          {dateLong} à {heure}
                        </p>

                        <label className="block mt-4 text-xs font-bold text-gray-700">
                          Choix du sport
                        </label>
                        <select
                          name="sport"
                          required
                          className="border border-border rounded-border w-full py-2 px-3 mb-4"
                          defaultValue=""
                          onChange={(e) => {
                            const id = Number(e.target.value);
                            setSportId(id);
                          }}
                        >
                          <option value="" disabled>
                            Sélectionnez un sport
                          </option>
                          {sports.map((s) => (
                            <option key={s.id} value={s.id}>
                              {s.emojie} {s.name}
                            </option>
                          ))}
                        </select>

                        <fieldset className="mb-4">
                          <legend className="block text-xs font-bold text-gray-700 mb-1">
                            Type de réservation
                          </legend>

                          <div className="flex items-center mb-2">
                            <input
                              id={`solo-${index}`}
                              type="radio"
                              name="reservationType"
                              value="solo"
                              checked={reservationType === 'solo'}
                              onChange={() => setReservationType('solo')}
                              className="h-4 w-4 text-blue border-gray-300"
                            />
                            <label
                              htmlFor={`solo-${index}`}
                              className="ml-2 text-xs text-gray-700"
                            >
                              Solo
                            </label>
                          </div>

                          <div className="flex items-center">
                            <input
                              id={`coach-${index}`}
                              type="radio"
                              name="reservationType"
                              value="coach"
                              checked={reservationType === 'coach'}
                              onChange={() => setReservationType('coach')}
                              className="h-4 w-4 text-blue border-gray-300"
                            />
                            <label
                              htmlFor={`coach-${index}`}
                              className="ml-2 text-xs text-gray-700"
                            >
                              Avec coach
                            </label>
                          </div>
                        </fieldset>

                        {reservationType === 'coach' && (
                          <>
                            <label className="block text-xs font-bold text-gray-700 mb-1">
                              Choix du coach
                            </label>
                            <select
                              name="coach"
                              required
                              className="border border-border rounded-border w-full py-2 px-3 mb-4"
                              defaultValue=""
                              onChange={(e) => setCoachId(Number(e.target.value))}
                            >
                              <option value="" disabled>
                                Sélectionnez un coach
                              </option>
                              {coachs.map((c) => (
                                <option key={c.id} value={c.id}>
                                  {c.firstname}
                                </option>
                              ))}
                            </select>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse">
                    <button
                      type="submit"
                      className="bg-blue border-blue text-white border-2 rounded-full px-6 py-2 hover:bg-transparent hover:text-blue uppercase font-bold m-1 sm:w-auto text-xs"
                    >
                      Réserver
                    </button>
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="border-blue text-blue border-2 rounded-full px-6 py-2 hover:bg-blue hover:text-white uppercase font-bold m-1 sm:w-auto text-xs"
                    >
                      Fermer
                    </button>
                  </div>
                </form>
              ) : (
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-light-white sm:mx-0 sm:size-10">
                      <BarsArrowUpIcon
                        aria-hidden="true"
                        className="size-6 text-blue-secondary"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                      <DialogTitle className="text-base font-semibold text-gray-900">
                        Détail de la réservation
                      </DialogTitle>
                      <p className="mt-2 text-sm text-gray-500">
                        {dateLong} à {heure}
                      </p>

                      <div className="mt-4 text-sm text-gray-700 space-y-2">
                        {creneau?.sport && (
                          <div>
                            <strong>Sport : </strong>
                            {creneau.sport.emojie} {creneau.sport.name}
                          </div>
                        )}

                        {creneau?.user && (
                          <div>
                            <strong>Utilisateur : </strong>
                            {creneau.user.firstname} {creneau.user.lastname} (
                            {creneau.user.email})
                          </div>
                        )}

                        {creneau?.coach && (
                          <div>
                            <strong>Coach : </strong>
                            {creneau.coach.firstname} {creneau.coach.lastname} (
                            {creneau.coach.email})
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse">
                    <button
                      onClick={handleCancelReservation}
                      className="bg-red border-red text-white border-2 rounded-full px-6 py-2 hover:bg-transparent hover:text-red-600 uppercase font-bold m-1 sm:w-auto text-xs"
                    >
                      Annuler la résa
                    </button>
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="border-blue text-blue border-2 rounded-full px-6 py-2 hover:bg-blue hover:text-white uppercase font-bold m-1 sm:w-auto text-xs"
                    >
                      Fermer
                    </button>
                  </div>
                </div>
              )}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  )
}