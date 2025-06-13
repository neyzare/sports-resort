'use client'

import { useEffect, useState } from 'react'
import Header from '~/components/layout/Header'
import { DayPicker } from 'react-day-picker'
import { fr } from 'react-day-picker/locale'
import { isBefore, startOfDay } from 'date-fns'
import 'react-day-picker/style.css'
import ReservationPopUp from '~/components/styles/ReservationPopUp'
import {
  getUserEmailFromToken,
  getUserRoleFromToken,
  isAuthenticated,
} from '~/lib/auth'
import Button from '~/components/styles/Button'
import axios from 'axios'

const API_BASE = 'http://localhost:8080/api/creneaux'

export default function Reservations() {
  const [selected, setSelected] = useState<Date>(() => new Date())

  const [court1, setCourt1] = useState<any[]>([])
  const [court2, setCourt2] = useState<any[]>([])
  const [court3, setCourt3] = useState<any[]>([])
  const [court4, setCourt4] = useState<any[]>([])

  const [token, setToken] = useState<string | null>(null)
  const [isLogged, setIsLogged] = useState(false)
  const [role, setRole] = useState<string | null>(null)
  const [userEmail, setUserEmail] = useState<string | null>(null)

  const formattedDate =
    selected?.toLocaleDateString('fr-FR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }) ?? 'Sélectionnez une date'

  const formattedISODate = `${selected.getFullYear()}-${String(
    selected.getMonth() + 1,
  ).padStart(2, '0')}-${String(selected.getDate()).padStart(2, '0')}`

  const isToday =
    startOfDay(selected).getTime() === startOfDay(new Date()).getTime()

  const goToPreviousDay = () => {
    if (!isLogged || isToday) return
    setSelected((prev) => {
      const d = new Date(prev)
      d.setDate(d.getDate() - 1)
      return d
    })
  }

  const goToNextDay = () => {
    if (!isLogged) return
    setSelected((prev) => {
      const d = new Date(prev)
      d.setDate(d.getDate() + 1)
      return d
    })
  }

  useEffect(() => {
    setIsLogged(isAuthenticated())
    setRole(getUserRoleFromToken())
    setUserEmail(getUserEmailFromToken())
    setToken(localStorage.getItem('jwt'))
  }, [])

  const fetchCreneaux = async () => {
    if (!token) return
    const headers = { Authorization: `Bearer ${token}` }

    try {
      const [c1, c2, c3, c4] = await Promise.all([
        axios.get(`${API_BASE}/${formattedISODate}/1`, { headers }),
        axios.get(`${API_BASE}/${formattedISODate}/2`, { headers }),
        axios.get(`${API_BASE}/${formattedISODate}/3`, { headers }),
        axios.get(`${API_BASE}/${formattedISODate}/4`, { headers }),
      ])
      setCourt1(c1.data)
      setCourt2(c2.data)
      setCourt3(c3.data)
      setCourt4(c4.data)
    } catch (err) {
      console.error('Erreur fetch :', err)
    }
  }


  useEffect(() => {
    fetchCreneaux()
  }, [token, formattedISODate])


  const timeSlots = Array.from({ length: 12 }, (_, i) =>
    `${String(i + 8).padStart(2, '0')}:00`,
  )

  return (
    <>
      <Header />

      <section className="relative bg-blue text-white overflow-hidden">
        <div className="h-auto text-center py-12">
            <h1 className="text-heading1 font-bold max-w-xl mx-auto text-white">Réservation de créneaux de sports</h1>
        </div>

        <div className="w-full overflow-hidden leading-[0] bg-white">Add commentMore actions
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
          <h3 className="text-center font-bold uppercase py-3">calendrier</h3>
          <div className="bg-light-white rounded-border px-4 py-6 border border-border">
            <DayPicker
              locale={fr}
              mode="single"
              selected={selected}
              onSelect={setSelected}
              classNames={{
                today: 'stroke-blue',
                chevron: 'fill-blue',
                selected: 'bg-blue text-white rounded-full',
              }}
              disabled={(d) =>
                isBefore(startOfDay(d), startOfDay(new Date()))
              }
            />
          </div>
        </div>

        <div className="flex-grow">
          <div className="flex gap-2 py-3 justify-center items-center">
            <a onClick={goToPreviousDay}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="currentColor"
                className="size-4"
                fill="none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </a>
            <p className="font-bold uppercase">{formattedDate}</p>
            <a onClick={goToNextDay}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="currentColor"
                className="size-4"
                fill="none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>

          <div className="bg-light-white rounded-border px-8 py-6 border border-border flex gap-4">
            {isLogged ? (
              <>
                <div className="w-fit pt-6">
                  {Array.from({ length: 13 }).map((_, i) => (
                    <p key={i} className="mb-7 font-bold uppercase">
                      {i + 8}:00
                    </p>
                  ))}
                </div>

                <div className="flex flex-col text-center flex-grow">
                  <h3 className="mb-3 font-bold uppercase">Court I</h3>

                  {timeSlots.map((slot, index) => {
                    const creneau = court1.find(
                      (c: any) => c.startTime.slice(0, 5) === slot,
                    )

                    return (
                      <ReservationPopUp
                        key={index}
                        index={index}
                        role={role}
                        userEmail={userEmail}
                        dateISO={formattedISODate}
                        dateLong={formattedDate}
                        heure={slot}
                        creneau={creneau}
                        onUpdate={fetchCreneaux}
                      />
                    )
                  })}
                </div>
                <div className="flex flex-col text-center flex-grow">
                  <h3 className="mb-3 font-bold uppercase">Court II</h3>

                  {timeSlots.map((slot, index) => {
                    const creneau = court2.find(
                      (c: any) => c.startTime.slice(0, 5) === slot,
                    )

                    return (
                      <ReservationPopUp
                        key={index}
                        index={index}
                        role={role}
                        userEmail={userEmail}
                        dateISO={formattedISODate}
                        dateLong={formattedDate}
                        heure={slot}
                        creneau={creneau}
                        onUpdate={fetchCreneaux}
                      />
                    )
                  })}
                </div>
                <div className="flex flex-col text-center flex-grow">
                  <h3 className="mb-3 font-bold uppercase">Court III</h3>

                  {timeSlots.map((slot, index) => {
                    const creneau = court3.find(
                      (c: any) => c.startTime.slice(0, 5) === slot,
                    )

                    return (
                      <ReservationPopUp
                        key={index}
                        index={index}
                        role={role}
                        userEmail={userEmail}
                        dateISO={formattedISODate}
                        dateLong={formattedDate}
                        heure={slot}
                        creneau={creneau}
                        onUpdate={fetchCreneaux}
                      />
                    )
                  })}
                </div>
                <div className="flex flex-col text-center flex-grow">
                  <h3 className="mb-3 font-bold uppercase">Court IV</h3>

                  {timeSlots.map((slot, index) => {
                    const creneau = court4.find(
                      (c: any) => c.startTime.slice(0, 5) === slot,
                    )

                    return (
                      <ReservationPopUp
                        key={index}
                        index={index}
                        role={role}
                        userEmail={userEmail}
                        dateISO={formattedISODate}
                        dateLong={formattedDate}
                        heure={slot}
                        creneau={creneau}
                        onUpdate={fetchCreneaux}
                      />
                    )
                  })}
                </div>
              </>
            ) : (
              <div className="flex flex-col mx-auto gap-y-4">
                <p>
                  Pour pouvoir accéder aux réservations merci de vous connecter.
                </p>
                <div className="flex justify-center">
                  <Button
                    name="Inscription"
                    className="text-white text-xs hover:text-blue-secondary bg-blue-secondary border-blue-secondary"
                    href="/register"
                  />
                  <Button
                    name="Connexion"
                    className="text-white text-xs"
                    href="/login"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
