import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "./pages/auth/LoginPage"
import { RegisterPage } from "./pages/auth/RegisterPage"
import { Layout, ProtectedRoute } from "./components"
import { ProfileUser } from "./pages/user/ProfileUser"
import { Reservation } from "./pages/reservation/Reservation"
import React from "react"
import { AddReservation } from "./pages/reservation/AddReservation"
import {EditProfileUser} from './pages/user/EditProfile'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Reservation />} />
        <Route path="/add_reservation" element={<AddReservation />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfileUser />}/>
        <Route path="/edit_profile" element={<EditProfileUser />}/>
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App
