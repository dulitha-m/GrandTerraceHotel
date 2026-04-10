import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import ReservationModal from "./ReservationModal.jsx";
import WhatsAppButton from "./WhatsAppButton.jsx";
export default function Layout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar onReserve={() => setOpen(true)} />
      <main key={location.pathname} className="pt-20">
        <Outlet />
      </main>
      <WhatsAppButton />
      <Footer onReserve={() => setOpen(true)} />
      <ReservationModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
