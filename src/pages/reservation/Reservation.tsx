import React from "react"
import { Link } from "react-router-dom";
import {BodyReservation} from '../reservation/components/BodyReservation'
import {HeaderReservation} from '../reservation/components/HeaderReservation'

export function Reservation() {
  
  return (
<div className="w-full h-screen bg-gray-100 dark:bg-gray-800 flex flex-col">
  <HeaderReservation/>
  <BodyReservation/>
  <div className="bg-white dark:bg-gray-900 shadow-lg p-4 flex justify-end">
  <Link to="/add_reservation">
  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">Reservar parqueo</button>
</Link>
  </div>
</div>
  )
}