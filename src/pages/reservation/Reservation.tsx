import React from "react";
import { Link } from "react-router-dom";
import { BodyReservation } from "../reservation/components/BodyReservation";
import { HeaderReservation } from "../reservation/components/HeaderReservation";
import { useAuthStore } from "../../store";

export function Reservation() {
  const { user } = useAuthStore(); // Accede al estado de usuario desde el store
  console.log("usuario", user);

  return (
    <div className="w-full h-screen bg-gray-100 dark:bg-gray-800 flex flex-col">
      <HeaderReservation />
      <BodyReservation />

    </div>
  );
}
